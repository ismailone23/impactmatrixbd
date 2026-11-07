import { Hero } from "@/components/hero";
import { Stories } from "@/components/stories";
import { HowItWorks } from "@/components/how-it-works";
import { PixelButton } from "@/components/ui/pixel-button";
import { Reveal } from "@/components/reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <Stories />
      <HowItWorks />
      <section className="px-6 pb-24 md:px-10">
        <Reveal className="mx-auto max-w-[1440px] rounded-[2rem] bg-ocean px-8 py-20 text-center text-white sm:px-16">
          <h2 className="mx-auto max-w-3xl text-4xl leading-[1.05] sm:text-6xl">Run a project, or want to back one?</h2>
          <p className="mx-auto mt-5 max-w-xl text-xl leading-8 text-white/90">Tell us about the work you do, or the domain you want to support, and we will take it from there.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <PixelButton href="/contact" tone="light">List a project</PixelButton>
            <PixelButton href="/contact" tone="glass">Back a project</PixelButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
