"use client";
import { LogoMark } from "@/components/logo-mark";
import { PixelButton } from "@/components/ui/pixel-button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [["Domains", "/domains"], ["About", "/about"], ["Contact", "/contact"]] as const;

export function SiteHeader() {
  const path = usePathname();
  const home = path === "/";
  const [open, setOpen] = useState(false);
  const [past, setPast] = useState(false);

  // On the landing page the bar is clear over the forest, then turns solid once the hero is behind it.
  useEffect(() => {
    if (!home) return;
    // the hero is pinned for 150% of the screen while the intro plays, so the bar stays clear until the hero has scrolled away
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const onScroll = () => setPast(window.scrollY > window.innerHeight * (still ? 1 : 2.5) - 96);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [home]);

  const clear = home && !past && !open;
  // while the landing intro is on, the page behind the bar is pale, so the bar stays dark
  const text = clear ? "text-white [html[data-intro=on]_&]:text-ink" : "text-ink";
  return (
    <header className={`${home ? "fixed inset-x-0 top-0" : "sticky top-0"} z-50 transition-colors duration-300 ${clear ? "bg-transparent" : "bg-white"}`}>
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 md:px-10">
        <Link href="/" aria-label="Impact Matrix home" onClick={() => setOpen(false)} className={`flex items-center gap-3 ${text}`}>
          <LogoMark />
          <span className="text-xl font-semibold">Impact Matrix</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([l, h]) => (
            <Link key={h} href={h} aria-current={path === h ? "page" : undefined} className={`text-base transition-opacity hover:opacity-70 ${text} ${path === h ? "font-semibold" : ""}`}>{l}</Link>
          ))}
          <PixelButton href="/contact" size="sm" className={clear ? "[--pb-bg:#fff] [--pb-fg:#0a0a0a] [html[data-intro=on]_&]:[--pb-bg:#0a0a0a] [html[data-intro=on]_&]:[--pb-fg:#fff]" : ""}>Partner with us</PixelButton>
        </nav>
        <button className={`md:hidden ${text}`} aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 bg-mist px-6 py-4 text-ink md:hidden">
          {[["Home", "/"], ...links].map(([l, h]) => (
            <Link key={h} href={h} onClick={() => setOpen(false)} className="py-2 text-lg">{l}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}
