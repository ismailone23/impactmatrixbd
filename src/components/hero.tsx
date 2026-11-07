"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PixelButton } from "@/components/ui/pixel-button";
import { domains } from "@/lib/domains";

gsap.registerPlugin(ScrollTrigger);
const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const outer = useRef<HTMLDivElement>(null);
  const root = useRef<HTMLElement>(null);

  // Intro: the photo shows through giant letters on a pale page. Scrolling fades the page away to reveal the whole photo.
  useGSAP(() => {
    const html = document.documentElement;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      html.dataset.intro = "on";
      gsap.set(".hero-content", { opacity: 0, y: 40 });
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: root.current, start: "top top", end: "+=240%", pin: true, scrub: 0.6, anticipatePin: 1,
          onUpdate: (st) => { html.dataset.intro = st.progress < 0.25 ? "on" : "off"; },
        },
      });
      // the pale cover simply loses its opacity: the photo fades in behind the letters, then the hero text rises
      tl.to(".intro-cover", { opacity: 0, duration: 0.7 }, 0)
        .to(".intro-cue", { opacity: 0, duration: 0.1 }, 0)
        .to(".hero-content", { opacity: 1, y: 0, duration: 0.3 }, 0.55)
        // hold: the hero stays pinned and readable before the page scrolls on
        .to({}, { duration: 1 }, 0.85);
      return () => { delete html.dataset.intro; };
    });
    mm.add("(prefers-reduced-motion: reduce)", () => { gsap.set(".intro-layer", { display: "none" }); });
    return () => mm.revert();
  }, { scope: outer });

  // ScrollTrigger wraps the pinned section in a spacer; keeping it inside this div stops it fighting React on route changes
  return (
    <div ref={outer}>
    <section ref={root} className="relative flex h-svh flex-col justify-end overflow-hidden bg-abyss text-white">
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          <Image src="/img/forest-mist.jpg" alt="Mist rising over a dense green forest" fill priority sizes="100vw" className="object-cover object-[50%_70%]" />
        </div>
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/15 to-black/35" />

      <div className="hero-content relative mx-auto w-full max-w-[1440px] px-6 pb-10 pt-32 md:px-10">
        <h1 className="max-w-[44rem] text-[clamp(3rem,7vw,6.5rem)] leading-[0.98]" aria-label="Creating impact in Bangladesh">
          {"Creating impact in Bangladesh".split(" ").map((w, i) => (
            <span key={i} aria-hidden className="mr-[0.22em] inline-block overflow-hidden pb-[0.1em] align-bottom">
              <motion.span className="inline-block" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.15 + i * 0.09, ease }}>{w}</motion.span>
            </span>
          ))}
        </h1>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7, ease }}>
          <p className="mt-6 max-w-xl text-xl leading-8 text-white/90">A platform that helps projects across six domains of social responsibility find support, and lets everyone see what their work achieves.</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <PixelButton href="/contact" tone="light">Partner with us</PixelButton>
            <PixelButton href="/domains" tone="glass">Explore domains</PixelButton>
          </div>
        </motion.div>
        <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.1 }} className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-base text-white/90">
          {domains.map((d) => (
            <li key={d.slug}><Link href={`/domains#${d.slug}`} className="hover:text-white">{d.name}</Link></li>
          ))}
        </motion.ul>
      </div>

      <div aria-hidden className="intro-layer pointer-events-none absolute inset-0 z-10">
        <svg className="h-full w-full overflow-visible" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet">
          <defs>
            <mask id="intro-mask" maskUnits="userSpaceOnUse" x="-5000" y="-5000" width="11000" height="11000">
              <rect x="-5000" y="-5000" width="11000" height="11000" fill="white" />
              <g className="intro-text" fill="black" fontFamily="var(--font-heading)" fontWeight="600" textAnchor="middle" letterSpacing="-6">
                <text x="500" y="275" fontSize="200">CREATING</text>
                <text x="500" y="470" fontSize="200">IMPACT</text>
              </g>
            </mask>
          </defs>
          <rect className="intro-cover" x="-5000" y="-5000" width="11000" height="11000" fill="#f4f4f4" mask="url(#intro-mask)" />
        </svg>
        <p className="intro-cue absolute inset-x-0 bottom-8 text-center text-base text-ink">Scroll to reveal</p>
      </div>
    </section>
    </div>
  );
}
