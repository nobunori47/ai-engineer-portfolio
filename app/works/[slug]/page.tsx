import Link from "next/link";
import { notFound } from "next/navigation";
import { cases } from "@/lib/cases";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = cases.find((item) => item.slug === slug);
  if (!c) notFound();

  return (
    <main className="flex flex-col min-h-full">
      <header className="border-b border-[var(--color-border)]">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center">
          <Link
            href="/#works"
            className="text-sm text-[var(--color-text-sub)] hover:text-[var(--color-accent)] transition-colors"
          >
            ← Works
          </Link>
        </div>
      </header>

      <article className="flex-1 px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-accent)] mb-4">
            Case {c.number}
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-5xl font-bold leading-tight">
            {c.title}
          </h1>
          <p className="mt-6 text-lg text-[var(--color-text-sub)] max-w-xl leading-relaxed">
            {c.oneLiner}
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            {c.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full border border-[var(--color-border)] text-[var(--color-text-sub)]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-16 space-y-14">
            <Section title="課題" content={<p className="leading-relaxed text-[var(--color-text-sub)]">{c.challenge}</p>} />
            <Section title="提案" content={<p className="leading-relaxed text-[var(--color-text-sub)]">{c.proposal}</p>} />
            <Section
              title="実装"
              content={
                <ul className="space-y-3">
                  {c.implementation.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed text-[var(--color-text-sub)]">
                      <span className="text-[var(--color-accent)] font-[family-name:var(--font-mono)] shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              }
            />
            <Section title="工数" content={<p className="leading-relaxed text-[var(--color-text-sub)]">{c.effort}</p>} />
            <Section
              title="成果"
              content={
                <ul className="space-y-3">
                  {c.result.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed">
                      <span className="text-[var(--color-accent)] font-[family-name:var(--font-mono)] shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              }
            />
            <Section
              title="使用技術"
              content={
                <div className="flex flex-wrap gap-2">
                  {c.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-[family-name:var(--font-mono)] text-xs px-3 py-1.5 rounded-full bg-[var(--color-bg-card)] border border-[var(--color-border)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              }
            />
          </div>

          {(c.github || c.demo) && (
            <div className="mt-16 pt-10 border-t border-[var(--color-border)] flex gap-6 font-[family-name:var(--font-mono)] text-sm">
              {c.github && (
                <a href={c.github} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors">
                  → GitHub
                </a>
              )}
              {c.demo && (
                <a href={c.demo} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors">
                  → Demo
                </a>
              )}
            </div>
          )}
        </div>
      </article>

      <footer className="px-6 py-8 border-t border-[var(--color-border)]">
        <div className="max-w-3xl mx-auto text-xs text-[var(--color-text-sub)] font-[family-name:var(--font-mono)]">
          Built with MVP thinking. Improved through real projects.
        </div>
      </footer>
    </main>
  );
}

function Section({ title, content }: { title: string; content: React.ReactNode }) {
  return (
    <div className="grid sm:grid-cols-[120px_1fr] gap-4 sm:gap-8">
      <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-text-sub)]">
        {title}
      </p>
      <div className="max-w-xl">{content}</div>
    </div>
  );
}
