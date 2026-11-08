import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Check, Mail } from "lucide-react";
import { BangladeshMap } from "@/components/bangladesh-map";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Run a project or want to support one in Bangladesh? Send Impact Matrix a few lines and we will reply by email.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact", description: "Run a project or want to support one in Bangladesh? Send Impact Matrix a few lines and we will reply by email.", url: "/contact" },
};

const benefits: [string, string, string][] = [
  ["Tell us about your ", "project", " in a few lines"],
  ["Find support across ", "six domains", " of social responsibility"],
  ["Show everyone ", "what your work achieves", ""],
];

export default function Contact() {
  return (
    <div className="mx-auto max-w-[1440px] px-4 pb-20 pt-6 md:px-10">
      <Reveal>
        <section className="bg-white px-6 py-16 text-ink md:px-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-[clamp(3rem,7vw,6rem)] leading-[0.98]">Contact us</h1>
            <p className="mt-6 text-xl leading-8 text-ink/70">Whether you run a project or want to support one, send us a few lines and we will reply by email.</p>
          </div>
          <div className="mx-auto mt-16 grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="text-2xl font-semibold">Get in touch</h2>
              <p className="mt-3 max-w-sm text-lg leading-7 text-ink/60">Write to us and we will reply by email.</p>
              <a href="mailto:info@gryffindorlab.com" className="mt-8 flex items-center gap-4 text-lg text-ink/90 transition-colors hover:text-deep">
                <span className="flex size-11 items-center justify-center rounded-xl border border-ink/15"><Mail className="size-5" /></span>
                info@gryffindorlab.com
              </a>
              <ul className="mt-10 space-y-4 text-lg text-ink/80">
                {benefits.map(([a, b, c]) => (
                  <li key={b} className="flex items-center gap-4">
                    <Check className="size-5 shrink-0 text-ink/60" aria-hidden />
                    <span>{a}<strong className="font-semibold text-ink">{b}</strong>{c}</span>
                  </li>
                ))}
              </ul>
              <BangladeshMap className="mx-auto mt-10 h-auto w-full max-w-sm" />
            </div>
            <div className="rounded-2xl border border-ink/10 bg-mist/60 p-6 md:p-8 lg:sticky lg:top-24 lg:self-start">
              <h2 className="text-2xl font-semibold">Send a message</h2>
              <p className="mb-8 mt-2 text-lg text-ink/60">Fill out the form and we will get back to you.</p>
              <ContactForm />
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
