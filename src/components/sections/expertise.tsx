"use client";

import { ExpertiseExplorer } from "@/components/sections/expertise-explorer";
import { useLanguage } from "@/lib/i18n";

export function Expertise() {
  const { locale, t } = useLanguage();

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
            {t("expertise.tag")}
          </p>
          <h2
            id="expertise-title"
            className="mt-3 font-editorial text-[clamp(2.5rem,5.5vw,4.8rem)] leading-[0.93] font-normal text-foreground"
          >
            {locale === "fr" ? (
              <>
                Ce que je construis{" "}
                <span className="italic text-secondary">vraiment</span> sous le
                capot.
              </>
            ) : (
              <>
                What I{" "}
                <span className="italic text-secondary">actually build</span> under
                the hood.
              </>
            )}
          </h2>
        </div>

        <p className="font-mono text-xs leading-6 text-muted-foreground lg:col-span-5">
          {t("expertise.subtitle")}
        </p>
      </div>

      <div className="mt-12">
        <ExpertiseExplorer />
      </div>
    </section>
  );
}
