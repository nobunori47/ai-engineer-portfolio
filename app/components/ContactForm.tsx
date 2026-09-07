"use client";

import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";
import { cases } from "@/lib/cases";
import { INQUIRY_TYPES } from "@/lib/contact-options";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [currentIssue, setCurrentIssue] = useState("");
  const [sourceCaseSlug, setSourceCaseSlug] = useState<string>("");
  const submittingRef = useRef(false);

  // Works詳細ページからの「?case=<slug>」を読み取り、参照事例をフォームへ安全に引き継ぐ。
  // URLのtitle等の任意テキストは信用せず、slugを自サイトのCase一覧と突き合わせた結果だけを使う。
  // サーバー側レンダリング時点ではURLのクエリを参照できないため、hydrationミスマッチを
  // 避ける目的で、意図的にマウント後のuseEffectで初期値を補完している。
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const slug = params.get("case");
      if (!slug) return;
      const matched = cases.find((c) => c.slug === slug);
      if (!matched) return;
      setSourceCaseSlug(matched.slug);
      setCurrentIssue(
        (prev) => prev || `「${matched.title}」のような仕組みについて相談したいです。`
      );
    } catch {
      // window.location等が利用できない環境では何もしない
    }
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  const referencedCase = sourceCaseSlug
    ? cases.find((c) => c.slug === sourceCaseSlug)
    : undefined;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // 二重送信防止（連打対策）。stateの更新は非同期なため、refでも即座にガードする。
    if (submittingRef.current) return;
    submittingRef.current = true;
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name")?.toString() ?? "",
      company: data.get("company")?.toString() ?? "",
      email: data.get("email")?.toString() ?? "",
      inquiryType: data.get("inquiryType")?.toString() ?? "",
      currentIssue: data.get("currentIssue")?.toString() ?? "",
      message: data.get("message")?.toString() ?? "",
      timeline: data.get("timeline")?.toString() ?? "",
      budget: data.get("budget")?.toString() ?? "",
      sourceCase: sourceCaseSlug,
      consent: data.get("consent") === "on",
      website: data.get("website")?.toString() ?? "",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setStatus("error");
        setErrorMessage(json.error ?? "送信に失敗しました。時間をおいて再度お試しください。");
        submittingRef.current = false;
        return;
      }
      setStatus("success");
      form.reset();
      setCurrentIssue("");
    } catch {
      setStatus("error");
      setErrorMessage("送信に失敗しました。通信環境をご確認のうえ、再度お試しください。");
      submittingRef.current = false;
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
        <p className="font-medium">
          お問い合わせありがとうございます。内容を確認のうえ、ご入力いただいたメールアドレスへご連絡します。
        </p>
        <p className="mt-2 text-sm text-[var(--color-text-sub)] leading-relaxed">
          通常1〜2営業日以内にご返信します。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot: 通常のユーザーには見えない項目。埋まっていたらボットとみなす */}
      <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {referencedCase && (
        <div className="rounded-md border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-3 text-xs text-[var(--color-text-sub)] leading-relaxed">
          「{referencedCase.title}」の事例についてのお問い合わせとして送信されます。内容は下の「ご相談内容」欄で自由に編集できます。
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="お名前" name="name" required autoComplete="name" />
        <Field label="会社名（任意）" name="company" autoComplete="organization" />
      </div>

      <Field
        label="返信先メールアドレス"
        name="email"
        type="email"
        required
        autoComplete="email"
      />

      <SelectField label="相談内容の種類" name="inquiryType" required options={INQUIRY_TYPES} />

      <TextAreaField
        label="現在お困りのこと（任意）"
        name="currentIssue"
        placeholder="例：Excelでの月次集計に毎回時間がかかっている 等"
        value={currentIssue}
        onChange={setCurrentIssue}
      />

      <TextAreaField
        label="ご相談内容"
        name="message"
        required
        rows={5}
        placeholder="実現したいこと、気になっていることなど、自由にご記入ください。「これ、AIで減らせる？」という段階でも大丈夫です。"
      />

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="希望時期（任意）" name="timeline" placeholder="例：9月頃、できるだけ早く 等" />
        <Field label="予算感（任意）" name="budget" placeholder="例：10〜30万円 等" />
      </div>

      <p className="text-xs text-[var(--color-text-sub)]">
        相談内容が固まっていなくても大丈夫です。現在困っている作業や業務を簡単にお知らせください。
      </p>

      <label className="flex items-start gap-2 text-xs text-[var(--color-text-sub)] leading-relaxed">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 shrink-0 accent-[var(--color-accent)]"
        />
        <span>
          <Link
            href="/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accent)] underline underline-offset-2"
          >
            プライバシーポリシー
          </Link>
          の内容を確認し、同意の上で送信します。
        </span>
      </label>

      {status === "error" && <p className="text-sm text-red-600" role="alert">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        aria-busy={status === "submitting"}
        className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "送信中..." : "送信する"}
        <span className="font-[family-name:var(--font-mono)]">→</span>
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block text-sm">
      <span className="block mb-1.5 text-[var(--color-text-sub)]">
        {label}
        {required && <span className="text-[var(--color-accent)]"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2.5 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  required = false,
  options,
}: {
  label: string;
  name: string;
  required?: boolean;
  options: readonly string[];
}) {
  return (
    <label className="block text-sm">
      <span className="block mb-1.5 text-[var(--color-text-sub)]">
        {label}
        {required && <span className="text-[var(--color-accent)]"> *</span>}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2.5 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors"
      >
        <option value="" disabled>
          選択してください
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextAreaField({
  label,
  name,
  required = false,
  rows = 3,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  name: string;
  required?: boolean;
  rows?: number;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}): ReactNode {
  const isControlled = value !== undefined;
  return (
    <label className="block text-sm">
      <span className="block mb-1.5 text-[var(--color-text-sub)]">
        {label}
        {required && <span className="text-[var(--color-accent)]"> *</span>}
      </span>
      <textarea
        name={name}
        required={required}
        rows={rows}
        placeholder={placeholder}
        {...(isControlled
          ? { value, onChange: (e: ChangeEvent<HTMLTextAreaElement>) => onChange?.(e.target.value) }
          : {})}
        className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2.5 text-sm leading-relaxed focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-y"
      />
    </label>
  );
}
