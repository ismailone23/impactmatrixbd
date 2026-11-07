import Link from "next/link";
import { Mail } from "lucide-react";
import { LogoMark } from "@/components/logo-mark";
import { domains } from "@/lib/domains";

const columns = [
  { title: "Domains", links: domains.map((d) => [d.name, `/domains#${d.slug}`] as const) },
  { title: "Company", links: [["About", "/about"], ["Contact", "/contact"], ["Partner with us", "/contact"]] as const },
  { title: "Resources", links: [["Photos on Pexels", "https://www.pexels.com"], ["Email us", "mailto:info@gryffindorlab.com"]] as const },
];

export function SiteFooter() {
  return (
    <footer className="bg-abyss text-white">
      <div className="mx-auto max-w-[1440px] px-6 pt-20 md:px-10">
        <div className="flex flex-col gap-14 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-3" aria-label="Impact Matrix home">
              <LogoMark />
              <span className="text-2xl font-semibold">Impact Matrix</span>
            </Link>
            <p className="mt-6 text-lg leading-7 text-white/90">A platform that helps projects across six domains of social responsibility in Bangladesh find support.</p>
            <a href="mailto:info@gryffindorlab.com" aria-label="Email info@gryffindorlab.com" className="mt-6 inline-flex text-white/90 transition-colors hover:text-white"><Mail size={24} strokeWidth={1.5} /></a>
          </div>
          <div className="grid grid-cols-2 gap-x-16 gap-y-10 sm:grid-cols-3">
            {columns.map((c) => (
              <nav key={c.title} aria-label={c.title}>
                <h2 className="text-lg font-semibold">{c.title}</h2>
                <ul className="mt-5 space-y-3 text-lg">
                  {c.links.map(([label, href]) => (
                    <li key={label}>
                      {href.startsWith("/") ? <Link href={href} className="text-white/90 transition-colors hover:text-white">{label}</Link> : <a href={href} className="text-white/90 transition-colors hover:text-white">{label}</a>}
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-white/15 py-8 text-base text-white/90">
          <p>© 2026 Impact Matrix. A Gryffindor Lab initiative. All rights reserved.</p>
          <ul className="flex gap-6">
            <li><Link href="/terms" className="transition-colors hover:text-white">Terms and Conditions</Link></li>
            <li><Link href="/privacy" className="transition-colors hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
