import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { heroContent } from "@/content/hero";
import { footballIntelligenceProject } from "@/content/projects";

const profileDetails = [
  { label: "Discipline", value: "AI Engineering" },
  { label: "Focus", value: "LLM, RAG, Agents IA" },
  { label: "Projet", value: footballIntelligenceProject.name },
] as const;

export function Hero() {
  return (
    <section
      id="presentation"
      data-navigation-section
      className="hero-ambient relative flex min-h-[100svh] scroll-mt-24 items-center py-28 sm:py-32 lg:py-36"
      aria-labelledby="hero-title"
    >
      <div className="w-full">
        <div className="hero-reveal flex items-center gap-4 border-b border-border pb-5 font-mono text-[0.625rem] tracking-[0.16em] uppercase">
          <span className="text-primary">01</span>
          <span className="text-muted-foreground">Portfolio personnel · 2026</span>
        </div>

        <div className="grid gap-16 pt-12 lg:grid-cols-12 lg:gap-10 lg:pt-16">
          <div className="lg:col-span-8 xl:col-span-9">
            <p className="hero-reveal hero-reveal-delay-1 font-mono text-xs tracking-[0.2em] text-primary uppercase sm:text-sm">
              {heroContent.name}
            </p>

            <h1 id="hero-title" className="mt-6 text-balance">
              <span className="hero-reveal hero-reveal-delay-2 block text-display-lg font-medium text-foreground">
                {heroContent.role}
              </span>
              <span className="hero-reveal hero-reveal-delay-3 mt-3 block text-[clamp(1.45rem,3.2vw,3rem)] leading-[1.08] font-normal tracking-[-0.04em] text-muted-foreground">
                {heroContent.specialties}
              </span>
            </h1>

            <p className="hero-reveal hero-reveal-delay-4 mt-10 max-w-2xl border-l border-primary/45 pl-5 text-body-lg text-pretty text-muted-foreground sm:mt-12 sm:pl-7">
              {heroContent.statement}
            </p>

            <div className="hero-reveal hero-reveal-delay-5 mt-10 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
              <Button asChild size="lg" className="w-full min-[420px]:w-auto">
                <a href="#projets">Explorer mes projets<ArrowDownRight aria-hidden="true" /></a>
              </Button>
              <Button asChild variant="glass" size="lg" className="w-full min-[420px]:w-auto">
                <a href="#contact">Me contacter<ArrowUpRight aria-hidden="true" /></a>
              </Button>
            </div>
          </div>

          <aside className="hero-reveal hero-reveal-delay-4 flex flex-col justify-end border-t border-border pt-8 lg:col-span-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8 xl:col-span-3" aria-label="Profil en bref">
            <div className="select-none text-[clamp(5.5rem,12vw,10rem)] leading-[0.78] font-medium tracking-[-0.09em] text-transparent lg:text-[clamp(6rem,9vw,9rem)]" style={{ WebkitTextStroke: "1px var(--border)" }} aria-hidden="true">AG</div>
            <dl className="mt-12 divide-y divide-border border-y border-border">
              {profileDetails.map((detail) => (
                <div key={detail.label} className="grid grid-cols-[5.25rem_1fr] gap-4 py-4 text-xs leading-5">
                  <dt className="font-mono tracking-[0.1em] text-muted-foreground uppercase">{detail.label}</dt>
                  <dd className="text-foreground/85">{detail.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
