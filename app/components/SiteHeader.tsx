"use client";

import { useEffect, useState } from "react";

/**
 * トップページの固定ヘッダー（刷新版ナビゲーション）。
 * - 項目は日本語。「相談する」だけボタンとして区別する
 * - 「AIバーチャル本社」（#flagship）は④の実装時に追加する。存在しないアンカーへはリンクしない
 * - スクロール後は下端に極細のゴールド線を出す
 * - スマホはブランド＋「相談する」＋メニューボタン。メニューはリンク押下・Escで閉じる
 */
const NAV_ITEMS = [
  { href: "#solution", label: "できること" },
  { href: "#works", label: "事例" },
  { href: "#about", label: "私について" },
] as const;

const CONTACT_HREF = "#contact";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[var(--color-ivory)]/85 transition-[border-color] duration-300 border-b ${
        scrolled || menuOpen ? "border-[var(--color-gold-soft)]" : "border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 h-14 lg:h-16 flex items-center justify-between gap-4">
        <a
          href="#top"
          className="font-[family-name:var(--font-display)] font-semibold tracking-tight whitespace-nowrap text-sm sm:text-base text-[var(--color-navy)]"
          onClick={close}
        >
          N. Nakamura
        </a>

        {/* PC ナビ */}
        <nav aria-label="メインメニュー" className="hidden md:flex items-center gap-7 text-sm text-[var(--color-ink-sub)]">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-2 hover:text-[var(--color-navy)] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={CONTACT_HREF}
            className="inline-flex items-center rounded-full bg-[var(--color-navy)] text-[var(--color-ivory)] px-5 h-10 text-sm font-medium hover:bg-[var(--color-navy-deep)] transition-colors"
          >
            相談する
          </a>
        </nav>

        {/* スマホ：相談する＋メニュー */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={CONTACT_HREF}
            className="inline-flex items-center rounded-full bg-[var(--color-navy)] text-[var(--color-ivory)] px-4 h-10 text-sm font-medium"
            onClick={close}
          >
            相談する
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[var(--color-navy)] hover:bg-[var(--color-ivory-deep)] transition-colors"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* スマホメニュー */}
      <nav
        id="mobile-menu"
        aria-label="メインメニュー"
        hidden={!menuOpen}
        className="md:hidden border-t border-[var(--color-line)] bg-[var(--color-ivory)]"
      >
        <ul className="px-5 py-2">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={close}
                className="flex items-center min-h-12 text-base text-[var(--color-ink)] border-b border-[var(--color-line)] last:border-b-0"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
