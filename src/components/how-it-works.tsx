import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";

const steps = [
  ["Listed", "A project is written down in plain words: its goal, its location and its budget."],
  ["Sorted", "It takes its place under the domain it serves, from education to sports and culture."],
  ["Found", "Companies and institutions browse by domain and back what fits their purpose."],
  ["Reported", "Updates from the ground return to the platform, so everyone can see what changed."],
];

export function HowItWorks() {
  return (
    <section className="mx-auto grid max-w-[1440px] gap-12 px-6 py-24 md:px-10 lg:grid-cols-2 lg:gap-20">
      <Reveal className="lg:order-2">
        <Photo src="/img/boys-playground.jpg" alt="Two smiling boys lean on a bicycle on a village playground" sizes="(min-width:1024px) 45vw, 100vw" className="aspect-[4/5] w-full" />
      </Reveal>
      <div className="flex flex-col justify-center lg:order-1">
        <Reveal><h2 className="max-w-xl text-4xl leading-[1.05] sm:text-6xl">From a good project to visible results</h2></Reveal>
        <ol className="mt-12 space-y-8">
          {steps.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.06}>
              <li>
                <h3 className="text-3xl leading-tight">{t}</h3>
                <p className="mt-2 max-w-md text-xl leading-8 text-ink/80">{d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
