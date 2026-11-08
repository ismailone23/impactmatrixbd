import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";

export type Chapter = { title: string; text: string[]; photo: string; alt: string };

// Rows alternate sides: picture left / text right, then text left / picture right.
export function StoryScroll({ chapters }: { chapters: Chapter[] }) {
  return (
    <div className="space-y-16 lg:space-y-28">
      {chapters.map((c, i) => (
        <div key={c.title} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-20">
          <Reveal className={i % 2 ? "lg:order-2" : ""}>
            <Photo src={c.photo} alt={c.alt} sizes="(min-width:1024px) 45vw, 100vw" className="aspect-[4/3] w-full" />
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="text-4xl leading-[1.05] sm:text-5xl">{c.title}</h3>
            <div className="mt-6 max-w-xl space-y-4 text-xl leading-8 text-ink/80">
              {c.text.map((t) => <p key={t}>{t}</p>)}
            </div>
          </Reveal>
        </div>
      ))}
    </div>
  );
}
