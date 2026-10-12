import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { ProjectPreview } from "@/components/sections/project-preview";
import { Button } from "@/components/ui/button";
import { footballIntelligenceProject as project } from "@/content/projects";

export const metadata: Metadata = {
  title: `${project.name} — Archive N° 02`,
  description: project.summary,
  openGraph: { title: project.name, description: project.summary },
};

export default function FootballIntelligenceCaseStudyPage() {
  return (
    <main id="main-content" className="page-shell pb-24">
      <header className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-foreground py-6">
        <Button asChild variant="glass" size="sm">
          <Link href="/#projets">
            <ArrowLeft aria-hidden="true" />
            Retour au cahier principal
          </Link>
        </Button>
        <span className="ink-stamp">ARCHIVE N° 02 · SOCLE RAG HYBRIDE</span>
      </header>

      <article className="pt-12 sm:pt-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="font-mono text-xs tracking-[0.12em] text-primary uppercase">
              GENÈSE DU PROJET — RECHERCHE D’INFORMATION & NLP
            </p>
            <h1 className="mt-3 font-editorial text-[clamp(3rem,7vw,6.2rem)] leading-[0.9] font-normal text-foreground">
              {project.name}
            </h1>
            <p className="mt-4 font-editorial text-2xl italic text-secondary sm:text-3xl">
              « Fouiller la littérature tactique sans perdre les mots exacts du
              terrain. »
            </p>
          </div>

          <div className="margin-note lg:col-span-4">
            <p className="font-semibold text-primary uppercase">
              [NOTE DE GENÈSE]
            </p>
            <p className="mt-1.5">
              Ce projet est la première brique qui m’a mené à VISION-BALLING :
              construire un retriever hybride Qdrant + BM25 capable de marier
              sens global et vocabulaire technique pointu.
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
            >
              Voir le dépôt GitHub ↗
            </a>
          </Button>
          <Button asChild variant="glass" size="lg">
            <Link href="/projets/vision-balling">
              Voir la suite : VISION-BALLING (Vidéo + RAG)
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <div className="mt-12">
          <ProjectPreview variant="fia" />
        </div>

        <section className="mt-16 grid gap-10 border-t-2 border-foreground pt-12 lg:grid-cols-2">
          <div className="paper-sheet p-6">
            <p className="font-mono text-xs font-semibold text-primary uppercase">
              01 · POURQUOI LE VECTORIEL SEUL ÉCHOUE
            </p>
            <h2 className="mt-3 font-editorial text-3xl text-foreground">
              Le piège des embeddings trop lisses.
            </h2>
            <p className="mt-3 text-base leading-7 text-foreground/85">
              {project.problem}
            </p>
          </div>

          <div className="paper-sheet p-6">
            <p className="font-mono text-xs font-semibold text-secondary uppercase">
              02 · L’ASSEMBLAGE HYBRIDE 70 / 30
            </p>
            <h2 className="mt-3 font-editorial text-3xl text-foreground">
              Qdrant + BM25 Python + Parent Store SQLite.
            </h2>
            <p className="mt-3 text-base leading-7 text-foreground/85">
              {project.solution}
            </p>
          </div>
        </section>

        <footer className="mt-16 flex flex-col justify-between gap-4 border-t-2 border-foreground pt-8 sm:flex-row sm:items-center">
          <Button asChild variant="glass" size="lg">
            <Link href="/projets/vision-balling">
              Passer à l’étude VISION-BALLING (v0.9.0-rc1) →
            </Link>
          </Button>
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
