"use client";
import { useEffect, useState } from "react";

// Highlights the section being read: the last heading that has crossed the upper third of the screen.
export function LegalNav({ items, ids }: { items: string[]; ids?: string[] }) {
  const idOf = (i: number) => ids?.[i] ?? `s${i + 1}`;
  const [active, setActive] = useState(0);

  useEffect(() => {
    const els = items.map((_, i) => document.getElementById(idOf(i))).filter(Boolean) as HTMLElement[];
    const update = () => {
      const line = window.innerHeight * 0.3;
      let current = 0;
      els.forEach((el, i) => { if (el.getBoundingClientRect().top <= line) current = i; });
      // at the very bottom the last section may never reach the line
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = els.length - 1;
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  return (
    <nav aria-label="On this page" className="hidden lg:block">
      <ul className="sticky top-24 space-y-0.5 text-base">
        {items.map((t, i) => (
          <li key={t}>
            <a href={`#${idOf(i)}`} aria-current={i === active ? "location" : undefined}
              className={`block py-1.5 transition-colors ${i === active ? "font-semibold text-ink" : "text-ink/80 hover:text-ink"}`}>{t}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
