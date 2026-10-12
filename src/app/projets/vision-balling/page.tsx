import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { ProjectPreview } from "@/components/sections/project-preview";
import { Button } from "@/components/ui/button";
import { visionBallingProject as project } from "@/content/projects";

export const metadata: Metadata = {
  title: `${project.name} (${project.version}) — Cahier d’expériences`,
  description: project.summary,
  openGraph: {
    title: `${project.name} — ${project.subtitle}`,
    description: project.summary,
  },
};

export default function VisionBallingCaseStudyPage() {
  return (
    <main id="main-content" className="page-shell pb-24">
      {/* Masthead */}
      <header className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-foreground py-6">
        <Button asChild variant="glass" size="sm">
          <Link href="/#projets">
            <ArrowLeft aria-hidden="true" />
            Retour au cahier principal
          </Link>
        </Button>
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase">
          <span className="ink-stamp">DOSSIER EXPÉRIMENTAL · {project.version}</span>
          <span className="pitch-stamp">LICENCE APACHE-2.0</span>
        </div>
      </header>

      <article className="pt-12 sm:pt-16">
        {/* Giant Asymmetric Poster Title */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="font-mono text-xs tracking-[0.12em] text-primary uppercase">
              PIÈCE N° 01 — VISION PAR ORDINATEUR, GÉOMÉTRIE 2D & RAG ANCRÉ
            </p>
            <h1 className="mt-3 font-editorial text-[clamp(3.2rem,7.8vw,7rem)] leading-[0.88] font-normal text-foreground">
              {project.name}
            </h1>
            <p className="mt-4 font-editorial text-2xl italic text-secondary sm:text-3xl">
              « Transformer une vidéo broadcast en preuves géométriques — et
              interdire au LLM d’inventer le match. »
            </p>
          </div>

          <div className="margin-note lg:col-span-4">
            <p className="font-semibold text-primary uppercase">
              [NOTE D’INTENTION]
            </p>
            <p className="mt-1.5">
              Ce projet est né d’un constat simple : ni un détecteur YOLO brut,
              ni un LLM bavard ne permettent d’analyser honnêtement un match.
              Il fallait relier les deux par un référentiel physique de 105 m ×
              68 m et 26 protocoles de test scellés.
            </p>
          </div>
        </div>

        <p className="mt-8 max-w-4xl text-lg leading-relaxed text-foreground/90">
          {project.summary}
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-4">
          <Button asChild size="lg">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Ouvrir le dépôt GitHub VISION-BALLING — nouvel onglet"
            >
              Explorer le code source GitHub ({project.version}) ↗
            </a>
          </Button>
          <Button asChild variant="glass" size="lg">
            <Link href="/projets/football-intelligence-assistant">
              Voir la genèse RAG (Football Intelligence)
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </div>

        {/* Live Video & Evidence Scrubber */}
        <div className="mt-12">
          <ProjectPreview variant="vision-balling" />
        </div>

        {/* 4 Architectural Chapters as an Editorial Notebook Spread */}
        <section
          className="mt-20 border-t-2 border-foreground pt-12"
          aria-labelledby="chapters-title"
        >
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs tracking-[0.12em] text-primary uppercase">
                ARCHITECTURE EN 4 TEMPS
              </p>
              <h2
                id="chapters-title"
                className="mt-3 font-editorial text-5xl leading-[0.92] text-foreground"
              >
                Du pixel vidéo à la citation{" "}
                <span className="italic text-secondary">vérifiable</span>.
              </h2>
            </div>

            <ol className="space-y-8 lg:col-span-8 lg:border-l lg:border-foreground/30 lg:pl-10">
              {project.chapters.map((chapter) => (
                <li
                  key={chapter.number}
                  className="border-b border-border pb-7 last:border-b-0 last:pb-0"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                    <span className="bg-foreground px-2 py-0.5 text-background">
                      {chapter.number}
                    </span>
                    <span className="font-semibold text-secondary">
                      {chapter.metrics}
                    </span>
                  </div>
                  <h3 className="mt-3 font-editorial text-3xl text-foreground sm:text-4xl">
                    {chapter.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-foreground/85">
                    {chapter.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Negative Results & Crash-Tests Spread */}
        <section
          className="mt-20 border-t-2 border-foreground pt-12"
          aria-labelledby="negative-results-title"
        >
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="ink-stamp">TRANSPARENCE ÉPISTÉMIQUE</span>
              <h2
                id="negative-results-title"
                className="mt-4 font-editorial text-5xl leading-[0.92] text-foreground"
              >
                Les modèles que j’ai{" "}
                <span className="struck-out">jetés</span> ou corrigés en cours
                de route.
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">
                Plutôt que de cacher ce qui échoue sur de vraies vidéos TV,
                chaque impasse a été mesurée et transformée en décision
                d’architecture.
              </p>
            </div>

            <div className="space-y-6 lg:col-span-7">
              {project.negativeResults.map((item) => (
                <div key={item.code} className="paper-sheet p-6">
                  <div className="flex items-center justify-between border-b border-border pb-2 font-mono text-xs">
                    <span className="font-semibold text-primary">
                      [{item.code}]
                    </span>
                    <span className="text-muted-foreground uppercase">
                      Note de laboratoire
                    </span>
                  </div>
                  <h3 className="mt-3 font-editorial text-2xl text-foreground sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-foreground/90 sm:text-base sm:leading-7">
                    {item.explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sealed Benchmarks Ledger (EXP-01 to EXP-26) */}
        <section
          className="mt-20 border-t-2 border-foreground pt-12"
          aria-labelledby="benchmarks-title"
        >
          <div className="max-w-3xl">
            <p className="font-mono text-xs tracking-[0.12em] text-secondary uppercase">
              REGISTRE D’ÉVALUATION SCELLÉ (EXP-01 À EXP-26)
            </p>
            <h2
              id="benchmarks-title"
              className="mt-3 font-editorial text-5xl leading-[0.92] text-foreground"
            >
              Les chiffres bruts sur H250 & SoccerNet.
            </h2>
          </div>

          <div className="mt-8 overflow-x-auto border-2 border-foreground bg-[#f9f5ec]">
            <table className="w-full border-collapse text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-foreground bg-surface font-mono text-[0.6875rem] tracking-[0.08em] text-foreground uppercase">
                  <th className="px-4 py-3">Protocole</th>
                  <th className="px-4 py-3">Domaine</th>
                  <th className="px-4 py-3">Approche</th>
                  <th className="px-4 py-3">Résultat mesuré</th>
                  <th className="px-4 py-3">Verdict</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {project.benchmarks.map((row) => (
                  <tr key={row.exp} className="hover:bg-surface/60">
                    <td className="whitespace-nowrap px-4 py-3 font-mono text-xs font-semibold text-primary">
                      {row.exp}
                    </td>
                    <td className="px-4 py-3 font-medium text-foreground">
                      {row.domain}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {row.approach}
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-foreground">
                      {row.metric}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 font-mono text-[0.6875rem] font-semibold">
                      <span
                        className={
                          row.status.includes("réfutée")
                            ? "text-primary underline"
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

        <footer className="mt-16 flex flex-col justify-between gap-4 border-t-2 border-foreground pt-8 sm:flex-row sm:items-center">
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                Voir le dépôt GitHub complet ↗
              </a>
            </Button>
            <Button asChild variant="glass" size="lg">
              <Link href="/#contact">M’écrire à propos de VISION-BALLING</Link>
            </Button>
          </div>
          <Link
            href="/#projets"
            className="font-mono text-xs font-semibold underline decoration-primary underline-offset-4 hover:text-primary"
          >
            ← Retour au cahier principal
          </Link>
        </footer>
      </article>
    </main>
  );
}
