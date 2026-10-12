import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { ProjectPreview } from "@/components/sections/project-preview";
import { Button } from "@/components/ui/button";
import {
  evaliaProject,
  footballIntelligenceProject,
  visionBallingProject,
} from "@/content/projects";

export function Projects() {
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
            CHAPITRE I — LE TERRAIN COMME LABORATOIRE
          </p>
          <h2
            id="projects-title"
            className="mt-3 font-editorial text-[clamp(2.6rem,5.8vw,5.2rem)] leading-[0.92] font-normal text-foreground"
          >
            Comment empêcher une IA de{" "}
            <span className="italic text-primary">raconter n’importe quoi</span>{" "}
            sur un match de foot ?
          </h2>
        </div>

        <div className="margin-note lg:col-span-4">
          <p className="font-semibold text-foreground uppercase">
            [POINT DE DÉPART]
          </p>
          <p className="mt-1">
            Demande à un LLM d’analyser une séquence vidéo de football : il va
            t’inventer un « 4-3-3 fluide » avec un aplomb parfait. J’ai construit{" "}
            <strong>VISION-BALLING</strong> pour briser cette boîte noire.
          </p>
        </div>
      </div>

      {/* Main Feature Spread: VISION-BALLING Narrative + Crash-Tests */}
      <div className="mt-12 grid gap-10 border-t border-foreground/30 pt-10 lg:grid-cols-12">
        {/* Left 5 cols: The Story, The Pipeline & The Honest Failures */}
        <div className="space-y-6 lg:col-span-5">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <span className="ink-stamp">PIÈCE MAÎTRESSE · v0.9.0-rc1</span>
            <span className="text-muted-foreground">
              26 protocoles expérimentaux scellés
            </span>
          </div>

          <h3 className="font-editorial text-4xl leading-none text-foreground sm:text-5xl">
            {visionBallingProject.name}
          </h3>

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

          {/* Torn Notebook Note: What Failed vs What Worked */}
          <div className="border-2 border-foreground bg-surface p-5">
            <p className="font-mono text-xs font-semibold text-primary uppercase">
              ✗ CE QUI A FOIRÉ (ET QUE J’AI GARDÉ DANS LE RAPPORT) :
            </p>
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
          </div>

          {/* Inline Typewriter Ledger instead of Pill Badges */}
          <div className="border-y border-foreground/30 py-4 font-mono text-xs leading-6">
            <p>
              <span className="text-muted-foreground">MOTEUR :</span> Python
              3.11, PyTorch, RF-DETR, YOLO11, BoT-SORT, PRTReID, PnLCalib
              (isolé en sous-processus GPL-2.0), K-Means CIE-Lab (96.2 %)
            </p>
            <p className="mt-1">
              <span className="text-muted-foreground">ANCRAGE RAG :</span>{" "}
              MatchEvidenceStore + Qdrant + BM25 + FlashRank —{" "}
              <strong className="text-secondary">
                100 % d’affirmations sourcées / 0 % d’hallucination sur 76 cas
              </strong>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-1">
            <Button asChild size="lg">
              <Link href="/projets/vision-balling">
                Ouvrir le dossier complet (EXP-01 → 26)
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="glass" size="lg">
              <a
                href={visionBallingProject.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                Code source GitHub ↗
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
              <span className="text-primary font-semibold">ARCHIVE N° 02</span>
              <span>—</span>
              <span className="text-muted-foreground">
                LA GENÈSE DU MOTEUR RAG HYBRIDE
              </span>
            </div>

            <h3 className="mt-3 font-editorial text-4xl text-foreground sm:text-5xl">
              {footballIntelligenceProject.name}
            </h3>

            <p className="mt-4 text-base leading-7 text-foreground/90">
              Avant de brancher de la vidéo, j’ai voulu construire un assistant
              capable de fouiller une vraie bibliothèque tactique sans noyer les
              termes précis. Un RAG purement vectoriel lisse tout : si tu
              cherches <em>« sortie Lavolpiana »</em> ou{" "}
              <em>« pressing orienté demi-espace »</em>, l’embedding seul passe
              à côté.
            </p>

            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              J’ai donc écrit un <strong>retriever hybride 70/30</strong>{" "}
              (Qdrant en dense + un BM25 codé en Python pour le lexical),
              branché un <strong>Parent Document Store sous SQLite</strong>{" "}
              (on cherche sur de petits fragments, mais on remonte la page
              complète au modèle) et ajouté un re-ranker cross-encoder{" "}
              <strong>FlashRank (ms-marco-MiniLM-L-6-v2)</strong> avec export de
              rapports PDF sous ReportLab.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-5">
              <Button asChild variant="glass" size="default">
                <Link href="/projets/football-intelligence-assistant">
                  Lire l’étude d’architecture RAG
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
                  ARCHIVE N° 03
                </span>
                <span>—</span>
                <span className="text-muted-foreground">
                  TORTURER LES MODÈLES EN CI/CD
                </span>
              </div>

              <h3 className="mt-3 font-editorial text-4xl text-foreground sm:text-5xl">
                {evaliaProject.name}{" "}
                <span className="font-editorial text-2xl italic text-muted-foreground">
                  (LLMOps & Judge)
                </span>
              </h3>

              <p className="mt-4 text-sm leading-6 text-foreground/90 sm:text-base sm:leading-7">
                Comment savoir si une modification de prompt ou de chunking
                dégrade ton RAG ? Plutôt que de tester 3 questions à la main,
                j’ai développé <strong>Evalia</strong> : un générateur qui
                transforme des PDF/Markdown bruts en questions pièges
                multi-sauts (<strong>Evol-Instruct</strong>), décompose chaque
                réponse en affirmations atomiques (<strong>LLM-as-a-Judge</strong>)
                et bloque la Pull Request sur GitHub Actions si la fidélité
                chute.
              </p>
            </div>

            <div className="mt-6 border-t border-border pt-4">
              <p className="font-mono text-xs text-muted-foreground">
                Sous le capot : FastAPI Async · SQLAlchemy · Décomposition
                atomique Faithfulness / Cosine Answer Relevance · GitHub Actions
                CLI
              </p>
              <div className="mt-4">
                <a
                  href={evaliaProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs font-semibold underline decoration-secondary underline-offset-4 hover:text-secondary"
                >
                  Explorer Evalia sur GitHub (github.com/GAdrianK/Evalia) ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
