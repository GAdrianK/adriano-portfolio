"use client";

import { useState } from "react";

import { expertiseAreas } from "@/content/expertise";

const fieldNotes: Record<string, string> = {
  vision:
    "Sur un plan large TV, le ballon fait parfois moins de 12 pixels. Passer de YOLO11n (640px) à RF-DETR Small (960px) m’a fait gagner près de 10 points de mAP50 sur le dataset H250.",
  geometry:
    "Une homographie brute tremble d’une frame à l’autre à cause du flou de bougé caméra. Un filtrage exponentiel temporel (EMA) a réduit cette variance de 54 % sans retarder les trajectoires.",
  rag:
    "Un RAG qui répond toujours est un RAG dangereux. Si la couverture de tracking tombe ou qu’aucun événement probant n’existe dans la fenêtre temporelle, le système s’abstient explicitement.",
  nlp:
    "Venir de la linguistique formelle aide énormément : avant de jeter un LLM sur un problème, je regarde la structure morpho-syntaxique des requêtes et comment découper une affirmation en faits atomiques vérifiables.",
  engineering:
    "PnLCalib est sous licence GPL-2.0 alors que VISION-BALLING est en Apache-2.0. Plutôt que de violer la licence ou d’abandonner le modèle, je l’ai isolé dans un sous-processus hermétique qui échange uniquement des JSON.",
};

export function ExpertiseExplorer() {
  const [openId, setOpenId] = useState<string>(expertiseAreas[0]!.id);

  return (
    <div className="border-t-2 border-foreground">
      {expertiseAreas.map((area, index) => {
        const isOpen = area.id === openId;
        const note = fieldNotes[area.id];

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
                COUCHE 0{index + 1} · {area.label.toUpperCase()}
              </span>
              <span
                className={`font-editorial text-3xl leading-none transition-colors sm:col-span-8 sm:text-4xl ${
                  isOpen
                    ? "italic text-foreground"
                    : "text-foreground/75 group-hover:text-foreground"
                }`}
              >
                {area.title}
              </span>
              <span className="font-mono text-xs text-muted-foreground sm:col-span-2 sm:text-right">
                {isOpen ? "[OUVERT −]" : "[LIRE LA NOTE +]"}
              </span>
            </button>

            {isOpen && (
              <div className="grid gap-8 pb-8 sm:grid-cols-12">
                <div className="sm:col-span-7 sm:col-start-3">
                  <p className="text-base leading-7 text-foreground/90">
                    {area.description}
                  </p>

                  <div className="mt-5 space-y-2 border-t border-border pt-4 font-mono text-xs leading-6 text-foreground/85">
                    {area.capabilities.map((cap) => (
                      <p key={cap}>→ {cap}</p>
                    ))}
                  </div>

                  <p className="mt-5 font-mono text-xs text-muted-foreground">
                    <strong className="text-foreground uppercase">
                      Outils utilisés :
                    </strong>{" "}
                    {area.technologies.join(" · ")}
                  </p>
                </div>

                {note && (
                  <div className="sm:col-span-3">
                    <div className="margin-note">
                      <p className="font-semibold text-primary uppercase">
                        [NOTE DE TERRAIN]
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
