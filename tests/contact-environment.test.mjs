// 問い合わせAPIの fail-closed ガードのテスト（Node 標準のテストランナー。依存パッケージの追加なし）。
// 実行：node --test tests/contact-environment.test.mjs
// 実DB・Slack・ネットワークには一切触れない（純粋な関数の判定と、route.ts の文字列の読み取りだけ）。
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { isContactExternalWriteAllowed } from "../lib/contact-environment.ts";

test('VERCEL_ENV が "production" と完全一致する場合だけ許可する', () => {
  assert.equal(isContactExternalWriteAllowed({ VERCEL_ENV: "production" }), true);
});

test("production 以外・未設定・表記ゆれ・想定外の値はすべて止める（fail-closed）", () => {
  const blocked = [
    "preview",
    "development",
    undefined,
    "",
    "Production",
    "PRODUCTION",
    " production",
    "production ",
    "true",
    "1",
    "staging",
    "prod",
    "production\n",
  ];
  for (const value of blocked) {
    assert.equal(
      isContactExternalWriteAllowed({ VERCEL_ENV: value }),
      false,
      `VERCEL_ENV=${JSON.stringify(value)} は止めること`
    );
  }
});

test("env に VERCEL_ENV 自体が無い場合も止める", () => {
  assert.equal(isContactExternalWriteAllowed({}), false);
  assert.equal(isContactExternalWriteAllowed({ NODE_ENV: "production" }), false);
});

test("ガードは POST の中で、本文の読み取り・状態更新・秘密情報の参照・外部送信より前にある", () => {
  const source = readFileSync(new URL("../app/api/contact/route.ts", import.meta.url), "utf8");

  const postMatches = source.match(/export async function POST\b/g) ?? [];
  assert.equal(postMatches.length, 1, "export async function POST は1つだけであること");

  const postIndex = source.indexOf("export async function POST");
  const guardIndex = source.indexOf("if (!isContactExternalWriteAllowed())");
  assert.ok(guardIndex > postIndex, "ガードは POST の中にあること");

  const sideEffectMarkers = [
    "req.json(",
    "body.website",
    "isRateLimited(clientKey",
    "isDuplicateSubmission(dedupeKey",
    "getSupabaseServerClient(",
    "fetch(webhookUrl",
  ];
  for (const marker of sideEffectMarkers) {
    const markerIndex = source.indexOf(marker, postIndex);
    assert.ok(markerIndex > 0, `route.ts に ${marker} があること`);
    assert.ok(guardIndex < markerIndex, `ガードは ${marker} より前にあること`);
  }

  const firstMarkerIndex = Math.min(...sideEffectMarkers.map((m) => source.indexOf(m, postIndex)));
  assert.match(
    source.slice(guardIndex, firstMarkerIndex),
    /status: 403/,
    "ガードは 403 を返して処理を終えること"
  );
});
