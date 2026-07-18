import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check, Code2, FileDown, Search, ShieldCheck, UserRound } from "lucide-react";

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
    icon: UserRound,
    title: "Contextualiser",
    text: "La demande est interprétée selon le profil : coach, analyste ou supporter.",
  },
  {
    icon: Search,
    title: "Rechercher",
    text: "SBERT et TF-IDF participent à la recherche dans l’index local construit avec FAISS.",
  },
  {
    icon: ShieldCheck,
    title: "Encadrer",
    text: "Des garde-fous limitent les réponses qui sortent du contexte documentaire disponible.",
  },
  {
    icon: FileDown,
    title: "Restituer",
    text: "La réponse contextualisée peut être exportée sous forme de rapport PDF avec ReportLab.",
  },
] as const;

export default function FootballIntelligenceCaseStudyPage() {
  return (
    <main id="main-content" className="page-shell pb-24">
      <header className="pt-8 sm:pt-10">
        <Button asChild variant="glass" size="sm"><Link href="/#projets"><ArrowLeft aria-hidden="true" />Retour aux projets</Link></Button>
      </header>

      <article className="pt-20 sm:pt-24">
        <div className="max-w-5xl">
          <div className="flex flex-wrap items-center gap-3 font-mono text-[0.6875rem] tracking-[0.14em] uppercase">
            <span className="text-secondary">Étude de cas</span><span className="text-border" aria-hidden="true">/</span><span className="text-muted-foreground">RAG · NLP · Football</span>
          </div>
          <h1 className="mt-7 text-display-lg text-balance font-medium">{project.name}</h1>
          <p className="mt-7 max-w-4xl text-body-lg text-pretty text-muted-foreground">{project.summary}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <span className="w-fit rounded-pill border border-secondary/20 bg-secondary/8 px-3 py-1.5 font-mono text-[0.625rem] tracking-[0.12em] text-secondary uppercase">{project.status}</span>
            <Button asChild variant="text" size="sm"><a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label="Ouvrir le dépôt GitHub — nouvel onglet">Dépôt GitHub<Code2 aria-hidden="true" /></a></Button>
          </div>
        </div>

        <div className="mt-14 lg:mt-20"><ProjectPreview /></div>

        <section className="grid gap-5 py-[var(--section-space)] lg:grid-cols-2" aria-labelledby="challenge-title">
          <GlassPanel padding="lg" radius="lg">
            <span className="font-mono text-[0.6875rem] tracking-[0.14em] text-secondary uppercase">01 · Besoin</span>
            <h2 id="challenge-title" className="mt-5 text-3xl font-medium tracking-[-0.04em]">Retrouver le bon contexte tactique.</h2>
            <p className="mt-5 leading-7 text-muted-foreground">{project.problem}</p>
          </GlassPanel>
          <GlassPanel variant="elevated" padding="lg" radius="lg">
            <span className="font-mono text-[0.6875rem] tracking-[0.14em] text-primary uppercase">02 · Solution</span>
            <h2 className="mt-5 text-3xl font-medium tracking-[-0.04em]">Une chaîne RAG contextualisée.</h2>
            <p className="mt-5 leading-7 text-muted-foreground">{project.solution}</p>
          </GlassPanel>
        </section>

        <section className="border-y border-border py-[var(--section-space)]" aria-labelledby="architecture-title">
          <div className="max-w-3xl">
            <span className="font-mono text-[0.6875rem] tracking-[0.14em] text-secondary uppercase">03 · Architecture</span>
            <h2 id="architecture-title" className="mt-5 text-heading font-medium">Du profil utilisateur au rapport PDF.</h2>
          </div>
          <ol className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {architectureDetails.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={item.title} className="border-t border-border pt-6">
                  <div className="flex items-center justify-between"><Icon className="size-4 text-primary" aria-hidden="true" /><span className="font-mono text-[0.625rem] text-muted-foreground">0{index + 1}</span></div>
                  <h3 className="mt-9 text-lg font-medium">{item.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
                </li>
              );
            })}
          </ol>
        </section>

        <section className="grid gap-12 py-[var(--section-space)] lg:grid-cols-[0.75fr_1.25fr]" aria-labelledby="capabilities-title">
          <div><span className="font-mono text-[0.6875rem] tracking-[0.14em] text-secondary uppercase">04 · Fonctionnalités</span><h2 id="capabilities-title" className="mt-5 text-heading font-medium">Le périmètre du prototype.</h2></div>
          <div>
            <ul className="grid gap-x-8 sm:grid-cols-2">
              {project.capabilities.map((item) => <li key={item} className="flex items-start gap-3 border-t border-border py-4 text-sm"><Check className="mt-0.5 size-4 shrink-0 text-secondary" aria-hidden="true" />{item}</li>)}
            </ul>
            <div className="mt-8 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-pill border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground">{item}</span>)}</div>
          </div>
        </section>

        <footer className="flex flex-col gap-3 border-t border-border pt-10 sm:flex-row">
          <Button asChild variant="glass"><a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label="Voir le dépôt GitHub — nouvel onglet">Voir le dépôt GitHub<Code2 aria-hidden="true" /></a></Button>
          <Button asChild variant="text"><Link href="/#contact">Discuter d’un projet similaire</Link></Button>
        </footer>
      </article>
    </main>
  );
}
