import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { heroContent } from "@/content/hero";
import { siteConfig } from "@/content/site";

const dossierRows = [
  {
    label: "Formation",
    value: "Master PluriTAL (NLP)",
    meta: "Sorbonne Nouvelle · Paris Nanterre · INALCO",
  },
  {
    label: "Système phare",
    value: "VISION-BALLING v0.9.0-rc1",
    meta: "RF-DETR · BoT-SORT · PnLCalib 2D · RAG ancré",
  },
  {
    label: "Rigueur",
    value: "26 protocoles expérimentaux",
    meta: "0 % hallucination sur 76 cas · Résultats négatifs publiés",
  },
  {
    label: "Localisation",
    value: "Paris / Asnières-sur-Seine",
    meta: "Français, Italien, Anglais, Portugais",
  },
] as const;

export function Hero() {
  return (
    <section
      id="presentation"
      data-navigation-section
      className="hero-ambient relative flex min-h-[92svh] scroll-mt-24 items-center py-24 sm:py-28 lg:py-32"
      aria-labelledby="hero-title"
    >
      <div className="w-full">
        <div className="hero-reveal flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4 font-mono text-[0.6875rem] tracking-[0.08em]">
          <div className="flex items-center gap-3">
            <span className="inline-block size-1.5 bg-secondary" aria-hidden="true" />
            <span className="text-foreground">{heroContent.name}</span>
            <span className="text-border" aria-hidden="true">/</span>
            <span className="text-muted-foreground">{siteConfig.location}</span>
          </div>
          <div className="flex items-center gap-5 text-muted-foreground">
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
              GitHub ↗
            </a>
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="grid gap-12 pt-10 lg:grid-cols-12 lg:gap-12 lg:pt-14">
          <div className="lg:col-span-7 xl:col-span-8">
            <p className="hero-reveal hero-reveal-delay-1 font-mono text-xs tracking-[0.12em] text-primary uppercase">
              {siteConfig.education}
            </p>

            <h1 id="hero-title" className="mt-5 text-balance">
              <span className="hero-reveal hero-reveal-delay-2 block text-display-lg font-medium tracking-[-0.045em] text-foreground">
                {heroContent.role}
              </span>
              <span className="hero-reveal hero-reveal-delay-3 mt-3 block text-[clamp(1.25rem,2.4vw,2.15rem)] leading-[1.2] font-normal tracking-[-0.03em] text-muted-foreground">
                {heroContent.specialties}
              </span>
            </h1>

            <p className="hero-reveal hero-reveal-delay-4 mt-8 max-w-2xl text-body-lg text-pretty text-foreground/90">
              {heroContent.statement}
            </p>

            <div className="hero-reveal hero-reveal-delay-4 mt-6 max-w-2xl border-l-2 border-secondary/70 bg-surface/70 px-4 py-3.5 text-sm leading-6 text-muted-foreground">
              <span className="mr-2 font-mono text-[0.6875rem] tracking-[0.1em] text-secondary uppercase">
                Focus actuel ·
              </span>
              {heroContent.currentWork}
            </div>

            <div className="hero-reveal hero-reveal-delay-5 mt-9 flex flex-col gap-3 min-[440px]:flex-row min-[440px]:flex-wrap">
              <Button asChild size="lg" className="w-full min-[440px]:w-auto">
                <a href="#projets">
                  Voir les projets
                  <ArrowDownRight aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="glass" size="lg" className="w-full min-[440px]:w-auto">
                <Link href="/projets/vision-balling">
                  Étude VISION-BALLING
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="text" size="lg" className="w-fit">
                <a href="#contact">Me contacter</a>
              </Button>
            </div>
          </div>

          <aside
            className="hero-reveal hero-reveal-delay-4 flex flex-col justify-between border border-border bg-surface p-5 sm:p-6 lg:col-span-5 xl:col-span-4"
            aria-label="Fiche synthétique du profil"
          >
            <div className="flex items-center justify-between border-b border-border pb-3.5 font-mono text-[0.6875rem] tracking-[0.1em] uppercase">
              <span className="text-primary">Fiche d’ingénierie</span>
              <span className="text-muted-foreground">2026</span>
            </div>

            <dl className="divide-y divide-border">
              {dossierRows.map((row) => (
                <div key={row.label} className="py-3.5">
                  <dt className="font-mono text-[0.625rem] tracking-[0.12em] text-muted-foreground uppercase">
                    {row.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-foreground">
                    {row.value}
                  </dd>
                  <dd className="mt-0.5 text-xs text-muted-foreground">
                    {row.meta}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border pt-4 font-mono">
              <div className="border border-border bg-background/60 px-2.5 py-2">
                <p className="text-sm font-semibold text-foreground">0.865</p>
                <p className="mt-0.5 text-[0.625rem] text-muted-foreground">mAP50 RF-DETR</p>
              </div>
              <div className="border border-border bg-background/60 px-2.5 py-2">
                <p className="text-sm font-semibold text-foreground">75.8%</p>
                <p className="mt-0.5 text-[0.625rem] text-muted-foreground">IDF1 Tracking</p>
              </div>
              <div className="border border-border bg-background/60 px-2.5 py-2">
                <p className="text-sm font-semibold text-secondary">0.0%</p>
                <p className="mt-0.5 text-[0.625rem] text-muted-foreground">Hallucination</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
