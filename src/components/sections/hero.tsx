import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { AIArchitectureGraph } from "@/components/sections/ai-architecture-graph";
import { Button } from "@/components/ui/button";
import { heroContent } from "@/content/hero";

export function Hero() {
  return (
    <section
      id="presentation"
      data-navigation-section
      className="hero-ambient relative flex min-h-[100svh] scroll-mt-28 items-center py-28 sm:py-32 lg:py-36 xl:min-h-[max(100svh,52rem)]"
      aria-labelledby="hero-title"
    >
      <div className="grid w-full items-center gap-14 xl:grid-cols-[minmax(0,0.9fr)_minmax(36rem,1.1fr)] xl:gap-10 2xl:gap-16">
        <div className="relative z-10 max-w-3xl">
          <div className="hero-reveal flex flex-wrap items-center gap-3">
            <span className="rounded-pill border border-secondary/20 bg-secondary/8 px-3 py-1.5 font-mono text-[0.625rem] tracking-[0.15em] text-secondary uppercase">Ingénierie IA appliquée</span>
          </div>

          <h1 id="hero-title" className="mt-8 text-balance">
            <span className="hero-reveal hero-reveal-delay-1 block font-mono text-sm font-medium tracking-[0.18em] text-secondary uppercase sm:text-base">
              {heroContent.name}
            </span>
            <span className="hero-reveal hero-reveal-delay-2 mt-4 block text-display-lg font-semibold text-foreground">
              {heroContent.role}
            </span>
            <span className="hero-specialty hero-reveal hero-reveal-delay-3 mt-4 block text-[clamp(1.55rem,3.2vw,3.35rem)] leading-[1.04] font-semibold tracking-[-0.045em]">
              {heroContent.specialties}
            </span>
          </h1>

          <p className="hero-reveal hero-reveal-delay-4 mt-8 max-w-2xl text-body-lg text-pretty text-muted-foreground">
            {heroContent.statement}
          </p>

          <div className="hero-reveal hero-reveal-delay-5 mt-9 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap sm:gap-4">
            <Button asChild size="lg" className="w-full min-[420px]:w-auto">
              <a href="#projets">
                Explorer mes projets
                <ArrowDownRight
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </a>
            </Button>
            <Button
              asChild
              variant="glass"
              size="lg"
              className="w-full min-[420px]:w-auto"
            >
              <a href="#contact">
                Me contacter
                <ArrowUpRight
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </Button>
          </div>

          <div className="hero-reveal hero-reveal-delay-5 mt-10 flex items-center gap-4 text-xs text-muted-foreground">
            <span className="h-px w-10 bg-gradient-to-r from-secondary/70 to-transparent" />
            <span className="font-mono tracking-[0.11em] uppercase">
              Retrieval systems · Agentic products
            </span>
          </div>
        </div>

        <div className="hero-reveal hero-reveal-delay-3 relative z-10 mx-auto w-full max-w-4xl xl:max-w-none">
          <AIArchitectureGraph />
        </div>
      </div>
    </section>
  );
}
