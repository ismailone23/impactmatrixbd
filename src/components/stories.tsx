import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Photo } from "@/components/photo";
import { domains } from "@/lib/domains";

// One tile per domain. Tall, standard and wide tiles alternate photo and flat colour.
const layout = [
  { size: "tall", photo: true },
  { size: "std", tone: "bg-deep" },
  { size: "tall", photo: true },
  { size: "std", tone: "bg-ink" },
  { size: "wide", photo: true, tone: "bg-ink" },
  { size: "wide", tone: "bg-deep" },
] as const;

export function Stories() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-10">
      <h2 className="text-4xl leading-[1.05] sm:text-6xl">Find projects by domain</h2>
      <p className="mt-4 max-w-xl text-xl text-ink/80">The kinds of projects the platform brings together, and the supporters who can back them.</p>

      <BentoGrid className="mt-10">
        {domains.map((d, i) => {
          const l = layout[i];
          const photo = "photo" in l;
          const roomy = l.size !== "std";
          const splitTile = photo && l.size === "wide";
          return (
            <BentoCard key={d.slug} size={l.size} index={i} className={photo && l.size !== "wide" ? "text-white" : `${"tone" in l ? l.tone : "bg-ink"} text-white`}>
              <Link href={`/domains#${d.slug}`} className={`group flex h-full ${photo && l.size === "wide" ? "flex-col md:flex-row" : "flex-col justify-between p-6"}`}>
                {photo && l.size !== "wide" && (
                  <>
                    <Photo src={d.photo} alt={d.alt} sizes="(min-width:768px) 40vw, 100vw" className="absolute inset-0 rounded-none" />
                    <span className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-black/40" />
                  </>
                )}
                {/* wide photo tile: the picture gets its own half, so the text never sits on the people in it */}
                {photo && l.size === "wide" && (
                  <Photo src={d.photo} alt={d.alt} sizes="(min-width:768px) 30vw, 100vw" className="order-2 h-48 w-full rounded-none md:h-auto md:w-2/5" />
                )}
                <span className={photo && l.size === "wide" ? "flex flex-col justify-between p-6 md:w-3/5" : "contents"}>
                  <span className="relative flex items-center gap-2 text-base font-medium"><d.icon size={20} strokeWidth={1.5} />{d.name}</span>
                  <span className="relative mt-6 block md:mt-0">
                    <span className={`block font-semibold leading-tight ${l.size === "std" || splitTile ? "text-2xl" : "text-2xl sm:text-3xl"}`}>{d.line.replace(/\.$/, "")}</span>
                    {roomy && (
                      <ul className="mt-4 space-y-1.5 text-base text-white/90">
                        {d.scope.slice(0, splitTile ? 2 : 3).map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ul>
                    )}
                    <span className="mt-4 flex items-center gap-2 text-base font-medium">View domain <ArrowRight size={20} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" /></span>
                  </span>
                </span>
              </Link>
            </BentoCard>
          );
        })}
      </BentoGrid>
    </section>
  );
}
