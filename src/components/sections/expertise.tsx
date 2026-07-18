import { ExpertiseExplorer } from "@/components/sections/expertise-explorer";
import { SectionHeading } from "@/components/shared/section-heading";

export function Expertise() {
  return (
    <section id="expertise" data-navigation-section className="deferred-section scroll-mt-28 border-t border-border py-[var(--section-space)]" aria-labelledby="expertise-title">
      <SectionHeading index="03" eyebrow="Expertise" title="L’IA comme discipline d’ingénierie." description="Du modèle au produit : chaque couche est conçue pour être utile, observable et maintenable." titleId="expertise-title" />
      <div className="mt-12 lg:mt-16"><ExpertiseExplorer /></div>
    </section>
  );
}

