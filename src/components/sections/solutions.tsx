import { SectionHeading } from "@/components/shared/section-heading";
import { professionalSolutions } from "@/content/solutions";

export function Solutions() {
  return (
    <section
      id="solutions"
      data-navigation-section
      className="deferred-section scroll-mt-28 border-t border-border py-[var(--section-space)]"
      aria-labelledby="solutions-title"
    >
      <SectionHeading
        index="04"
        eyebrow="Méthode & Rigueur"
        title="Pourquoi l’ancrage et les résultats négatifs comptent."
        description="Un modèle génératif ou un détecteur vidéo n’a de valeur que si ses affirmations sont traçables, ses métriques reproductibles et ses limites clairement documentées."
        titleId="solutions-title"
      />
      <div className="mt-14 grid gap-6 lg:mt-18 lg:grid-cols-3">
        {professionalSolutions.map((item) => (
          <article
            key={item.id}
            className="flex min-h-full flex-col justify-between border border-border bg-surface p-6 sm:p-7"
          >
            <div>
              <div className="flex items-center justify-between border-b border-border pb-3 font-mono text-xs">
                <span className="text-primary">Principe {item.number}</span>
                <span className="text-muted-foreground">VISION-BALLING / Evalia</span>
              </div>
              <h3 className="mt-6 text-xl font-medium tracking-[-0.035em] text-foreground">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {item.promise}
              </p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-mono text-[0.625rem] tracking-[0.12em] text-secondary uppercase">
                  Application concrète
                </p>
                <ul className="mt-3 space-y-2.5 text-xs leading-5 text-foreground/85">
                  {item.useCases.map((useCase) => (
                    <li
                      key={useCase}
                      className="grid grid-cols-[0.75rem_1fr] gap-2"
                    >
                      <span className="font-mono text-primary">—</span>
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-7 border-t border-border pt-4">
              <ol className="flex flex-wrap gap-x-3 gap-y-1.5">
                {item.process.map((step, index) => (
                  <li
                    key={step}
                    className="font-mono text-[0.625rem] text-muted-foreground"
                  >
                    0{index + 1}. {step}
                  </li>
                ))}
              </ol>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
