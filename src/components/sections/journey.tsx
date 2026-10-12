import { journeySteps } from "@/content/journey";

export function Journey() {
  return (
    <section
      id="parcours"
      className="deferred-section border-t-2 border-foreground py-[var(--section-space)]"
      aria-labelledby="journey-title"
    >
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-mono text-xs tracking-[0.12em] text-primary uppercase">
            CHAPITRE IV — TRAJECTOIRE & INSPIRATIONS
          </p>
          <h2
            id="journey-title"
            className="mt-3 font-editorial text-[clamp(2.5rem,5.2vw,4.6rem)] leading-[0.93] font-normal text-foreground"
          >
            Un parcours{" "}
            <span className="italic text-secondary">hybride</span>, assumé de A
            à Z.
          </h2>

          <div className="mt-8 space-y-4 font-mono text-xs leading-6 text-muted-foreground">
            <div className="border-l-2 border-secondary pl-4">
              <p className="font-semibold text-foreground uppercase">
                LANGUES PARLÉES AU QUOTIDIEN :
              </p>
              <p className="mt-1">
                Français (natif) · Italien (courant) · Anglais (avancé) ·
                Portugais (intermédiaire)
              </p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="font-semibold text-foreground uppercase">
                CE QUE JE CHERCHE POUR LA SUITE :
              </p>
              <p className="mt-1">
                Une équipe exigeante (stage de fin d’études / alternance /
                ingénierie IA, NLP ou Vision) où l’on construit de vrais
                systèmes, où l’on mesure ce qu’on déploie, et où la curiosité
                est bienvenue.
              </p>
            </div>
          </div>
        </div>

        <ol className="space-y-8 lg:col-span-7 lg:border-l lg:border-foreground/30 lg:pl-10">
          {journeySteps.map((step) => (
            <li
              key={step.title}
              className="border-b border-border pb-7 last:border-b-0 last:pb-0"
            >
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                <span className="bg-foreground px-2 py-0.5 text-background">
                  {step.number}
                </span>
                <span className="text-primary font-semibold">{step.label}</span>
              </div>
              <h3 className="mt-3 font-editorial text-3xl text-foreground sm:text-4xl">
                {step.title}
              </h3>
              <p className="mt-2.5 text-sm leading-6 text-foreground/85 sm:text-base sm:leading-7">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
