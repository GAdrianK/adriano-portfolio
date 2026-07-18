import { ArrowDownRight, Bot, FileSearch2, Lightbulb, type LucideIcon } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { professionalSolutions } from "@/content/solutions";

const icons: Record<(typeof professionalSolutions)[number]["id"], LucideIcon> = {
  knowledge: FileSearch2,
  automation: Bot,
  prototype: Lightbulb,
};

export function Solutions() {
  return (
    <section id="solutions" data-navigation-section className="deferred-section scroll-mt-28 border-t border-border py-[var(--section-space)]" aria-labelledby="solutions-title">
      <SectionHeading index="04" eyebrow="Solutions professionnelles" title="Des systèmes IA construits autour d’un besoin réel." description="Trois formats d’intervention pour passer d’un corpus, d’un processus ou d’une idée à une solution testable et intégrable." titleId="solutions-title" />
      <div className="mt-16 grid gap-x-10 gap-y-16 lg:mt-24 lg:grid-cols-3">
        {professionalSolutions.map((solution) => {
          const Icon = icons[solution.id];
          return (
            <article key={solution.id} className="flex min-h-full flex-col border-t border-border pt-6">
              <div className="flex items-center justify-between"><Icon className="size-4 text-primary" aria-hidden="true" /><span className="font-mono text-[0.6875rem] text-muted-foreground">{solution.number}</span></div>
              <h3 className="mt-10 text-2xl font-medium tracking-[-0.04em]">{solution.title}</h3>
              <p className="mt-5 text-sm leading-6 text-muted-foreground">{solution.promise}</p>
              <div className="mt-9 border-t border-border pt-5">
                <p className="font-mono text-[0.625rem] tracking-[0.13em] text-primary uppercase">Cas d’usage</p>
                <ul className="mt-4 space-y-2.5 text-sm text-foreground/80">{solution.useCases.map((item) => <li key={item} className="flex items-center gap-2"><span className="h-px w-3 bg-border" aria-hidden="true" />{item}</li>)}</ul>
              </div>
              <ol className="mt-8 flex flex-wrap gap-x-4 gap-y-2">{solution.process.map((step, index) => <li key={step} className="font-mono text-[0.625rem] text-muted-foreground">{index + 1}. {step}</li>)}</ol>
              <div className="mt-auto pt-9"><Button asChild variant="text"><a href="#contact">Parler de ce besoin<ArrowDownRight aria-hidden="true" /></a></Button></div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

