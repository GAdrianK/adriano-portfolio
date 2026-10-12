"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play, RotateCcw } from "lucide-react";

type LiveEvidenceEvent = {
  id: string;
  startFrame: number;
  endFrame: number;
  startTime: number;
  endTime: number;
  family: "BALL_TRANSFER" | "PRESSURE_EPISODE" | "POSSESSION_CHANGE" | "COUNTERPRESS_CANDIDATE";
  level: "NIVEAU 1 · FAIT PHYSIQUE" | "NIVEAU 3 · CANDIDAT TACTIQUE";
  team: "TEAM_0" | "TEAM_1";
  confidence: number;
  pressurePeak?: number;
  minDistM?: number;
  ballPos: { x: number; y: number };
  summaryFr: string;
  ragExcerptFr: string;
  authorNoteFr: string;
};

const SNMOT068_EVENTS: ReadonlyArray<LiveEvidenceEvent> = [
  {
    id: "pass_53_55_TEAM_0_PASS_INTERCEPTED",
    startFrame: 53,
    endFrame: 55,
    startTime: 2.0,
    endTime: 2.15,
    family: "BALL_TRANSFER",
    level: "NIVEAU 1 · FAIT PHYSIQUE",
    team: "TEAM_0",
    confidence: 0.86,
    ballPos: { x: 48, y: 31 },
    summaryFr:
      "Transmission courte TEAM_0 interceptée (distance : 1.61 m, gain longitudinal : +0.0 m).",
    ragExcerptFr:
      "À t = 2.08s, la tentative de sortie verticale de TEAM_0 est immédiatement coupée dans le cœur du jeu [event:pass_53_55_TEAM_0_PASS_INTERCEPTED].",
    authorNoteFr:
      "Note labo : le détecteur de passes V1 dépend directement de la stabilité d’ID BoT-SORT sur le porteur.",
  },
  {
    id: "trans_55_80_TEAM_0_COUNTERPRESS_CANDIDATE",
    startFrame: 55,
    endFrame: 85,
    startTime: 2.16,
    endTime: 3.4,
    family: "COUNTERPRESS_CANDIDATE",
    level: "NIVEAU 3 · CANDIDAT TACTIQUE",
    team: "TEAM_0",
    confidence: 0.6,
    pressurePeak: 0.6,
    minDistM: 1.93,
    ballPos: { x: 51, y: 35 },
    summaryFr:
      "Perte de balle frame 55 suivie d’un engagement immédiat au contre-pressing (Δt = 1.04s, CounterpressScore : 0.60, ligne défensive à 4.01 m/s).",
    ragExcerptFr:
      "Dès la perte à 2.16s, les signaux cinématiques sont compatibles avec un candidat de contre-pressing immédiat [event:trans_55_80_TEAM_0_COUNTERPRESS_CANDIDATE].",
    authorNoteFr:
      "Pourquoi « Candidat Niveau 3 » ? Parce que je refuse d’affirmer une intention humaine certifiée quand je n’ai que des vecteurs de vitesse : le RAG le qualifie donc explicitement comme candidat diagnostique.",
  },
  {
    id: "press_53_243_TEAM_1",
    startFrame: 86,
    endFrame: 195,
    startTime: 3.41,
    endTime: 7.79,
    family: "PRESSURE_EPISODE",
    level: "NIVEAU 1 · FAIT PHYSIQUE",
    team: "TEAM_1",
    confidence: 0.44,
    pressurePeak: 0.76,
    minDistM: 0.52,
    ballPos: { x: 55, y: 39 },
    summaryFr:
      "Séquence prolongée de harcèlement défensif par TEAM_1 (durée : 7.60s, PressureIndex moyen : 0.44, pic : 0.76, distance min : 0.52 m, vitesse fermeture : 3.65 m/s).",
    ragExcerptFr:
      "TEAM_1 maintient un harcèlement continu réduisant l’espace du porteur jusqu’à 0.52 m [event:press_53_243_TEAM_1].",
    authorNoteFr:
      "EXP-23 : aucun seuil binaire « pressé / non pressé ». Le score PressureIndex ∈ [0, 1] varie continûment avec la distance et la vitesse d’approche.",
  },
  {
    id: "press_196_207_TEAM_0",
    startFrame: 196,
    endFrame: 247,
    startTime: 7.8,
    endTime: 9.87,
    family: "PRESSURE_EPISODE",
    level: "NIVEAU 1 · FAIT PHYSIQUE",
    team: "TEAM_0",
    confidence: 0.37,
    pressurePeak: 0.54,
    minDistM: 1.68,
    ballPos: { x: 60, y: 29 },
    summaryFr:
      "Pression défensive exercée par TEAM_0 en bloc haut (ligne défensive moyenne à 65.7 m du but, pic PressureIndex : 0.54, défenseur à 1.68 m).",
    ragExcerptFr:
      "Positionnée en bloc haut (65.7 m), TEAM_0 resserre son enveloppe convexe (219.9 m²) autour du porteur [event:press_196_207_TEAM_0].",
    authorNoteFr:
      "EXP-21 : impossible de dire si c’est un 4-3-3 ou un 4-4-2 (la caméra TV coupe 40 % du terrain). Par contre, la hauteur de ligne à 65.7 m est un fait géométrique irréfutable.",
  },
  {
    id: "poss_change_256_TEAM_0_to_TEAM_1",
    startFrame: 248,
    endFrame: 310,
    startTime: 9.88,
    endTime: 12.39,
    family: "POSSESSION_CHANGE",
    level: "NIVEAU 1 · FAIT PHYSIQUE",
    team: "TEAM_1",
    confidence: 0.48,
    pressurePeak: 0.66,
    minDistM: 1.36,
    ballPos: { x: 63, y: 44 },
    summaryFr:
      "Changement de possession à la frame 256 (10.20s) sous pression de TEAM_1 (pic : 0.66), suivi d’une transition neutre (CounterpressScore : 0.46).",
    ragExcerptFr:
      "La pression soutenue (pic 0.66) provoque une rupture de possession à 10.20s (frame 256) [event:poss_change_256_TEAM_0_to_TEAM_1].",
    authorNoteFr:
      "EXP-22 : Possession V2 ajoute un gating adaptatif + hystérésis temporelle (+21 % de F1 sur le porteur pendant les duels).",
  },
  {
    id: "press_311_350_TEAM_1",
    startFrame: 311,
    endFrame: 350,
    startTime: 12.4,
    endTime: 14.0,
    family: "PRESSURE_EPISODE",
    level: "NIVEAU 1 · FAIT PHYSIQUE",
    team: "TEAM_1",
    confidence: 0.93,
    pressurePeak: 1.0,
    minDistM: 0.2,
    ballPos: { x: 68, y: 48 },
    summaryFr:
      "Saturation maximale de pression (PressureIndex pic : 1.00, proximité défensive : 0.20 m) entraînant deux pertes consécutives aux frames 327 (conf: 0.93) et 341 (conf: 0.97).",
    ragExcerptFr:
      "En fin de séquence (12.40s–13.96s), l’étau se referme à 0.20 m (PressureIndex = 1.00), forçant deux pertes coup sur coup [event:press_311_350_TEAM_1].",
    authorNoteFr:
      "EXP-26 : 100 % des faits cités ici sont extraits de runs/analysis/SNMOT-068/tactical_events.json. Zéro invention du modèle.",
  },
];

export function ProjectPreview({
  variant = "vision-balling",
}: {
  variant?: "vision-balling" | "fia";
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentTime, setCurrentTime] = useState(12.6);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentFrame = Math.min(350, Math.max(1, Math.round(currentTime * 25)));

  const activeEvent =
    SNMOT068_EVENTS.find(
      (ev) => currentTime >= ev.startTime && currentTime <= ev.endTime,
    ) ?? SNMOT068_EVENTS[SNMOT068_EVENTS.length - 1]!;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 12.6;
  }, []);

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }

  function seekTo(seconds: number) {
    const clamped = Math.max(0, Math.min(14, seconds));
    setCurrentTime(clamped);
    if (videoRef.current) {
      videoRef.current.currentTime = clamped;
    }
  }

  if (variant === "fia") {
    return (
      <div className="paper-sheet p-5 sm:p-7">
        <header className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-foreground pb-3 font-mono text-xs uppercase">
          <span className="font-semibold text-foreground">
            FIG. 02 — ARCHITECTURE HYBRIDE (FOOTBALL INTELLIGENCE ASSISTANT)
          </span>
          <span className="ink-stamp">SOCLE RAG HYBRIDE</span>
        </header>

        <div className="mt-6 grid gap-6 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-7">
            <div className="border border-foreground bg-background p-4">
              <p className="font-mono text-[0.6875rem] text-primary uppercase">
                1. Question brute d’un coach → Query Rewriter
              </p>
              <p className="mt-1.5 font-editorial text-2xl italic text-foreground">
                « Comment fixer le demi-espace adverse avec une sortie à trois
                (Lavolpiana) face à un pressing à deux pointes ? »
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="border border-foreground/40 bg-background p-3.5">
                <p className="font-mono text-[0.6875rem] font-semibold text-secondary uppercase">
                  70 % Dense (Qdrant)
                </p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  Capture les concepts tactiques proches par similarité cosinus
                  sur les chunks enfants.
                </p>
              </div>
              <div className="border border-foreground/40 bg-background p-3.5">
                <p className="font-mono text-[0.6875rem] font-semibold text-primary uppercase">
                  30 % Lexical (BM25 Python)
                </p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  Ne rate jamais les mots rares (« Lavolpiana », « demi-espace »,
                  noms de coachs) que les embeddings lissent.
                </p>
              </div>
            </div>

            <div className="border-l-2 border-secondary bg-secondary/8 p-3.5 font-mono text-xs">
              <span className="font-semibold text-secondary">
                → PARENT DOCUMENT STORE (SQLite) + FLASHRANK :
              </span>{" "}
              Au lieu de donner un mini-fragment coupé au LLM, on remonte le
              chapitre parent entier depuis SQLite et on le reclasse avec un
              Cross-Encoder (ms-marco-MiniLM-L-6-v2).
            </div>
          </div>

          <div className="flex flex-col justify-between border-t border-border pt-4 lg:col-span-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6">
            <div className="margin-note">
              <p className="font-semibold text-primary uppercase">
                [POURQUOI CE PROJET A TOUT DÉCLENCHÉ]
              </p>
              <p className="mt-1.5">
                C’est en construisant ce premier RAG que j’ai compris une chose :
                un RAG sur de la théorie tactique, c’est bien. Mais si tu lui
                demandes ce qui s’est passé à la 13e seconde d’un vrai match
                sans capteurs vidéo, il invente. C’est pour ça que j’ai ensuite
                créé <strong>VISION-BALLING</strong>.
              </p>
            </div>

            <div className="mt-6 border border-foreground bg-background p-3.5 font-mono text-[0.6875rem] leading-5">
              <p className="font-semibold text-foreground uppercase">
                Briques livrées dans le dépôt :
              </p>
              <p className="mt-1 text-muted-foreground">
                FastAPI asynchrone · Qdrant · BM25 from scratch · SQLite Parent
                Store · FlashRank · Export PDF ReportLab · Tests pytest
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="paper-sheet p-4 sm:p-6"
      aria-label="Établi interactif VISION-BALLING : scrubber vidéo SNMOT-068 et preuves tactiques synchronisées"
    >
      {/* Top Workbench Bar */}
      <header className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-foreground pb-3">
        <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs">
          <span className="bg-foreground px-2 py-0.5 font-semibold text-background">
            ÉTABLI LIVE
          </span>
          <span className="font-semibold text-foreground">
            SÉQUENCE SOCCERNET SNMOT-068
          </span>
          <span className="text-muted-foreground">
            — FRAME {String(currentFrame).padStart(3, "0")} / 350 ({currentTime.toFixed(2)}s)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="pitch-stamp">100% CLAIMS SOURCÉS</span>
        </div>
      </header>

      {/* Main Interactive Split: Real Video + Synchronized 2D Metric Pitch & Evidence */}
      <div className="mt-5 grid gap-6 lg:grid-cols-12">
        {/* Left 7 cols: Real Video Player + Timeline Scrubber with Event Pins */}
        <div className="lg:col-span-7">
          <div className="relative overflow-hidden border-2 border-foreground bg-black">
            <video
              ref={videoRef}
              src="/demo_videos/SNMOT-068.mp4"
              poster="/demo_videos/SNMOT-068_poster.jpg"
              muted
              playsInline
              onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              className="aspect-video w-full object-cover"
            />

            {/* Live HUD Overlay on top of video */}
            <div className="pointer-events-none absolute top-2.5 right-2.5 left-2.5 flex flex-wrap items-center justify-between gap-2 font-mono text-[0.6875rem]">
              <span className="bg-black/80 px-2 py-0.5 text-[#f3ede2]">
                t = {currentTime.toFixed(2)}s · F#{currentFrame}
              </span>
              <span className="bg-[#b83a24] px-2 py-0.5 font-semibold text-[#f7f3eb]">
                [{activeEvent.id}]
              </span>
            </div>
          </div>

          {/* Interactive Scrubber Controls */}
          <div className="mt-3 border border-foreground bg-background p-3">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={togglePlay}
                className="flex h-8 items-center gap-1.5 border border-foreground bg-foreground px-3 font-mono text-[0.6875rem] font-semibold text-background uppercase transition-colors hover:bg-primary hover:border-primary"
              >
                {isPlaying ? (
                  <>
                    <Pause className="size-3" /> Pause
                  </>
                ) : (
                  <>
                    <Play className="size-3" /> Lire
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => seekTo(2.16)}
                title="Revenir au début des événements"
                className="flex size-8 items-center justify-center border border-foreground bg-surface text-foreground hover:border-primary hover:text-primary"
                aria-label="Revenir à 2.16s"
              >
                <RotateCcw className="size-3.5" />
              </button>

              <div className="flex-1">
                <label htmlFor="snmot-scrubber" className="sr-only">
                  Scrubber la séquence vidéo de 0 à 14 secondes
                </label>
                <input
                  id="snmot-scrubber"
                  type="range"
                  min={0}
                  max={14}
                  step={0.04}
                  value={currentTime}
                  onChange={(e) => seekTo(parseFloat(e.target.value))}
                  className="h-2 w-full accent-[#b83a24]"
                />
              </div>

              <span className="font-mono text-xs font-semibold tabular-nums">
                {currentTime.toFixed(2)}s / 14.0s
              </span>
            </div>

            {/* Clickable Timestamp Evidence Markers */}
            <div className="mt-3 border-t border-border pt-2.5">
              <p className="mb-2 font-mono text-[0.625rem] tracking-[0.08em] text-muted-foreground uppercase">
                ↓ Cliquer sur un moment clé ou déplacer le curseur pour inspecter la preuve :
              </p>
              <div className="flex flex-wrap gap-1.5">
                {SNMOT068_EVENTS.map((ev) => {
                  const isActive = activeEvent.id === ev.id;
                  return (
                    <button
                      key={ev.id}
                      type="button"
                      onClick={() => seekTo(ev.startTime + 0.05)}
                      className={`border px-2 py-1 font-mono text-[0.625rem] transition-colors ${
                        isActive
                          ? "border-primary bg-primary text-primary-foreground font-semibold"
                          : "border-foreground/35 bg-surface text-foreground hover:border-primary"
                      }`}
                    >
                      {ev.startTime.toFixed(2)}s · {ev.family.replace("_", " ")}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Right 5 cols: Real-time Synchronized Evidence Card + 2D Pitch Radar + Margin Note */}
        <div className="flex flex-col justify-between gap-4 lg:col-span-5">
          {/* Active Evidence Card */}
          <div className="border-2 border-foreground bg-background p-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-2 font-mono text-[0.625rem] uppercase">
              <span className="font-semibold text-primary">
                {activeEvent.level}
              </span>
              <span className="bg-secondary/15 px-1.5 py-0.5 font-semibold text-secondary">
                CONF: {(activeEvent.confidence * 100).toFixed(0)}% · FRAMES{" "}
                {activeEvent.startFrame}→{activeEvent.endFrame}
              </span>
            </div>

            <p className="mt-2.5 font-mono text-xs font-semibold break-all text-foreground">
              [{activeEvent.id}]
            </p>

            <p className="mt-2 text-xs leading-5 text-foreground/90 sm:text-sm">
              {activeEvent.summaryFr}
            </p>

            {/* Mini 2D Metric Pitch Radar Synchronized to Active Event */}
            <div className="mt-3 border border-[#1e4d33] bg-[#163825] p-2.5 text-[#f3ede2]">
              <div className="mb-1.5 flex items-center justify-between font-mono text-[0.5625rem] uppercase">
                <span>PROJECTION SOL 105m × 68m (PnLCalib)</span>
                <span className="text-[#a3e6be]">
                  {activeEvent.pressurePeak
                    ? `PressureIndex Pic : ${activeEvent.pressurePeak.toFixed(2)}`
                    : "Reproj err : 3.2 px"}
                </span>
              </div>
              <svg
                viewBox="0 0 105 46"
                className="w-full border border-[#2d6647] bg-[#1b432c]"
                role="img"
                aria-label="Mini-carte métrique 2D synchronisée"
              >
                <line x1="52.5" y1="0" x2="52.5" y2="46" stroke="#357552" strokeWidth="0.5" />
                <circle cx="52.5" cy="23" r="6.5" fill="none" stroke="#357552" strokeWidth="0.5" />
                <rect x="0" y="9" width="12" height="28" fill="none" stroke="#357552" strokeWidth="0.5" />
                <rect x="93" y="9" width="12" height="28" fill="none" stroke="#357552" strokeWidth="0.5" />

                {/* Defensive block lines */}
                <line
                  x1="36.8"
                  y1="2"
                  x2="36.8"
                  y2="44"
                  stroke="#f28b73"
                  strokeWidth="0.5"
                  strokeDasharray="1.5 1.5"
                />
                <line
                  x1="77.8"
                  y1="2"
                  x2="77.8"
                  y2="44"
                  stroke="#9ce8ba"
                  strokeWidth="0.5"
                  strokeDasharray="1.5 1.5"
                />

                {/* Dynamic Pressure Halo around ball */}
                <circle
                  cx={activeEvent.ballPos.x}
                  cy={(activeEvent.ballPos.y / 68) * 46}
                  r={activeEvent.pressurePeak ? activeEvent.pressurePeak * 9 : 4}
                  fill="rgba(242, 139, 115, 0.25)"
                  stroke="#f28b73"
                  strokeWidth="0.45"
                />
                <circle
                  cx={activeEvent.ballPos.x}
                  cy={(activeEvent.ballPos.y / 68) * 46}
                  r="1.4"
                  fill="#ffffff"
                />
              </svg>
            </div>
          </div>

          {/* Grounded RAG Output + Honest Margin Note */}
          <div className="space-y-3">
            <div className="border-l-2 border-secondary bg-background p-3">
              <p className="font-mono text-[0.625rem] font-semibold text-secondary uppercase">
                PHRASE GÉNÉRÉE PAR LE RAG ANCRÉ :
              </p>
              <p className="mt-1 font-editorial text-lg leading-snug text-foreground">
                « {activeEvent.ragExcerptFr} »
              </p>
            </div>

            <div className="margin-note">
              <p className="font-semibold text-primary uppercase">
                [ANNOTATION D’ADRIANO]
              </p>
              <p className="mt-1">{activeEvent.authorNoteFr}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
