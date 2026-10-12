import { ExpertiseExplorer } from "@/components/sections/expertise-explorer";

export function Expertise() {
  return (
    <section
      id="expertise"
      data-navigation-section
      className="deferred-section scroll-mt-28 border-t-2 border-foreground py-[var(--section-space)]"
      aria-labelledby="expertise-title"
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="font-mono text-xs tracking-[0.12em] text-primary uppercase">
            CHAPITRE II — ANATOMIE TECHNIQUE
          </p>
          <h2
            id="expertise-title"
            className="mt-3 font-editorial text-[clamp(2.5rem,5.5vw,4.8rem)] leading-[0.93] font-normal text-foreground"
          >
            Ce que je construis{" "}
            <span className="italic text-secondary">vraiment</span> sous le
            capot.
          </h2>
        </div>

        <p className="font-mono text-xs leading-6 text-muted-foreground lg:col-span-5">
          Pas d’arbre de Noël de compétences copiées-collées : voici les cinq
          couches d’ingénierie qui tournent réellement dans mes dépôts, avec ce
          que chacune résout — et ses compromis.
        </p>
      </div>

      <div className="mt-12">
        <ExpertiseExplorer />
      </div>
    </section>
  );
}
