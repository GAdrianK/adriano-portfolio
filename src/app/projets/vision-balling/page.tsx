import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Code2 } from "lucide-react";

import { GlassPanel } from "@/components/primitives/glass-panel";
import { ProjectPreview } from "@/components/sections/project-preview";
import { Button } from "@/components/ui/button";
import { visionBallingProject as project } from "@/content/projects";

export const metadata: Metadata = {
  title: `${project.name} (${project.version})`,
  description: project.summary,
  openGraph: {
    title: `${project.name} — ${project.subtitle}`,
    description: project.summary,
  },
};

export default function VisionBallingCaseStudyPage() {
  return (
    <main id="main-content" className="page-shell pb-24">
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-border py-6 sm:py-8">
        <Button asChild variant="glass" size="sm">
          <Link href="/#projets">
            <ArrowLeft aria-hidden="true" />
            Retour au portfolio
          </Link>
        </Button>
        <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
          <span>{project.code}</span>
          <span>/</span>
          <span className="text-secondary">{project.version}</span>
          <span>/</span>
          <span>Licence Apache-2.0</span>
        </div>
      </header>

      <article className="pt-14 sm:pt-20">
        <div className="max-w-5xl">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs tracking-[0.12em] uppercase">
            <span className="text-primary">Étude système & Benchmarks</span>
            <span className="text-border" aria-hidden="true">/</span>
            <span className="text-muted-foreground">{project.domain}</span>
          </div>

          <h1 className="mt-5 text-display-lg font-medium tracking-[-0.045em] text-foreground">
            {project.name}
          </h1>
          <p className="mt-3 font-mono text-sm text-secondary sm:text-base">
            {project.subtitle}
          </p>
          <p className="mt-6 max-w-4xl text-body-lg text-pretty text-muted-foreground">
            {project.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="default">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Ouvrir le dépôt GitHub VISION-BALLING — nouvel onglet"
              >
                Dépôt GitHub ({project.version})
                <Code2 aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="glass" size="default">
              <Link href="/projets/football-intelligence-assistant">
                Voir le socle RAG initial (SYS-02)
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Key Validated Metrics Strip */}
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="border border-border bg-surface p-5"
            >
              <p className="font-mono text-[0.6875rem] tracking-[0.1em] text-muted-foreground uppercase">
                {metric.label}
              </p>
              <p className="mt-2 font-mono text-2xl font-semibold text-foreground">
                {metric.value}
              </p>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive 2D Metric Pitch & Evidence Inspector */}
        <div className="mt-10">
          <ProjectPreview variant="vision-balling" />
        </div>

        {/* Problem vs Grounded Solution */}
        <section
          className="grid gap-6 py-[var(--section-space)] lg:grid-cols-2"
          aria-labelledby="challenge-title"
        >
          <GlassPanel padding="lg" radius="md">
            <span className="font-mono text-xs tracking-[0.12em] text-primary uppercase">
              01 · Constat technique
            </span>
            <h2
              id="challenge-title"
              className="mt-4 text-2xl font-medium tracking-[-0.035em] sm:text-3xl"
            >
              Pourquoi les boîtes englobantes et les LLM classiques échouent sur un match.
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              {project.problem}
            </p>
          </GlassPanel>

          <GlassPanel variant="elevated" padding="lg" radius="md">
            <span className="font-mono text-xs tracking-[0.12em] text-secondary uppercase">
              02 · Discipline d’ancrage
            </span>
            <h2 className="mt-4 text-2xl font-medium tracking-[-0.035em] sm:text-3xl">
              Séparer la vérité géométrique du match de l’interprétation RAG.
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              {project.solution}
            </p>
          </GlassPanel>
        </section>

        {/* 4 Architectural Chapters */}
        <section
          className="border-t border-border py-[var(--section-space)]"
          aria-labelledby="chapters-title"
        >
          <div className="max-w-3xl">
            <span className="font-mono text-xs tracking-[0.12em] text-primary uppercase">
              03 · Architecture en 4 chapitres
            </span>
            <h2 id="chapters-title" className="mt-4 text-heading font-medium">
              Du flux vidéo MP4 au rapport post-match sourcé.
            </h2>
          </div>

          <ol className="mt-12 grid gap-6 md:grid-cols-2">
            {project.chapters.map((chapter) => (
              <li
                key={chapter.number}
                className="flex flex-col justify-between border border-border bg-surface p-6 sm:p-7"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-border pb-3 font-mono text-xs">
                    <span className="text-primary">{chapter.number}</span>
                    <span className="text-secondary">{chapter.metrics}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-medium tracking-[-0.03em] text-foreground">
                    {chapter.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {chapter.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Consolidated Benchmark Table (EXP-01 to EXP-26) */}
        <section
          className="border-t border-border py-[var(--section-space)]"
          aria-labelledby="benchmarks-title"
        >
          <div className="max-w-3xl">
            <span className="font-mono text-xs tracking-[0.12em] text-secondary uppercase">
              04 · Protocole d’évaluation (EXP-01 à EXP-26)
            </span>
            <h2 id="benchmarks-title" className="mt-4 text-heading font-medium">
              Résultats expérimentaux consolidés.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">
              Évaluations menées sur le dataset H250 (5 834 images annotées), 12 séquences SoccerNet Tracking 2023 (SNMOT-060 à 071) et 76 scénarios d’audit RAG.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto border border-border bg-surface">
            <table className="w-full border-collapse text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-strong font-mono text-[0.6875rem] tracking-[0.08em] text-muted-foreground uppercase">
                  <th className="px-4 py-3.5">Protocole</th>
                  <th className="px-4 py-3.5">Composant</th>
                  <th className="px-4 py-3.5">Modèle / Approche</th>
                  <th className="px-4 py-3.5">Métriques validées</th>
                  <th className="px-4 py-3.5">Statut</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {project.benchmarks.map((row) => (
                  <tr key={row.exp} className="hover:bg-surface-strong/40">
                    <td className="whitespace-nowrap px-4 py-3.5 font-mono text-xs text-primary">
                      {row.exp}
                    </td>
                    <td className="px-4 py-3.5 font-medium text-foreground">
                      {row.domain}
                    </td>
                    <td className="px-4 py-3.5 text-muted-foreground">
                      {row.approach}
                    </td>
                    <td className="px-4 py-3.5 font-mono text-xs text-foreground">
                      {row.metric}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3.5 font-mono text-[0.6875rem]">
                      <span
                        className={
                          row.status.includes("réfutée")
                            ? "text-primary"
                            : "text-secondary"
                        }
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Negative Results & Scientific Honesty */}
        <section
          className="border-t border-border py-[var(--section-space)]"
          aria-labelledby="negative-results-title"
        >
          <div className="max-w-3xl">
            <span className="font-mono text-xs tracking-[0.12em] text-primary uppercase">
              05 · Transparence épistémique & Résultats négatifs
            </span>
            <h2 id="negative-results-title" className="mt-4 text-heading font-medium">
              Ce que le système refuse d’extrapoler.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">
              Documenter les hypothèses réfutées fait partie intégrante de l’ingénierie de VISION-BALLING.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {project.negativeResults.map((item) => (
              <div
                key={item.code}
                className="border border-border bg-surface p-6"
              >
                <span className="font-mono text-xs text-primary">
                  {item.code}
                </span>
                <h3 className="mt-3 text-lg font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {item.explanation}
                </p>
              </div>
            ))}
          </div>
        </section>

        <footer className="flex flex-col justify-between gap-4 border-t border-border pt-10 sm:flex-row sm:items-center">
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Voir le dépôt GitHub VISION-BALLING — nouvel onglet"
              >
                Explorer le dépôt GitHub
                <Code2 aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="glass">
              <Link href="/#contact">Échanger autour de ce système</Link>
            </Button>
          </div>
          <Link
            href="/#projets"
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Retour aux projets
          </Link>
        </footer>
      </article>
    </main>
  );
}
