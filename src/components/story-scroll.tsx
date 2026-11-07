"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Photo } from "@/components/photo";

export type Chapter = { title: string; text: string[]; photo: string; alt: string };

// Desktop: the picture stays put and changes as each chapter reaches the middle of the screen. Mobile: each chapter carries its own picture.
export function StoryScroll({ chapters }: { chapters: Chapter[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i)); }),
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="grid gap-x-16 lg:grid-cols-2">
      <div className="relative hidden lg:block">
        <div className="sticky top-24 h-[calc(100svh-8rem)]">
          {chapters.map((c, i) => (
            <motion.div key={c.title} className="absolute inset-0" initial={false} animate={{ opacity: i === active ? 1 : 0, scale: i === active ? 1 : 1.03 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} aria-hidden={i !== active}>
              <Photo src={c.photo} alt={c.alt} sizes="45vw" className="h-full w-full" />
            </motion.div>
          ))}
        </div>
      </div>
      <div>
        {chapters.map((c, i) => {
          const done = i <= active;
          return (
            <section key={c.title} data-i={i} ref={(el) => { refs.current[i] = el; }} className="relative flex flex-col justify-center gap-6 py-12 pl-10 lg:min-h-[100svh] lg:py-0">
              {/* dotted progress line: ink up to the chapter being read, pale after it */}
              <span aria-hidden className={`absolute bottom-0 left-[9.5px] w-0 border-l-[3px] border-dotted transition-colors duration-500 ${i === 0 ? "top-1/2" : "top-0"} ${i === chapters.length - 1 ? "bottom-1/2" : ""} ${i < active ? "border-ink" : "border-ink/20"}`} />
              <Photo src={c.photo} alt={c.alt} sizes="100vw" className="aspect-[4/3] w-full lg:hidden" />
              <div className="relative">
                <span aria-hidden className={`absolute -left-10 top-3 size-5 rounded-full border-[3px] transition-colors duration-500 ${done ? "border-ink bg-ink" : "border-ink/30 bg-white"}`} />
                <h3 className={`text-4xl leading-[1.05] transition-opacity duration-500 sm:text-5xl ${i === active ? "lg:opacity-100" : "lg:opacity-50"}`}>{c.title}</h3>
                <div className={`mt-6 max-w-xl space-y-4 text-xl leading-8 text-ink/80 transition-opacity duration-500 ${i === active ? "lg:opacity-100" : "lg:opacity-50"}`}>
                  {c.text.map((t) => <p key={t}>{t}</p>)}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
