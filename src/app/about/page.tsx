import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Faq } from "@/components/faq";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { StoryScroll, type Chapter } from "@/components/story-scroll";

export const metadata: Metadata = { title: "About", description: "Why Impact Matrix exists, who it is for and how it works." };

const chapters: Chapter[] = [
  {
    title: "It starts in a village",
    text: [
      "Picture a school waiting on a new roof, a clinic that runs short of supplies every monsoon, a riverbank that needs its mangroves back.",
      "Someone nearby already knows exactly what is needed and how to do it. What they often lack is a way for the right supporter to find them.",
    ],
    photo: "/img/students.jpg",
    alt: "Smiling students in a rural schoolyard",
  },
  {
    title: "Then comes the gap",
    text: [
      "People and organisations who want to help can rarely see these projects. The people running them have little time to go looking for support.",
      "So good work stays local and quiet, while generous support searches in the wrong places.",
    ],
    photo: "/img/flood.jpg",
    alt: "Women and a child wade through a flooded village",
  },
  {
    title: "So we drew a matrix",
    text: [
      "Impact Matrix sorts projects into six domains: education, health, environment and climate, disaster response, livelihood and inclusion, and sports and culture.",
      "A supporter starts from what they care about. A project starts from where it belongs. Both land in the same place.",
    ],
    photo: "/img/sundarbans.jpg",
    alt: "A mangrove-lined river in the Sundarbans forest",
  },
  {
    title: "And we keep it in view",
    text: [
      "Support is only half the story. Projects report back, so the people who helped can see what changed, in plain language.",
      "That is how trust is built, and how the next project gets found.",
    ],
    photo: "/img/loom.jpg",
    alt: "A woman weaves cloth on a traditional handloom",
  },
];

const audiences = [
  { title: "If you run a project", text: "Describe what you are doing, where, and what it needs. Be found under the domain you serve, and show supporters what their help achieved.", photo: "/img/loom.jpg", alt: "A woman weaves cloth on a traditional handloom" },
  { title: "If you want to support one", text: "Browse by the domain you care about. See each project’s goal, location and budget in plain view, and follow the results after you give.", photo: "/img/village-play.jpg", alt: "Children play together outside a village home" },
];

const principles = [
  ["Local first", "Every project is rooted in a real community in Bangladesh, and shaped by the people who live there.", "/img/rice-boat.jpg", "A boy poles a boat across a flooded rice field"],
  ["Visible results", "Supporters see where support goes and what it changes, in plain language.", "/img/midwife.jpg", "A smiling midwife in a bright headscarf holds a newborn baby"],
  ["Honest partnership", "Projects and supporters meet on equal terms, with clear goals and clear reporting.", "/img/river-boat.jpg", "People travel in a wooden boat on a river near a village in Chandpur"],
] as const;

const faq = [
  { q: "What is Impact Matrix?", a: "A platform that helps projects across six domains of social responsibility in Bangladesh find support, and lets everyone see what their work achieves." },
  { q: "Which domains does it cover?", a: "Education, health, environment and climate, disaster response, livelihood and inclusion, and sports and culture." },
  { q: "I run a project. How do I take part?", a: "Write to us through the contact form. Tell us about your project and the domain it belongs to, and we will take it from there." },
  { q: "I want to support a project. Where do I start?", a: "Pick the domain closest to your purpose on the Domains page, then get in touch and we will point you to the projects that fit." },
  { q: "Who is behind it?", a: "Impact Matrix is an initiative of Gryffindor Lab." },
];

export default function About() {
  return (
    <>
      <section className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 pb-20 pt-20 md:grid-cols-2 md:px-10">
        <Reveal>
          <h1 className="text-5xl leading-[1.02] sm:text-7xl">Good work in Bangladesh deserves to be found</h1>
          <p className="mt-6 max-w-lg text-xl leading-8 text-ink/80">
            Impact Matrix brings projects and the people who want to support them into one place, organised around six domains of social responsibility. This is why it exists, and how it works.
          </p>
        </Reveal>
        <Reveal delay={0.1}><Photo src="/img/river-boat.jpg" alt="People travel in a wooden boat on a river near a village in Chandpur" priority className="aspect-[4/3] w-full" /></Reveal>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-10">
        <Reveal><h2 className="mb-12 max-w-3xl text-4xl leading-[1.05] sm:text-6xl">The story behind the platform</h2></Reveal>
        <StoryScroll chapters={chapters} />
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-10">
        <Reveal><h2 className="max-w-3xl text-4xl leading-[1.05] sm:text-6xl">Built for two kinds of people</h2></Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {audiences.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.1}>
              <div className="relative flex min-h-[460px] flex-col justify-end overflow-hidden rounded-card p-8 text-white sm:min-h-[520px] sm:p-10">
                <Photo src={a.photo} alt={a.alt} sizes="(min-width:768px) 50vw, 100vw" className="absolute inset-0 rounded-none" />
                <span className="absolute inset-0 bg-linear-to-t from-black/70 via-black/15 to-black/35" />
                <div className="relative">
                  <h3 className="text-4xl leading-tight sm:text-5xl">{a.title}</h3>
                  <p className="mt-4 max-w-md text-xl leading-8 text-white/90">{a.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 pb-24 md:px-10">
        <Reveal><h2 className="max-w-2xl text-4xl leading-[1.05] sm:text-6xl">What we hold to</h2></Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {principles.map(([t, d, src, alt], i) => (
            <Reveal key={t} delay={i * 0.1}>
              <div className="relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-card p-6 text-white">
                <Photo src={src} alt={alt} sizes="(min-width:768px) 33vw, 100vw" className="absolute inset-0 rounded-none" />
                <span className="absolute inset-0 bg-linear-to-t from-black/70 via-black/15 to-black/35" />
                <div className="relative">
                  <h3 className="text-3xl leading-tight">{t}</h3>
                  <p className="mt-3 max-w-sm text-lg leading-7 text-white/90">{d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-12 px-6 pb-28 md:px-10 lg:grid-cols-[1fr_1.6fr]">
        <Reveal>
          <h2 className="text-4xl leading-[1.05] sm:text-6xl">Questions, answered</h2>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-xl font-medium underline underline-offset-4 transition-colors hover:text-deep">Start a conversation <ArrowRight size={20} strokeWidth={1.5} /></Link>
        </Reveal>
        <Reveal delay={0.1}><Faq items={faq} /></Reveal>
      </section>
    </>
  );
}
