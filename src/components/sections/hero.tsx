"use client";

import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site";
import { useLanguage } from "@/lib/i18n";

export function Hero() {
  const { locale, t } = useLanguage();

  return (
    <section
      id="presentation"
      data-navigation-section
      className="hero-ambient relative min-h-[94svh] scroll-mt-24 pt-24 pb-16 sm:pt-28 lg:pt-32 lg:pb-24"
      aria-labelledby="hero-title"
    >
      {/* Print Masthead / Colophon Header */}
      <div className="hero-reveal flex flex-wrap items-center justify-between gap-4 border-y-2 border-foreground py-3 font-mono text-[0.6875rem] tracking-[0.1em] uppercase">
        <div className="flex flex-wrap items-center gap-3">
          <span className="bg-foreground px-2 py-0.5 text-background">
            {t("hero.masthead_issue")}
          </span>
          <span className="font-semibold text-foreground">ADRIANO GALLO</span>
          <span className="text-muted-foreground">
            — {t("hero.masthead_sub")}
          </span>
        </div>
        <div className="flex items-center gap-5">
          <span className="hidden text-muted-foreground sm:inline">
            {t("hero.location")}
          </span>
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-primary decoration-1 underline-offset-4 transition-colors hover:text-primary"
          >
            GITHUB ↗
          </a>
          <a
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-primary decoration-1 underline-offset-4 transition-colors hover:text-primary"
          >
            LINKEDIN ↗
          </a>
        </div>
      </div>

      {/* Giant Asymmetric Typographic Poster Composition */}
      <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-12 lg:items-start">
        {/* Left Margin Annotation Column */}
        <div className="hero-reveal hero-reveal-delay-1 space-y-6 lg:col-span-3 lg:pt-4">
          <div className="margin-note">
            <p className="font-semibold text-primary uppercase">
              {t("hero.margin_tag")}
            </p>
            <p className="mt-1.5">{t("hero.margin_text")}</p>
          </div>

          <div className="border-t border-border pt-4 font-mono text-xs leading-5 text-muted-foreground">
            <p className="text-foreground">{t("hero.obsession_title")}</p>
            <p className="mt-1">{t("hero.obsession_text")}</p>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            <span className="ink-stamp">{t("hero.stamp_rigor")}</span>
            <span className="pitch-stamp">{t("hero.stamp_field")}</span>
          </div>
        </div>

        {/* Center/Right Giant Expressive Headline + Asymmetric Offset */}
        <div className="lg:col-span-9">
          <p className="hero-reveal hero-reveal-delay-1 font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
            {locale === "fr" ? (
              <>
                Ni agence, ni{" "}
                <span className="struck-out">prompt engineer magique</span> —
                ingénierie du langage & de l’image
              </>
            ) : (
              <>
                Neither agency nor{" "}
                <span className="struck-out">prompt magic</span> —
                language & vision systems engineering
              </>
            )}
          </p>

          <h1
            id="hero-title"
            className="hero-reveal hero-reveal-delay-2 mt-4 font-editorial text-[clamp(3.3rem,8.4vw,7.8rem)] leading-[0.89] font-normal tracking-[-0.025em] text-foreground"
          >
            {locale === "fr" ? (
              <>
                De la grammaire{" "}
                <span className="italic text-primary">italienne</span> à la
                géométrie d’un{" "}
                <span className="underline decoration-secondary decoration-2 underline-offset-8">
                  contre-pressing
                </span>
                .
              </>
            ) : (
              <>
                From Italian{" "}
                <span className="italic text-primary">grammar</span> to the
                geometry of a{" "}
                <span className="underline decoration-secondary decoration-2 underline-offset-8">
                  counter-press
                </span>
                .
              </>
            )}
          </h1>

          {/* Asymmetric 2-column sub-spread under the giant title */}
          <div className="mt-10 grid gap-8 border-t border-foreground/25 pt-8 lg:grid-cols-12">
            <div className="hero-reveal hero-reveal-delay-3 lg:col-span-7">
              {locale === "fr" ? (
                <p className="text-lg leading-relaxed text-foreground sm:text-xl">
                  Je m’appelle <strong>Adriano Gallo</strong>. Ce qui me fait
                  vibrer, c’est l’endroit exact où{" "}
                  <em>les mots rencontrent le réel</em> : transformer une vidéo
                  brute de match en coordonnées métriques, fouiller un corpus sans
                  perdre une nuance technique, et obliger une IA à{" "}
                  <span className="bg-primary/12 px-1.5 font-medium text-primary">
                    prouver chaque phrase par un fait horodaté
                  </span>{" "}
                  — ou à se taire.
                </p>
              ) : (
                <p className="text-lg leading-relaxed text-foreground sm:text-xl">
                  My name is <strong>Adriano Gallo</strong>. What drives me is
                  the exact spot where{" "}
                  <em>words meet reality</em>: converting raw broadcast video
                  into metric coordinates, querying domain corpora without
                  smoothing away subtle technical vocabulary, and forcing AI to{" "}
                  <span className="bg-primary/12 px-1.5 font-medium text-primary">
                    prove every single claim with a timestamped fact
                  </span>{" "}
                  — or keep quiet.
                </p>
              )}

              {locale === "fr" ? (
                <p className="mt-4 font-mono text-xs leading-6 text-muted-foreground">
                  → Ci-dessous : mon établi{" "}
                  <strong className="text-foreground">
                    VISION-BALLING (v0.9.0-rc1)
                  </strong>{" "}
                  avec scrubber vidéo temps réel, mes notes d’expériences (y
                  compris les modèles que j’ai jetés à la poubelle),{" "}
                  <strong className="text-foreground">
                    Football Intelligence
                  </strong>{" "}
                  et <strong className="text-foreground">Evalia</strong>.
                </p>
              ) : (
                <p className="mt-4 font-mono text-xs leading-6 text-muted-foreground">
                  → Below: my live{" "}
                  <strong className="text-foreground">
                    VISION-BALLING (v0.9.0-rc1)
                  </strong>{" "}
                  workbench with real-time video scrubbing, experimental lab notes (including the models I threw away),{" "}
                  <strong className="text-foreground">
                    Football Intelligence
                  </strong>{" "}
                  and <strong className="text-foreground">Evalia</strong>.
                </p>
              )}

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button asChild size="lg">
                  <a href="#projets">
                    {t("hero.cta_projects")}
                    <ArrowDownRight aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild variant="glass" size="lg">
                  <Link href="/projets/vision-balling">
                    {t("hero.cta_case_study")}
                    <ArrowUpRight aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Offset Specimen Card (Live Video Frame + Stamp) */}
            <div className="hero-reveal hero-reveal-delay-4 lg:col-span-5">
              <div className="paper-sheet relative p-3.5 sm:p-4">
                <div className="mb-2.5 flex items-center justify-between font-mono text-[0.625rem] tracking-[0.1em] uppercase">
                  <span className="font-semibold text-foreground">
                    {t("hero.specimen_fig")}
                  </span>
                  <span className="text-primary">{t("hero.specimen_rec")}</span>
                </div>

                <div className="relative overflow-hidden border border-foreground bg-black">
                  <video
                    src="/demo_videos/SNMOT-068.mp4"
                    poster="/demo_videos/SNMOT-068_poster.jpg"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="aspect-video w-full object-cover opacity-95"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-2.5 font-mono text-[0.625rem] text-[#f3ede2]">
                    <span>RF-DETR @ 960px + BoT-SORT + PnLCalib 2D</span>
                    <span className="float-right text-[#8be0b0]">
                      mAP50: 0.865
                    </span>
                  </div>
                </div>

                <div className="mt-3 flex items-start justify-between gap-3 font-mono text-[0.6875rem] leading-4 text-muted-foreground">
                  <p>{t("hero.specimen_quote")}</p>
                  <span className="shrink-0 border border-secondary px-1.5 py-0.5 text-[0.625rem] font-semibold text-secondary">
                    {t("hero.specimen_badge")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
