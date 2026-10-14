"use client";

import { useState } from "react";

import { expertiseAreas } from "@/content/expertise";
import { useLanguage } from "@/lib/i18n";

const fieldNotes: Record<string, { fr: string; en: string }> = {
  vision: {
    fr: "Sur un plan large TV, le ballon fait parfois moins de 12 pixels. Passer de YOLO11n (640px) à RF-DETR Small (960px) m’a fait gagner près de 10 points de mAP50 sur le dataset H250.",
    en: "On a wide TV broadcast, the ball is sometimes under 12 pixels. Upgrading from YOLO11n (640px) to RF-DETR Small (960px) gained nearly 10 mAP50 points on the H250 dataset.",
  },
  geometry: {
    fr: "Une homographie brute tremble d’une frame à l’autre à cause du flou de bougé caméra. Un filtrage exponentiel temporel (EMA) a réduit cette variance de 54 % sans retarder les trajectoires.",
    en: "Raw homography jitters frame-to-frame from camera motion blur. An exponential moving average (EMA) filter cut that variance by 54% without introducing trajectory lag.",
  },
  rag: {
    fr: "Un RAG qui répond toujours est un RAG dangereux. Si la couverture de tracking tombe ou qu’aucun événement probant n’existe dans la fenêtre temporelle, le système s’abstient explicitement.",
    en: "A RAG that always produces an answer is a dangerous RAG. If tracking coverage drops or no verified event falls in the temporal window, the engine explicitly abstains.",
  },
  nlp: {
    fr: "Venir de la linguistique formelle aide énormément : avant de jeter un LLM sur un problème, je regarde la structure morpho-syntaxique des requêtes et comment découper une affirmation en faits atomiques vérifiables.",
    en: "A background in formal linguistics helps tremendously: before tossing an LLM at an issue, I inspect the morpho-syntactic structure of queries and decompose claims into verifiable atomic facts.",
  },
  engineering: {
    fr: "PnLCalib est sous licence GPL-2.0 alors que VISION-BALLING est en Apache-2.0. Plutôt que de violer la licence ou d’abandonner le modèle, je l’ai isolé dans un sous-processus hermétique qui échange uniquement des JSON.",
    en: "PnLCalib is GPL-2.0 while VISION-BALLING is Apache-2.0. Rather than violating license terms or discarding the model, I isolated it inside a sealed subprocess communicating exclusively via JSON.",
  },
};

export function ExpertiseExplorer() {
  const { locale, t } = useLanguage();
  const [openId, setOpenId] = useState<string>(expertiseAreas[0]!.id);

  return (
    <div className="border-t-2 border-foreground">
      {expertiseAreas.map((area, index) => {
        const isOpen = area.id === openId;
        const note = fieldNotes[area.id]?.[locale] ?? fieldNotes[area.id]?.fr;
        const label = locale === "en" ? area.labelEn : area.label;
        const title = locale === "en" ? area.titleEn : area.title;
        const description = locale === "en" ? area.descriptionEn : area.description;
        const capabilities = locale === "en" ? area.capabilitiesEn : area.capabilities;

        return (
          <div
            key={area.id}
            className="border-b border-foreground/30 transition-colors"
          >
            <button
              type="button"
              onClick={() => setOpenId(area.id)}
              aria-expanded={isOpen}
              className="group grid w-full grid-cols-1 gap-2 py-6 text-left sm:grid-cols-12 sm:items-baseline sm:gap-6"
            >
              <span className="font-mono text-xs text-primary sm:col-span-2">
                {locale === "fr" ? `COUCHE 0${index + 1}` : `LAYER 0${index + 1}`} · {label.toUpperCase()}
              </span>
              <span
                className={`font-editorial text-3xl leading-none transition-colors sm:col-span-8 sm:text-4xl ${
                  isOpen
                    ? "italic text-foreground"
                    : "text-foreground/75 group-hover:text-foreground"
                }`}
              >
                {title}
              </span>
              <span className="font-mono text-xs text-muted-foreground sm:col-span-2 sm:text-right">
                {isOpen ? t("expertise.open") : t("expertise.read")}
              </span>
            </button>

            {isOpen && (
              <div className="grid gap-8 pb-8 sm:grid-cols-12">
                <div className="sm:col-span-7 sm:col-start-3">
                  <p className="text-base leading-7 text-foreground/90">
                    {description}
                  </p>

                  <div className="mt-5 space-y-2 border-t border-border pt-4 font-mono text-xs leading-6 text-foreground/85">
                    {capabilities.map((cap) => (
                      <p key={cap}>→ {cap}</p>
                    ))}
                  </div>

                  <p className="mt-5 font-mono text-xs text-muted-foreground">
                    <strong className="text-foreground uppercase">
                      {t("expertise.tools_used")}
                    </strong>{" "}
                    {area.technologies.join(" · ")}
                  </p>
                </div>

                {note && (
                  <div className="sm:col-span-3">
                    <div className="margin-note">
                      <p className="font-semibold text-primary uppercase">
                        {t("expertise.field_note")}
                      </p>
                      <p className="mt-1.5">{note}</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
