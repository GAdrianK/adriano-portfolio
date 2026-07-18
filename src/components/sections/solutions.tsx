import { ArrowDownRight, Bot, FileSearch2, Lightbulb, type LucideIcon } from "lucide-react";

import { GlassPanel } from "@/components/primitives/glass-panel";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { professionalSolutions } from "@/content/solutions";

const icons: Record<(typeof professionalSolutions)[number]["id"], LucideIcon> = { knowledge: FileSearch2, automation: Bot, prototype: Lightbulb };

export function Solutions() {
  return (
    <section id="solutions" data-navigation-section className="deferred-section scroll-mt-28 border-t border-border py-[var(--section-space)]" aria-labelledby="solutions-title">
      <SectionHeading index="04" eyebrow="Solutions professionnelles" title="Des systèmes IA construits autour d’un besoin réel." description="Trois formats d’intervention pour passer d’un corpus, d’un processus ou d’une idée à une solution testable et intégrable." titleId="solutions-title" />
      <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-3">
        {professionalSolutions.map((solution) => {
          const Icon = icons[solution.id];
          return (
            <GlassPanel key={solution.id} padding="lg" radius="xl" className="group flex min-h-full flex-col transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between"><span className="grid size-11 place-items-center rounded-md border border-primary/15 bg-primary/8 text-primary"><Icon className="size-5" aria-hidden="true" /></span><span className="font-mono text-[0.6875rem] text-muted-foreground">{solution.number}</span></div>
              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.035em]">{solution.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{solution.promise}</p>
              <div className="mt-7 border-t border-border pt-6">
                <p className="font-mono text-[0.625rem] tracking-[0.13em] text-secondary uppercase">Cas d’usage</p>
                <ul className="mt-3 space-y-2 text-sm text-foreground/85">{solution.useCases.map((item) => <li key={item} className="flex items-center gap-2"><span className="size-1 rounded-full bg-secondary" />{item}</li>)}</ul>
              </div>
              <ol className="mt-7 flex flex-wrap gap-2">{solution.process.map((step, index) => <li key={step} className="rounded-pill border border-border px-2.5 py-1 font-mono text-[0.625rem] text-muted-foreground">{index + 1}. {step}</li>)}</ol>
              <div className="mt-auto pt-7"><Button asChild variant="text"><a href="#contact">Parler de ce besoin<ArrowDownRight aria-hidden="true" /></a></Button></div>
            </GlassPanel>
          );
        })}
      </div>
    </section>
  );
}

