"use client";

import { journeySteps } from "@/content/journey";
import { useLanguage } from "@/lib/i18n";

export function Journey() {
  const { locale, t } = useLanguage();

  return (
    <section
      id="parcours"
      className="deferred-section border-t-2 border-foreground py-[var(--section-space)]"
      aria-labelledby="journey-title"
    >
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-mono text-xs tracking-[0.12em] text-primary uppercase">
            {t("journey.tag")}
          </p>
          <h2
            id="journey-title"
            className="mt-3 font-editorial text-[clamp(2.5rem,5.2vw,4.6rem)] leading-[0.93] font-normal text-foreground"
          >
            {locale === "fr" ? (
              <>
                Un parcours{" "}
                <span className="italic text-secondary">hybride</span>, assumé de A
                à Z.
              </>
            ) : (
              <>
                A proudly{" "}
                <span className="italic text-secondary">hybrid path</span>, from
                day one.
              </>
            )}
          </h2>

          <div className="mt-8 space-y-4 font-mono text-xs leading-6 text-muted-foreground">
            <div className="border-l-2 border-secondary pl-4">
              <p className="font-semibold text-foreground uppercase">
                {t("journey.languages_title")}
              </p>
              <p className="mt-1">{t("journey.languages_list")}</p>
            </div>

            <div className="border-l-2 border-primary pl-4">
              <p className="font-semibold text-foreground uppercase">
                {t("journey.looking_title")}
              </p>
              <p className="mt-1">{t("journey.looking_text")}</p>
            </div>
          </div>
        </div>

        <ol className="space-y-8 lg:col-span-7 lg:border-l lg:border-foreground/30 lg:pl-10">
          {journeySteps.map((step) => {
            const number = locale === "en" ? step.numberEn : step.number;
            const label = locale === "en" ? step.labelEn : step.label;
            const title = locale === "en" ? step.titleEn : step.title;
            const text = locale === "en" ? step.textEn : step.text;

            return (
              <li
                key={step.title}
                className="border-b border-border pb-7 last:border-b-0 last:pb-0"
              >
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                  <span className="bg-foreground px-2 py-0.5 text-background">
                    {number}
                  </span>
                  <span className="text-primary font-semibold">{label}</span>
                </div>
                <h3 className="mt-3 font-editorial text-3xl text-foreground sm:text-4xl">
                  {title}
                </h3>
                <p className="mt-2.5 text-sm leading-6 text-foreground/85 sm:text-base sm:leading-7">
                  {text}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
