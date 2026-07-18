import { ArrowUpRight, Check, Code2, Network } from "lucide-react";
import Link from "next/link";

import { SpotlightCard } from "@/components/primitives/spotlight-card";
import { ProjectPreview } from "@/components/sections/project-preview";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { footballIntelligenceProject as project } from "@/content/projects";

export function Projects() {
  return (
    <section id="projets" data-navigation-section className="deferred-section scroll-mt-28 border-t border-border py-[var(--section-space)]" aria-labelledby="projects-title">
      <SectionHeading index="02" eyebrow="Projet principal" title="De la question brute à une réponse football exploitable." description="Une étude de cas complète autour de la recherche sémantique, du RAG et d’une expérience conversationnelle pensée comme un vrai produit." titleId="projects-title" />
      <SpotlightCard variant="elevated" padding="none" radius="xl" className="mt-12 transition-colors duration-300 hover:border-primary/30 lg:mt-16">
        <div className="grid lg:grid-cols-[0.88fr_1.12fr]">
          <div className="flex flex-col p-6 sm:p-8 lg:p-10 xl:p-12">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-pill border border-secondary/20 bg-secondary/8 px-3 py-1.5 font-mono text-[0.625rem] tracking-[0.12em] text-secondary uppercase">{project.status}</span>
              <span className="font-mono text-[0.625rem] tracking-[0.12em] text-muted-foreground uppercase">RAG · NLP · Product</span>
            </div>
            <h3 className="mt-7 text-[clamp(2rem,4vw,4.25rem)] leading-[0.98] font-semibold tracking-[-0.055em]">{project.name}</h3>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">{project.summary}</p>
            <ul className="mt-8 grid gap-3 text-sm text-foreground/90 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {project.capabilities.map((capability) => (
                <li key={capability} className="flex items-start gap-2.5"><span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-secondary/10 text-secondary"><Check className="size-3" aria-hidden="true" /></span>{capability}</li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.stack.map((item) => <span key={item} className="rounded-pill border border-border bg-white/[0.035] px-3 py-1.5 font-mono text-[0.6875rem] text-muted-foreground">{item}</span>)}
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild variant="glass" size="lg" className="w-full sm:w-fit"><Link href="/projets/football-intelligence-assistant">Découvrir l’étude de cas<ArrowUpRight aria-hidden="true" /></Link></Button>
              <Button asChild variant="text" size="lg" className="w-fit"><a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label="Voir le projet sur GitHub — nouvel onglet">Voir sur GitHub<Code2 aria-hidden="true" /></a></Button>
            </div>
          </div>
          <div className="relative border-t border-border p-4 sm:p-6 lg:border-t-0 lg:border-l lg:p-8"><ProjectPreview /></div>
        </div>
        <div className="border-t border-border px-6 py-5 sm:px-8 lg:px-10 xl:px-12">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <span className="flex items-center gap-2 font-mono text-[0.625rem] tracking-[0.13em] text-muted-foreground uppercase"><Network className="size-3.5 text-secondary" aria-hidden="true" />Architecture</span>
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-2">
              {project.architecture.map((step, index) => (
                <li key={step} className="flex items-center gap-2"><span className="rounded-pill bg-white/5 px-2.5 py-1 font-mono text-[0.625rem] text-foreground/80">{step}</span>{index < project.architecture.length - 1 && <span className="text-primary/60" aria-hidden="true">→</span>}</li>
              ))}
            </ol>
          </div>
        </div>
      </SpotlightCard>
    </section>
  );
}
