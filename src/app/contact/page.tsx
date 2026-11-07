import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = { title: "Contact", description: "Get in touch with Impact Matrix." };

export default function Contact() {
  return (
    <div className="mx-auto max-w-[1440px] px-6 pb-28 pt-16 md:px-10">
      <Reveal>
        <h1 className="max-w-5xl text-[clamp(3rem,7.5vw,7rem)] leading-[0.98]">Let us talk about your project</h1>
        <p className="mt-6 max-w-xl text-xl leading-8 text-ink/80">Whether you run a project or want to support one, send us a few lines and we will reply by email.</p>
      </Reveal>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <Reveal delay={0.05}><ContactForm /></Reveal>
        <Reveal delay={0.1} className="lg:sticky lg:top-24 lg:self-start">
          <Photo src="/img/sunrise-wetland.jpg" alt="Sunrise over a Bangladesh wetland, an empty wooden boat and a palm by the water" priority sizes="(min-width:1024px) 40vw, 100vw" pos="50% 70%" className="aspect-square w-full" />
          <p className="mt-6 text-lg text-ink/80">Prefer email?</p>
          <a href="mailto:info@gryffindorlab.com" className="mt-1 inline-block text-2xl font-medium underline underline-offset-8 transition-colors hover:text-deep sm:text-3xl">info@gryffindorlab.com</a>
        </Reveal>
      </div>
    </div>
  );
}
