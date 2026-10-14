"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { ProjectPreview } from "@/components/sections/project-preview";
import { Button } from "@/components/ui/button";
import {
  evaliaProject,
  footballIntelligenceProject,
  visionBallingProject,
} from "@/content/projects";
import { useLanguage } from "@/lib/i18n";

export function Projects() {
  const { locale, t } = useLanguage();

  return (
    <section
      id="projets"
      data-navigation-section
      className="deferred-section scroll-mt-28 border-t-2 border-foreground py-[var(--section-space)]"
      aria-labelledby="projects-title"
    >
      {/* Editorial Spread Header */}
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="font-mono text-xs tracking-[0.12em] text-primary uppercase">
            {t("projects.section_tag")}
          </p>
          <h2
            id="projects-title"
            className="mt-3 font-editorial text-[clamp(2.6rem,5.8vw,5.2rem)] leading-[0.92] font-normal text-foreground"
          >
            {locale === "fr" ? (
              <>
                Comment empêcher une IA de{" "}
                <span className="italic text-primary">raconter n’importe quoi</span>{" "}
                sur un match de foot ?
              </>
            ) : (
              <>
                How do you stop an AI from{" "}
                <span className="italic text-primary">hallucinating nonsense</span>{" "}
                about a soccer match?
              </>
            )}
          </h2>
        </div>

        <div className="margin-note lg:col-span-4">
          <p className="font-semibold text-foreground uppercase">
            {t("projects.note_tag")}
          </p>
          {locale === "fr" ? (
            <p className="mt-1">
              Demande à un LLM d’analyser une séquence vidéo de football : il va
              t’inventer un « 4-3-3 fluide » avec un aplomb parfait. J’ai construit{" "}
              <strong>VISION-BALLING</strong> pour briser cette boîte noire.
            </p>
          ) : (
            <p className="mt-1">
              Ask an LLM to analyze a football match broadcast: it will invent a
              “fluid 4-3-3” with complete confidence. I built{" "}
              <strong>VISION-BALLING</strong> to break that black box.
            </p>
          )}
        </div>
      </div>

      {/* Main Feature Spread: VISION-BALLING Narrative + Crash-Tests */}
      <div className="mt-12 grid gap-10 border-t border-foreground/30 pt-10 lg:grid-cols-12">
        {/* Left 5 cols: The Story, The Pipeline & The Honest Failures */}
        <div className="space-y-6 lg:col-span-5">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <span className="ink-stamp">{t("projects.vb_badge")}</span>
            <span className="text-muted-foreground">
              {t("projects.vb_subbadge")}
            </span>
          </div>

          <h3 className="font-editorial text-4xl leading-none text-foreground sm:text-5xl">
            {visionBallingProject.name}
          </h3>

          {locale === "fr" ? (
            <p className="text-base leading-7 text-foreground/90">
              Le principe est radical :{" "}
              <strong>le modèle de langage n’a pas le droit de deviner</strong>.
              On part du flux vidéo MP4, on détecte chaque joueur et le ballon à
              haute résolution (<strong>RF-DETR Small @ 960px</strong>, mAP50 de{" "}
              <code className="font-mono text-primary">0.865</code>), on maintient
              les identités malgré les occultations (<strong>BoT-SORT + PRTReID</strong>{" "}
              déclenché uniquement quand deux joueurs se croisent, ce qui coupe{" "}
              <code className="font-mono text-secondary">68 %</code> des calculs
              GPU), puis on projette tout par homographie (<strong>PnLCalib</strong>,{" "}
              <code className="font-mono text-secondary">3.2 px</code> d’erreur)
              sur un vrai terrain de 105 m × 68 m.
            </p>
          ) : (
            <p className="text-base leading-7 text-foreground/90">
              The underlying rule is uncompromising:{" "}
              <strong>the language model is not allowed to guess</strong>.
              We take raw broadcast MP4 video, detect every player and ball at
              high resolution (<strong>RF-DETR Small @ 960px</strong>,{" "}
              <code className="font-mono text-primary">0.865</code> mAP50), maintain
              track continuity through occlusions (<strong>BoT-SORT + PRTReID</strong>{" "}
              triggered only during bounding box intersections, slashing{" "}
              <code className="font-mono text-secondary">68%</code> of GPU compute),
              then project everything via homography (<strong>PnLCalib</strong>,{" "}
              <code className="font-mono text-secondary">3.2 px</code> reprojection error)
              onto an authoritative 105 m × 68 m metric pitch.
            </p>
          )}

          {/* Torn Notebook Note: What Failed vs What Worked */}
          <div className="border-2 border-foreground bg-surface p-5">
            <p className="font-mono text-xs font-semibold text-primary uppercase">
              {t("projects.failure_title")}
            </p>
            {locale === "fr" ? (
              <p className="mt-2 text-sm leading-6 text-foreground/90">
                Dans l’expérience <strong>EXP-21</strong>, j’ai voulu détecter
                automatiquement les formations (<span className="struck-out">4-3-3</span>,{" "}
                <span className="struck-out">4-4-2</span>). Score sur de vraies
                caméras TV : <strong>0.00 % de Macro F1</strong>. La caméra
                broadcast coupe toujours 30 à 45 % des joueurs hors champ ! Au
                lieu de maquiller la métrique, j’ai réfuté l’hypothèse et remplacé
                les formations fixes par de la{" "}
                <span className="underline decoration-secondary decoration-2">
                  géométrie continue
                </span>{" "}
                (hauteur de ligne en mètres, surface d’enveloppe convexe en m², et
                indice vectoriel <code className="font-mono text-xs">PressureIndex ∈ [0, 1]</code>).
              </p>
            ) : (
              <p className="mt-2 text-sm leading-6 text-foreground/90">
                In experiment <strong>EXP-21</strong>, I tried classifying formations
                (<span className="struck-out">4-3-3</span>, <span className="struck-out">4-4-2</span>)
                automatically. Score on real broadcast cameras: <strong>0.00% Macro F1</strong>.
                Broadcast framing consistently truncates 30 to 45% of off-screen players!
                Instead of massaging the metric, I refuted the hypothesis and replaced rigid
                formation labels with{" "}
                <span className="underline decoration-secondary decoration-2">
                  continuous geometry
                </span>{" "}
                (defensive line height in meters, convex hull area in m², and vector{" "}
                <code className="font-mono text-xs">PressureIndex ∈ [0, 1]</code>).
              </p>
            )}
          </div>

          {/* Inline Typewriter Ledger instead of Pill Badges */}
          <div className="border-y border-foreground/30 py-4 font-mono text-xs leading-6">
            <p>{t("projects.vb_stack_engine")}</p>
            <p className="mt-1">
              <strong className="text-secondary">
                {t("projects.vb_stack_rag")}
              </strong>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-1">
            <Button asChild size="lg">
              <Link href="/projets/vision-balling">
                {t("projects.cta_dossier")}
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="glass" size="lg">
              <a
                href={visionBallingProject.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                {t("projects.cta_github")}
              </a>
            </Button>
          </div>
        </div>

        {/* Right 7 cols: The Live Interactive Video & Evidence Scrubber */}
        <div className="lg:col-span-7">
          <ProjectPreview variant="vision-balling" />
        </div>
      </div>

      {/* Second Spread: The Genesis (Football Intelligence Assistant) & The Judge (Evalia) */}
      <div className="mt-20 border-t-2 border-foreground pt-12">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left 7 cols: Football Intelligence Assistant */}
          <div className="lg:col-span-7 lg:border-r lg:border-border lg:pr-10">
            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="text-primary font-semibold">
                {t("projects.fia_archive")}
              </span>
              <span>—</span>
              <span className="text-muted-foreground">
                {t("projects.fia_subtitle")}
              </span>
            </div>

            <h3 className="mt-3 font-editorial text-4xl text-foreground sm:text-5xl">
              {footballIntelligenceProject.name}
            </h3>

            <p className="mt-4 text-base leading-7 text-foreground/90">
              {t("projects.fia_p1")}
            </p>

            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {t("projects.fia_p2")}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-5">
              <Button asChild variant="glass" size="default">
                <Link href="/projets/football-intelligence-assistant">
                  {t("projects.fia_cta")}
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              </Button>
              <a
                href={footballIntelligenceProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs underline decoration-primary underline-offset-4 hover:text-primary"
              >
                github.com/GAdrianK/football-rag-system ↗
              </a>
            </div>
          </div>

          {/* Right 5 cols: Evalia (Torture-testing RAGs) */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs">
                <span className="text-secondary font-semibold">
                  {t("projects.evalia_archive")}
                </span>
                <span>—</span>
                <span className="text-muted-foreground">
                  {t("projects.evalia_subtitle")}
                </span>
              </div>

              <h3 className="mt-3 font-editorial text-4xl text-foreground sm:text-5xl">
                {evaliaProject.name}{" "}
                <span className="font-editorial text-2xl italic text-muted-foreground">
                  (LLMOps & Judge)
                </span>
              </h3>

              <p className="mt-4 text-sm leading-6 text-foreground/90 sm:text-base sm:leading-7">
                {t("projects.evalia_p1")}
              </p>
            </div>

            <div className="mt-6 border-t border-border pt-4">
              <p className="font-mono text-xs text-muted-foreground">
                {t("projects.evalia_stack")}
              </p>
              <div className="mt-4">
                <a
                  href={evaliaProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs font-semibold underline decoration-secondary underline-offset-4 hover:text-secondary"
                >
                  {t("projects.evalia_cta")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
