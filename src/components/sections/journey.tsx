import { SectionHeading } from "@/components/shared/section-heading";
import { journeySteps } from "@/content/journey";

export function Journey() {
  return (
    <section id="parcours" className="deferred-section border-t border-border py-[var(--section-space)]" aria-labelledby="journey-title">
      <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <SectionHeading index="05" eyebrow="Approche technique" title="Une méthode de construction cohérente." description="Structurer l’application, indexer la connaissance, encadrer la réponse puis restituer un résultat exploitable." titleId="journey-title" />
        <ol className="relative border-l border-border pl-6 sm:pl-9">
          {journeySteps.map((step, index) => (
            <li key={step.number} className="relative pb-12 last:pb-0">
              <span className="absolute top-2 -left-[1.56rem] size-1.5 bg-primary sm:-left-[2.43rem]" aria-hidden="true" />
              <div className="flex flex-wrap items-center gap-3"><span className="font-mono text-[0.625rem] tracking-[0.13em] text-secondary">{step.number}</span><span className="font-mono text-[0.625rem] tracking-[0.13em] text-muted-foreground uppercase">{step.label}</span></div>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.035em]">{step.title}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">{step.text}</p>
              {index < journeySteps.length - 1 && <span className="sr-only">Étape suivante</span>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
