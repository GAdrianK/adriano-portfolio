import { ArrowUpRight, Code2 } from "lucide-react";
import Link from "next/link";

import { GlassPanel } from "@/components/primitives/glass-panel";
import { ProjectPreview } from "@/components/sections/project-preview";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import {
  evaliaProject,
  footballIntelligenceProject,
  visionBallingProject,
} from "@/content/projects";

export function Projects() {
  return (
    <section
      id="projets"
      data-navigation-section
      className="deferred-section scroll-mt-28 border-t border-border py-[var(--section-space)]"
      aria-labelledby="projects-title"
    >
      <SectionHeading
        index="02"
        eyebrow="Travaux & Systèmes"
        title="De la mesure vidéo au moteur RAG vérifiable."
        description="Trois systèmes complémentaires construits autour d’une même exigence : relier les modèles de vision et de langage à des faits mesurables et évalués."
        titleId="projects-title"
      />

      {/* Flagship Project: VISION-BALLING */}
      <GlassPanel
        variant="subtle"
        padding="none"
        radius="md"
        className="mt-12 lg:mt-16"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-surface-strong/60 px-6 py-3.5 font-mono text-[0.6875rem] tracking-[0.1em] uppercase sm:px-8">
          <div className="flex items-center gap-3">
            <span className="text-primary">{visionBallingProject.code}</span>
            <span className="text-border" aria-hidden="true">/</span>
            <span className="text-foreground">{visionBallingProject.version}</span>
            <span className="text-border" aria-hidden="true">/</span>
            <span className="text-secondary">{visionBallingProject.status}</span>
          </div>
          <span className="text-muted-foreground">{visionBallingProject.domain}</span>
        </div>

        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
            <div>
              <h3 className="text-[clamp(2rem,3.6vw,3.5rem)] leading-[0.98] font-semibold tracking-[-0.045em] text-foreground">
                {visionBallingProject.name}
              </h3>
              <p className="mt-2 font-mono text-xs text-primary">
                {visionBallingProject.subtitle}
              </p>
              <p className="mt-5 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                {visionBallingProject.summary}
              </p>

              {/* Validated Benchmark Grid */}
              <div className="mt-7 grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-2">
                {visionBallingProject.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="border border-border bg-background/65 p-3"
                  >
                    <p className="font-mono text-[0.625rem] tracking-[0.08em] text-muted-foreground uppercase">
                      {metric.label}
                    </p>
                    <p className="mt-1 font-mono text-base font-semibold text-foreground">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-[0.6875rem] leading-4 text-muted-foreground">
                      {metric.detail}
                    </p>
                  </div>
                ))}
              </div>

              <ul className="mt-7 divide-y divide-border border-y border-border text-xs leading-5 text-foreground/90 sm:text-sm">
                {visionBallingProject.capabilities.slice(0, 4).map((capability, idx) => (
                  <li key={capability} className="grid grid-cols-[1.75rem_1fr] py-2.5">
                    <span className="font-mono text-[0.6875rem] text-primary">
                      0{idx + 1}
                    </span>
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7">
              <div className="flex flex-wrap gap-1.5">
                {visionBallingProject.stack.map((item) => (
                  <span
                    key={item}
                    className="border border-border bg-background/50 px-2.5 py-1 font-mono text-[0.6875rem] text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Button asChild size="default" className="w-full sm:w-fit">
                  <Link href="/projets/vision-balling">
                    Étude complète & Benchmarks (EXP-01→26)
                    <ArrowUpRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="glass" size="default" className="w-full sm:w-fit">
                  <a
                    href={visionBallingProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Voir VISION-BALLING sur GitHub — nouvel onglet"
                  >
                    Code source GitHub
                    <Code2 aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-border p-4 sm:p-6 lg:border-t-0 lg:border-l lg:p-7">
            <ProjectPreview variant="vision-balling" />
          </div>
        </div>

        <div className="border-t border-border bg-background/40 px-6 py-4 sm:px-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[0.625rem] tracking-[0.12em] text-primary uppercase">
              Pipeline de bout en bout
            </span>
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              {visionBallingProject.architecture.map((step, index) => (
                <li key={step} className="flex items-center gap-2">
                  <span className="font-mono text-[0.6875rem] text-foreground/85">
                    {step}
                  </span>
                  {index < visionBallingProject.architecture.length - 1 && (
                    <span className="font-mono text-xs text-muted-foreground" aria-hidden="true">
                      →
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </GlassPanel>

      {/* Secondary Projects Grid: Football Intelligence Assistant & Evalia */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* SYS-02: Football Intelligence Assistant */}
        <GlassPanel
          variant="subtle"
          padding="lg"
          radius="md"
          className="flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between border-b border-border pb-3 font-mono text-[0.6875rem] tracking-[0.1em] uppercase">
              <span className="text-primary">
                {footballIntelligenceProject.code} · {footballIntelligenceProject.status}
              </span>
              <span className="text-muted-foreground">
                {footballIntelligenceProject.domain}
              </span>
            </div>

            <h3 className="mt-6 text-2xl font-semibold tracking-[-0.035em] text-foreground sm:text-3xl">
              {footballIntelligenceProject.name}
            </h3>
            <p className="mt-1.5 font-mono text-xs text-secondary">
              {footballIntelligenceProject.subtitle}
            </p>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              {footballIntelligenceProject.summary}
            </p>

            <ul className="mt-6 divide-y divide-border border-y border-border text-xs leading-5 text-foreground/85">
              {footballIntelligenceProject.capabilities.slice(0, 3).map((item, idx) => (
                <li key={item} className="grid grid-cols-[1.75rem_1fr] py-2.5">
                  <span className="font-mono text-primary">0{idx + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <div className="flex flex-wrap gap-1.5">
              {footballIntelligenceProject.stack.map((tech) => (
                <span
                  key={tech}
                  className="border border-border bg-background/50 px-2 py-0.5 font-mono text-[0.625rem] text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-border pt-4">
              <Button asChild variant="glass" size="sm">
                <Link href="/projets/football-intelligence-assistant">
                  Étude de cas RAG
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="text" size="sm">
                <a
                  href={footballIntelligenceProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Dépôt GitHub
                  <Code2 aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </GlassPanel>

        {/* SYS-03: Evalia */}
        <GlassPanel
          variant="subtle"
          padding="lg"
          radius="md"
          className="flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between border-b border-border pb-3 font-mono text-[0.6875rem] tracking-[0.1em] uppercase">
              <span className="text-primary">
                {evaliaProject.code} · {evaliaProject.status}
              </span>
              <span className="text-muted-foreground">{evaliaProject.domain}</span>
            </div>

            <h3 className="mt-6 text-2xl font-semibold tracking-[-0.035em] text-foreground sm:text-3xl">
              {evaliaProject.name}
            </h3>
            <p className="mt-1.5 font-mono text-xs text-secondary">
              {evaliaProject.subtitle}
            </p>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              {evaliaProject.summary}
            </p>

            <ul className="mt-6 divide-y divide-border border-y border-border text-xs leading-5 text-foreground/85">
              {evaliaProject.capabilities.map((item, idx) => (
                <li key={item} className="grid grid-cols-[1.75rem_1fr] py-2.5">
                  <span className="font-mono text-primary">0{idx + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <div className="flex flex-wrap gap-1.5">
              {evaliaProject.stack.map((tech) => (
                <span
                  key={tech}
                  className="border border-border bg-background/50 px-2 py-0.5 font-mono text-[0.625rem] text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-border pt-4">
              <Button asChild variant="glass" size="sm">
                <a
                  href={evaliaProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Voir Evalia sur GitHub
                  <Code2 aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}
