import { ExpertiseExplorer } from "@/components/sections/expertise-explorer";
import { SectionHeading } from "@/components/shared/section-heading";

export function Expertise() {
  return (
    <section
      id="expertise"
      data-navigation-section
      className="deferred-section scroll-mt-28 border-t border-border py-[var(--section-space)]"
      aria-labelledby="expertise-title"
    >
      <SectionHeading
        index="03"
        eyebrow="Compétences & Stack"
        title="Vision par ordinateur, géométrie continue et NLP."
        description="Cinq briques techniques que j’implémente et assemble directement dans mes dépôts, de la détection d’objets au contrôle d’hallucination."
        titleId="expertise-title"
      />
      <div className="mt-12 lg:mt-16">
        <ExpertiseExplorer />
      </div>
    </section>
  );
}
