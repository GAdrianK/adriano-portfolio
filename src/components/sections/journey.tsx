import { SectionHeading } from "@/components/shared/section-heading";
import { journeySteps } from "@/content/journey";

export function Journey() {
  return (
    <section
      id="parcours"
      className="deferred-section border-t border-border py-[var(--section-space)]"
      aria-labelledby="journey-title"
    >
      <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <SectionHeading
          index="05"
          eyebrow="Formation & Parcours"
          title="De la linguistique formelle aux systèmes multimodaux."
          description="Mon parcours combine l’étude structurelle du langage (Sorbonne Université, Master PluriTAL) et l’ingénierie de pipelines IA de bout en bout."
          titleId="journey-title"
        />
        <ol className="relative border-l border-border pl-6 sm:pl-9">
          {journeySteps.map((step, index) => (
            <li key={step.title} className="relative pb-11 last:pb-0">
              <span
                className="absolute top-2 -left-[1.56rem] size-1.5 bg-primary sm:-left-[2.43rem]"
                aria-hidden="true"
              />
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                <span className="text-primary">{step.number}</span>
                <span className="text-border" aria-hidden="true">/</span>
                <span className="text-muted-foreground">{step.label}</span>
              </div>
              <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-foreground sm:text-2xl">
                {step.title}
              </h3>
              <p className="mt-2.5 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                {step.text}
              </p>
              {index < journeySteps.length - 1 && (
                <span className="sr-only">Étape suivante</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
