import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LegalNav } from "@/components/legal-nav";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { domains } from "@/lib/domains";

export const metadata: Metadata = { title: "Domains", description: "The six domains Impact Matrix supports in Bangladesh." };

export default function Domains() {
  return (
    <div className="mx-auto max-w-[1440px] px-6 pb-28 pt-20 md:px-10">
      <Reveal>
        <h1 className="max-w-4xl text-5xl leading-[1.02] sm:text-7xl">Six domains where the work happens</h1>
        <p className="mt-6 max-w-xl text-xl leading-8 text-ink/80">Every project on the platform sits under one of these. Find the one closest to your purpose.</p>
      </Reveal>

      <div className="mt-16 grid gap-16 lg:grid-cols-[280px_1fr]">
        <LegalNav items={domains.map((d) => d.name)} ids={domains.map((d) => d.slug)} />
        <div className="space-y-20">
          {domains.map((d) => (
            <section key={d.slug} id={d.slug} className="scroll-mt-24">
              <Reveal className="grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-center">
                <Photo src={d.photo} alt={d.alt} priority={d.slug === "education"} sizes="(min-width:1024px) 36vw, 100vw" className="aspect-[4/3] w-full" />
                <div>
                  <h2 className="text-4xl leading-[1.05] sm:text-5xl">{d.name}</h2>
                  <p className="mt-4 max-w-md text-xl leading-8 text-ink/80">{d.line}</p>
                  <p className="mt-8 text-lg font-medium">Projects here include</p>
                  <ul className="mt-3 space-y-2 text-lg text-ink/80">
                    {d.scope.map((s) => <li key={s}>{s}</li>)}
                  </ul>
                  <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-lg font-medium underline underline-offset-4 transition-colors hover:text-deep">Talk to us about {d.name.toLowerCase()} <ArrowRight size={20} strokeWidth={1.5} /></Link>
                </div>
              </Reveal>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
