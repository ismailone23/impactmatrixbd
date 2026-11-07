import { LegalNav } from "@/components/legal-nav";
import { Reveal } from "@/components/reveal";

export type LegalSection = { title: string; body: React.ReactNode };

export function LegalPage({ title, updated, intro, sections }: { title: string; updated: string; intro: string; sections: LegalSection[] }) {
  return (
    <div className="mx-auto max-w-[1440px] px-6 pb-28 pt-20 md:px-10">
      <Reveal>
        <h1 className="max-w-4xl text-5xl leading-[1.02] sm:text-7xl">{title}</h1>
        <p className="mt-6 text-base text-ink/80">Last updated {updated}</p>
      </Reveal>
      <div className="mt-14 grid gap-12 lg:grid-cols-[320px_1fr]">
        <LegalNav items={sections.map((s) => s.title)} />
        <div className="max-w-3xl">
          <p className="text-xl leading-8 text-ink/80">{intro}</p>
          {sections.map((s, i) => (
            <section key={s.title} id={`s${i + 1}`} className="mt-12 scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl">{s.title}</h2>
              <div className="mt-4 space-y-4 text-lg leading-8 text-ink/80 [&_a]:text-deep [&_a]:underline [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2">{s.body}</div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
