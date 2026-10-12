import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Code2 } from "lucide-react";

import { GlassPanel } from "@/components/primitives/glass-panel";
import { ProjectPreview } from "@/components/sections/project-preview";
import { Button } from "@/components/ui/button";
import { footballIntelligenceProject as project } from "@/content/projects";

export const metadata: Metadata = {
  title: project.name,
  description: project.summary,
  openGraph: { title: project.name, description: project.summary },
};

const architectureDetails = [
  {
    code: "01",
    title: "Réécriture & Contextualisation",
    text: "Query Rewriter et extracteur temporel filtrant les segments de match tout en adaptant la restitution au profil (coach, analyste, supporter).",
  },
  {
    code: "02",
    title: "Retrieval Hybride 70 / 30",
    text: "Combinaison d’une recherche sémantique vectorielle dans Qdrant (70 %) et d’un BM25 personnalisé en Python (30 %) avec normalisation des scores.",
  },
  {
    code: "03",
    title: "Parent Document Store & FlashRank",
    text: "Indexation de chunks enfants dans Qdrant, résolution dynamique des documents parents complets depuis SQLite et re-ranking cross-encoder FlashRank (ms-marco-MiniLM-L-6-v2).",
  },
  {
    code: "04",
    title: "Garde-fous & Export PDF",
    text: "Contrôle de pertinence limitant les réponses hors corpus, servi via une API asynchrone FastAPI avec génération de rapports PDF analytiques sous ReportLab.",
  },
] as const;

export default function FootballIntelligenceCaseStudyPage() {
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
          <span className="text-secondary">{project.status}</span>
        </div>
      </header>

      <article className="pt-14 sm:pt-20">
        <div className="max-w-5xl">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs tracking-[0.12em] uppercase">
            <span className="text-primary">Étude de cas</span>
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
                aria-label="Ouvrir le dépôt GitHub — nouvel onglet"
              >
                Dépôt GitHub
                <Code2 aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="glass" size="default">
              <Link href="/projets/vision-balling">
                Voir l’évolution multimodale : VISION-BALLING
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-12">
          <ProjectPreview variant="fia" />
        </div>

        <section
          className="grid gap-6 py-[var(--section-space)] lg:grid-cols-2"
          aria-labelledby="challenge-title"
        >
          <GlassPanel padding="lg" radius="md">
            <span className="font-mono text-xs tracking-[0.12em] text-primary uppercase">
              01 · Limite du RAG naïf
            </span>
            <h2
              id="challenge-title"
              className="mt-4 text-2xl font-medium tracking-[-0.035em] sm:text-3xl"
            >
              Capturer à la fois le sens tactique et la terminologie exacte.
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              {project.problem}
            </p>
          </GlassPanel>

          <GlassPanel variant="elevated" padding="lg" radius="md">
            <span className="font-mono text-xs tracking-[0.12em] text-secondary uppercase">
              02 · Architecture implémentée
            </span>
            <h2 className="mt-4 text-2xl font-medium tracking-[-0.035em] sm:text-3xl">
              Fusion hybride 70/30, Parent Store SQLite et re-ranking FlashRank.
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              {project.solution}
            </p>
          </GlassPanel>
        </section>

        <section
          className="border-y border-border py-[var(--section-space)]"
          aria-labelledby="architecture-title"
        >
          <div className="max-w-3xl">
            <span className="font-mono text-xs tracking-[0.12em] text-primary uppercase">
              03 · Pipeline RAG
            </span>
            <h2 id="architecture-title" className="mt-4 text-heading font-medium">
              De la réécriture de requête au rapport PDF.
            </h2>
          </div>

          <ol className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {architectureDetails.map((item) => (
              <li
                key={item.code}
                className="border border-border bg-surface p-6"
              >
                <span className="font-mono text-xs text-primary">
                  {item.code}
                </span>
                <h3 className="mt-4 text-lg font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="grid gap-12 py-[var(--section-space)] lg:grid-cols-[0.75fr_1.25fr]"
          aria-labelledby="capabilities-title"
        >
          <div>
            <span className="font-mono text-xs tracking-[0.12em] text-secondary uppercase">
              04 · Briques techniques
            </span>
            <h2 id="capabilities-title" className="mt-4 text-heading font-medium">
              Périmètre fonctionnel.
            </h2>
          </div>
          <div>
            <ul className="divide-y divide-border border-y border-border">
              {project.capabilities.map((item, idx) => (
                <li
                  key={item}
                  className="grid grid-cols-[2rem_1fr] py-3.5 text-sm text-foreground/90"
                >
                  <span className="font-mono text-xs text-primary">
                    0{idx + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="border border-border bg-surface px-2.5 py-1 font-mono text-xs text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-3 border-t border-border pt-10 sm:flex-row">
          <Button asChild variant="glass">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Voir le dépôt GitHub — nouvel onglet"
            >
              Voir le dépôt GitHub
              <Code2 aria-hidden="true" />
            </a>
          </Button>
          <Button asChild variant="text">
            <Link href="/projets/vision-balling">
              Continuer vers VISION-BALLING →
            </Link>
          </Button>
        </footer>
      </article>
    </main>
  );
}
