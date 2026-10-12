"use client";

import { useState } from "react";

type InspectorLayer = "homography" | "tactical" | "rag";

const teamZeroPlayers = [
  { id: "04", x: 37, y: 18, carrier: false },
  { id: "05", x: 36, y: 34, carrier: false },
  { id: "03", x: 38, y: 50, carrier: false },
  { id: "06", x: 52, y: 28, carrier: false },
  { id: "08", x: 58, y: 42, carrier: true },
  { id: "10", x: 68, y: 24, carrier: false },
  { id: "09", x: 74, y: 37, carrier: false },
  { id: "11", x: 70, y: 53, carrier: false },
] as const;

const teamOnePlayers = [
  { id: "01", x: 93, y: 34, presser: false },
  { id: "02", x: 78, y: 19, presser: false },
  { id: "15", x: 77, y: 31, presser: false },
  { id: "14", x: 77, y: 43, presser: false },
  { id: "12", x: 79, y: 54, presser: false },
  { id: "21", x: 63, y: 38, presser: true },
  { id: "18", x: 61, y: 46, presser: true },
  { id: "07", x: 54, y: 35, presser: true },
] as const;

const fiaNotes = [
  ["01", "Retrieval hybride", "Qdrant (70 %) + BM25 Python (30 %)"],
  ["02", "Contexte complet", "Chunks enfants → Parent Store SQLite"],
  ["03", "Re-ranking & sortie", "FlashRank MiniLM-L-6-v2 · Export PDF"],
] as const;

export function ProjectPreview({
  variant = "fia",
}: {
  variant?: "vision-balling" | "fia";
}) {
  const [activeLayer, setActiveLayer] = useState<InspectorLayer>("tactical");

  if (variant === "fia") {
    return (
      <div
        className="project-preview flex min-h-[26rem] flex-col justify-between border border-border bg-background p-5 sm:p-7"
        aria-label="Schéma technique du projet Football Intelligence Assistant"
      >
        <header className="flex items-center justify-between border-b border-border pb-3.5 font-mono text-[0.6875rem] tracking-[0.1em] uppercase">
          <span className="text-primary">SYS-02 · Architecture RAG Hybride</span>
          <span className="text-muted-foreground">Qdrant + BM25 + SQLite</span>
        </header>

        <div className="my-6 space-y-3 font-mono text-xs">
          <div className="border border-border bg-surface p-3.5">
            <div className="flex items-center justify-between text-[0.6875rem] text-muted-foreground">
              <span>REQUÊTE ENTRÉE · PROFIL COACH</span>
              <span className="text-secondary">Query Rewriter actif</span>
            </div>
            <p className="mt-2 font-sans text-sm text-foreground">
              « Comment organiser la sortie de balle à trois face à un pressing haut orienté côté ? »
            </p>
          </div>

          <div className="grid gap-2.5 sm:grid-cols-2">
            <div className="border border-border bg-surface/60 p-3">
              <p className="text-[0.625rem] tracking-[0.1em] text-primary uppercase">
                Branche Dense · 0.70
              </p>
              <p className="mt-1 text-foreground">Qdrant Cosine Top-15</p>
              <p className="mt-0.5 text-[0.6875rem] text-muted-foreground">
                Chunks enfants indexés (SBERT)
              </p>
            </div>
            <div className="border border-border bg-surface/60 p-3">
              <p className="text-[0.625rem] tracking-[0.1em] text-secondary uppercase">
                Branche Lexicale · 0.30
              </p>
              <p className="mt-1 text-foreground">BM25 Okapi Custom</p>
              <p className="mt-0.5 text-[0.6875rem] text-muted-foreground">
                Termes exacts : lavolpiana, demi-espace
              </p>
            </div>
          </div>

          <div className="border border-secondary/35 bg-secondary/8 p-3">
            <div className="flex items-center justify-between text-[0.6875rem]">
              <span className="text-secondary">PARENT DOCUMENT STORE (SQLite) + FLASHRANK</span>
              <span className="text-foreground">Recall@5 optimisé</span>
            </div>
            <p className="mt-1 font-sans text-xs text-muted-foreground">
              Résolution des documents parents intégraux avant passage au Cross-Encoder ms-marco-MiniLM-L-6-v2.
            </p>
          </div>
        </div>

        <div className="border-t border-border">
          {fiaNotes.map(([index, label, value]) => (
            <div
              key={index}
              className="grid grid-cols-[2rem_7.5rem_1fr] gap-2 border-b border-border py-2.5 text-xs last:border-b-0"
            >
              <span className="font-mono text-primary">{index}</span>
              <span className="text-foreground">{label}</span>
              <span className="text-right font-mono text-[0.6875rem] text-muted-foreground">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="project-preview flex h-full flex-col justify-between border border-border bg-background p-4 sm:p-6"
      aria-label="Inspecteur tactique 2D et preuve RAG de VISION-BALLING sur la séquence SNMOT-068"
    >
      <header className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3.5">
        <div className="flex items-center gap-2.5 font-mono text-[0.6875rem] tracking-[0.08em] uppercase">
          <span className="inline-block size-2 bg-secondary" aria-hidden="true" />
          <span className="text-foreground">Séquence SNMOT-068</span>
          <span className="text-muted-foreground">· Frame 327 (t = 13.04s)</span>
        </div>
        <div
          role="tablist"
          aria-label="Couches d’inspection VISION-BALLING"
          className="flex flex-wrap gap-1"
        >
          {(
            [
              ["homography", "01 · Homographie"],
              ["tactical", "02 · Pression 2D"],
              ["rag", "03 · Preuve RAG"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={activeLayer === id}
              onClick={() => setActiveLayer(id)}
              className={`border px-2.5 py-1 font-mono text-[0.625rem] tracking-[0.08em] uppercase transition-colors ${
                activeLayer === id
                  ? "border-primary bg-primary/15 text-foreground"
                  : "border-border bg-surface text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </header>

      {/* 105m x 68m Metric Pitch Projection */}
      <div className="relative my-4 overflow-hidden border border-border bg-[#0e1511] p-3">
        <div className="mb-2 flex items-center justify-between font-mono text-[0.625rem] text-muted-foreground">
          <span>RÉFÉRENTIEL MÉTRIQUE : 105.0 m × 68.0 m (Z = 0)</span>
          <span className="text-secondary">
            {activeLayer === "homography" && "PnLCalib · Reproj : 3.2 px · IoU : 88.5 %"}
            {activeLayer === "tactical" && "PressureIndex : 0.78 (Pic) · Bloc TEAM_0 : 65.7 m"}
            {activeLayer === "rag" && "event:press_327_350_TEAM_0 · conf = 0.66 [HIGH]"}
          </span>
        </div>

        <svg
          viewBox="0 0 105 68"
          className="w-full border border-[#24352b] bg-[#101914]"
          role="img"
          aria-label="Projection 2D sur terrain de football 105m par 68m"
        >
          {/* Pitch markings */}
          <rect x="0" y="0" width="105" height="68" fill="none" stroke="#26382d" strokeWidth="0.6" />
          <line x1="52.5" y1="0" x2="52.5" y2="68" stroke="#26382d" strokeWidth="0.5" />
          <circle cx="52.5" cy="34" r="9.15" fill="none" stroke="#26382d" strokeWidth="0.5" />
          <circle cx="52.5" cy="34" r="0.6" fill="#26382d" />
          {/* Left penalty box */}
          <rect x="0" y="13.84" width="16.5" height="40.32" fill="none" stroke="#26382d" strokeWidth="0.5" />
          <rect x="0" y="24.84" width="5.5" height="18.32" fill="none" stroke="#26382d" strokeWidth="0.5" />
          {/* Right penalty box */}
          <rect x="88.5" y="13.84" width="16.5" height="40.32" fill="none" stroke="#26382d" strokeWidth="0.5" />
          <rect x="99.5" y="24.84" width="5.5" height="18.32" fill="none" stroke="#26382d" strokeWidth="0.5" />

          {/* Camera Broadcast FOV Trapezoid (EXP-13 / EXP-21 FOV truncation awareness) */}
          {activeLayer === "homography" && (
            <polygon
              points="28,4 88,0 98,68 20,64"
              fill="rgba(125, 181, 148, 0.06)"
              stroke="#7db594"
              strokeWidth="0.45"
              strokeDasharray="1.5 1.5"
            />
          )}

          {/* Convex Hull & Defensive Block Line (EXP-16 / EXP-20) */}
          {activeLayer !== "homography" && (
            <>
              <polygon
                points="36,34 37,18 68,24 74,37 70,53 38,50"
                fill="rgba(212, 122, 73, 0.09)"
                stroke="#d47a49"
                strokeWidth="0.4"
                strokeDasharray="1.2 1.2"
              />
              <line
                x1="36.8"
                y1="6"
                x2="36.8"
                y2="62"
                stroke="#d47a49"
                strokeWidth="0.5"
                strokeDasharray="2 1.5"
              />
              <line
                x1="77.8"
                y1="6"
                x2="77.8"
                y2="62"
                stroke="#7db594"
                strokeWidth="0.5"
                strokeDasharray="2 1.5"
              />
            </>
          )}

          {/* Continuous Pressure Vector Field around carrier (58, 42) (EXP-23) */}
          {(activeLayer === "tactical" || activeLayer === "rag") && (
            <>
              <circle
                cx="58"
                cy="42"
                r="8.5"
                fill="rgba(212, 122, 73, 0.14)"
                stroke="#d47a49"
                strokeWidth="0.35"
              />
              <circle
                cx="58"
                cy="42"
                r="4.2"
                fill="rgba(212, 122, 73, 0.22)"
              />
              {/* Pressing vectors from nearest defenders */}
              <line x1="63" y1="38" x2="59.2" y2="41.1" stroke="#7db594" strokeWidth="0.55" />
              <line x1="61" y1="46" x2="58.8" y2="43.1" stroke="#7db594" strokeWidth="0.55" />
              <line x1="54" y1="35" x2="57.1" y2="40.6" stroke="#7db594" strokeWidth="0.55" />
            </>
          )}

          {/* TEAM_0 Players (Terracotta) */}
          {teamZeroPlayers.map((p) => (
            <g key={`t0-${p.id}`}>
              <circle
                cx={p.x}
                cy={p.y}
                r={p.carrier ? "1.65" : "1.3"}
                fill="#d47a49"
                stroke="#0c0d0b"
                strokeWidth="0.35"
              />
            </g>
          ))}

          {/* TEAM_1 Players (Pitch Sage) */}
          {teamOnePlayers.map((p) => (
            <g key={`t1-${p.id}`}>
              <circle
                cx={p.x}
                cy={p.y}
                r={p.presser ? "1.5" : "1.3"}
                fill="#7db594"
                stroke="#0c0d0b"
                strokeWidth="0.35"
              />
            </g>
          ))}

          {/* Kalman 2D Ball Position & Trajectory (EXP-07) */}
          <path
            d="M 52 28 Q 55 36 58.8 41.6"
            fill="none"
            stroke="#f0ede6"
            strokeWidth="0.4"
            strokeDasharray="1 1"
          />
          <circle cx="58.8" cy="41.6" r="0.95" fill="#f0ede6" />
        </svg>

        <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2 font-mono text-[0.625rem] text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="inline-block size-2 rounded-full bg-primary" />
              TEAM_0 (Compacité : 219.9 m²)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block size-2 rounded-full bg-secondary" />
              TEAM_1 (Compacité : 135.9 m²)
            </span>
          </div>
          <span>FOV Broadcast actif · K-Means CIE-Lab : 96.2 %</span>
        </div>
      </div>

      {/* Contextual Layer Readout */}
      <div className="border border-border bg-surface p-3.5">
        {activeLayer === "homography" && (
          <div className="space-y-1.5 text-xs">
            <div className="flex items-center justify-between font-mono text-[0.6875rem]">
              <span className="text-primary">CHAPITRE 5 & 6 · VISION + CALIBRATION</span>
              <span className="text-secondary">Variance homographie : −54 %</span>
            </div>
            <p className="leading-5 text-muted-foreground">
              RF-DETR Small @ 960px détecte les acteurs (mAP50 : 0.865). Le trapèze pointillé délimite le champ visible de la caméra TV : hors de ce cône, aucune formation nominale (4-3-3) n’est extrapolée (EXP-21).
            </p>
          </div>
        )}

        {activeLayer === "tactical" && (
          <div className="space-y-1.5 text-xs">
            <div className="flex items-center justify-between font-mono text-[0.6875rem]">
              <span className="text-primary">CHAPITRE 7 · PRIMITIVES SPATIO-TEMPORELLES</span>
              <span className="text-secondary">Possession V2 : +21 % F1</span>
            </div>
            <p className="leading-5 text-muted-foreground">
              À t = 13.04s, trois joueurs de TEAM_1 ferment l’angle sur le porteur (proximité min : 1.1 m), faisant monter l’indice continu{" "}
              <code className="font-mono text-foreground">PressureIndex</code> à{" "}
              <code className="font-mono text-foreground">0.78</code> et provoquant la perte de balle.
            </p>
          </div>
        )}

        {activeLayer === "rag" && (
          <div className="space-y-1.5 text-xs">
            <div className="flex items-center justify-between font-mono text-[0.6875rem]">
              <span className="text-primary">CHAPITRE 8 · EXTRAIT DU RAPPORT ANCRÉ</span>
              <span className="text-secondary">Supported Claim : 100 %</span>
            </div>
            <p className="font-mono text-[0.6875rem] leading-5 text-foreground/90">
              « 13.04s – 13.96s : Pression défensive continue exercée après perte à la frame 327 (PressureIndex moyen : 0.66, pic : 0.78, proximité min : 1.1 m). »
            </p>
            <p className="font-mono text-[0.625rem] text-secondary">
              Preuve liée : [event:press_327_350_TEAM_0 | t=13.04s | conf=0.66 | HIGH]
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
