export const visionBallingProject = {
  slug: "vision-balling",
  code: "SYS-01",
  name: "VISION-BALLING",
  subtitle: "Intelligence tactique vidéo 2D & moteur RAG multimodal ancré",
  version: "v0.9.0-rc1",
  status: "Release Candidate · 26 expériences validées",
  domain: "Computer Vision · Géométrie 2D · Grounded RAG",
  summary:
    "Plateforme qui transforme une vidéo broadcast de football en projection métrique 2D (105 m × 68 m), quantifie les dynamiques collectives continues (possession, hauteur de bloc, compacité, pression vectorielle) et génère des rapports post-match où chaque affirmation cite obligatoirement une fiche de preuve horodatée.",
  problem:
    "Les résumés de match générés par LLM souffrent d’hallucinations factuelles, tandis que les modèles de vision brute livrent des boîtes englobantes inexploitables par un analyste tactique sans calibration terrain ni continuité temporelle.",
  solution:
    "Découplage strict entre la vérité factuelle du match (MatchEvidenceStore alimenté par RF-DETR, BoT-SORT/PRTReID et calibration homographique PnLCalib) et le moteur RAG hybride (Qdrant + BM25 + FlashRank), qui utilise la littérature tactique uniquement pour interpréter les faits mesurés avec abstention explicite en l’absence de preuve.",
  metrics: [
    {
      label: "Détection RF-DETR @ 960px",
      value: "0.865 mAP50",
      detail: "mAP50-95 : 0.618 sur dataset H250 (EXP-04)",
    },
    {
      label: "Suivi multi-objets (MOT)",
      value: "75.8 % IDF1",
      detail: "BoT-SORT + PRTReID avec gating conditionnel : −68 % de calculs ReID (EXP-11)",
    },
    {
      label: "Calibration & équipes",
      value: "3.2 px · 96.2 %",
      detail: "Erreur reprojection PnLCalib (IoU 88.5 %) & K-Means CIE-Lab non supervisé (EXP-12/13)",
    },
    {
      label: "Ancrage RAG (76 scénarios)",
      value: "0 % hallucination",
      detail: "100 % d’affirmations sourcées par preuve horodatée [event:id | t | conf] (EXP-26)",
    },
  ],
  capabilities: [
    "Détection bi-mode : RF-DETR Small @ 960px (Quality, 11.4 FPS) et YOLO11n @ 640px (Low Latency, 24.2 FPS)",
    "Tracking joueurs BoT-SORT + PRTReID conditionnel (−68 % d’appels ReID) et filtre de Kalman 2D découplé pour le ballon",
    "Attribution non supervisée des équipes et arbitres dans l’espace couleur CIE-Lab (96.2 % d’exactitude)",
    "Homographie terrain PnLCalib / TVCalib lissée temporellement (−54 % de variance) vers le référentiel 105 m × 68 m",
    "Métriques continues : Possession V2 avec hystérésis (+21 % F1), PressureIndex ∈ [0, 1] vectoriel et enveloppes convexes (m²)",
    "RAG hybride ancré (Qdrant + BM25 + FlashRank + SQLite Parent Store) avec citations horodatées et abstention motivée",
  ],
  architecture: [
    "Vidéo MP4",
    "RF-DETR / YOLO11",
    "BoT-SORT + PRTReID",
    "Homographie PnLCalib 2D",
    "Primitives Tactiques Continues",
    "MatchEvidenceStore",
    "RAG Hybride Ancré",
  ],
  chapters: [
    {
      number: "Ch. 05",
      title: "Vision par ordinateur & suivi multi-objets",
      description:
        "Détection haute résolution RF-DETR Small @ 960px pour capter le ballon et les joueurs éloignés, suivie d’un tracking BoT-SORT couplé à PRTReID déclenché uniquement lors des croisements d’occultation (−68 % de coût GPU).",
      metrics: "mAP50 : 0.865 · IDF1 : 75.8 % · Dérive ballon < 1.2 m",
    },
    {
      number: "Ch. 06",
      title: "Calibration caméra & géométrie métrique 2D",
      description:
        "Séparation des équipes par clustering K-Means dans l’espace perceptuel CIE-Lab et estimation homographique PnLCalib isolée en sous-processus, stabilisée par filtrage exponentiel temporel sur un plan 105 m × 68 m.",
      metrics: "Équipes : 96.2 % · Reprojection : 3.2 px · Variance : −54 %",
    },
    {
      number: "Ch. 07",
      title: "Intelligence tactique spatio-temporelle",
      description:
        "Remplacement des seuils discrets par des grandeurs physiques continues : Possession V2 par gating adaptatif, indice de pression vectoriel PressureIndex ∈ [0, 1], hauteur de ligne défensive et graphe causal d’événements.",
      metrics: "F1 porteur : +21 % · Monotonie pression : 100 %",
    },
    {
      number: "Ch. 08",
      title: "RAG multimodal ancré & rapport post-match",
      description:
        "Indexation des fiches TacticalEvidenceEvent dans MatchEvidenceStore et croisement avec une base tactique hybride (Qdrant + BM25 + FlashRank). Toute affirmation sur le match exige une balise de preuve vérifiable.",
      metrics: "Supported Claim Rate : 100 % · Hallucination : 0 % (76/76)",
    },
  ],
  benchmarks: [
    { exp: "EXP-04", domain: "Détection petits objets", approach: "RF-DETR Small @ 960px (H250)", metric: "mAP50 : 0.865 · mAP50-95 : 0.618", status: "Validé (Mode Quality)" },
    { exp: "EXP-07", domain: "Suivi du ballon V2", approach: "Kalman 2D + découplage obs/pred", metric: "Dérive < 1.2 m · Continuité +35 %", status: "Validé" },
    { exp: "EXP-11", domain: "ReID conditionnel", approach: "BoT-SORT + PRTReID avec gating spatial", metric: "IDF1 : 75.8 % · Calculs ReID : −68 %", status: "Validé en production" },
    { exp: "EXP-12", domain: "Attribution équipes", approach: "K-Means CIE-Lab non supervisé", metric: "Équipes : 96.2 % · Arbitres : 98.4 %", status: "Validé" },
    { exp: "EXP-13", domain: "Calibration terrain", approach: "PnLCalib (subprocess isolé) + EMA", metric: "IoU terrain : 88.5 % · Erreur : 3.2 px", status: "Validé" },
    { exp: "EXP-21", domain: "Formations nominales", approach: "Classification 4-3-3 / 4-4-2 sur caméra TV", metric: "Macro F1 : 0.00 % (Troncation FOV)", status: "Hypothèse réfutée" },
    { exp: "EXP-22", domain: "Possession V2", approach: "Gating spatio-temporel adaptatif + hystérésis", metric: "F1 identification porteur : +21 %", status: "Validé et adopté" },
    { exp: "EXP-23", domain: "Pression défensive", approach: "PressureIndex ∈ [0, 1] vectoriel continu", metric: "Monotonie physique : 100 %", status: "Validé" },
    { exp: "EXP-26", domain: "Grounded Tactical RAG", approach: "MatchEvidenceStore + Qdrant/BM25/FlashRank", metric: "Supported claims : 100 % · Hallucination : 0 %", status: "Validé (76/76 cas)" },
  ],
  negativeResults: [
    {
      code: "EXP-21",
      title: "Réfutation des formations nominales fixes (4-3-3, 4-4-2)",
      explanation:
        "Le champ de vision (FOV) des caméras broadcast tronque régulièrement 30 à 45 % des joueurs hors cadre. Forcer une classification catégorique produit un Macro F1 de 0.00 % en conditions réelles. Le système abandonne donc les étiquettes figées au profit de mesures géométriques continues (hauteur de bloc en mètres, largeur et surface d’enveloppe convexe en m²) calculées sur les joueurs visibles.",
    },
    {
      code: "EXP-23",
      title: "Abandon des classes discrètes de pressing",
      explanation:
        "Découper la pression en classes arbitraires (« faible », « moyenne », « forte ») introduit des effets de seuil instables d’une frame à l’autre. VISION-BALLING modélise un champ continu PressureIndex ∈ [0, 1] combinant distance inter-joueurs, vitesse de fermeture relative et densité locale.",
    },
    {
      code: "ARCH-GPL",
      title: "Isolation hermétique de PnLCalib (GPL-2.0) et planarité Z = 0",
      explanation:
        "Pour préserver la licence Apache-2.0 du dépôt tout en bénéficiant de la calibration PnLCalib, l’inférence de calibration s’exécute dans un sous-processus découplé communiquant par JSON. Par ailleurs, la projection homographique supposant Z = 0, les ballons aériens sont signalés comme sujets à parallaxe.",
    },
  ],
  stack: [
    "Python 3.11",
    "PyTorch",
    "RF-DETR",
    "YOLO11",
    "BoT-SORT",
    "PRTReID",
    "PnLCalib",
    "OpenCV",
    "Qdrant",
    "BM25",
    "FlashRank",
    "FastAPI",
    "React",
  ],
  githubUrl: "https://github.com/GAdrianK/VISION-BALLING",
} as const;

export const footballIntelligenceProject = {
  slug: "football-intelligence-assistant",
  code: "SYS-02",
  name: "Football Intelligence Assistant",
  subtitle: "Moteur RAG hybride & Parent Document Retriever pour l’analyse tactique",
  version: "v1.0",
  status: "Socle RAG en production",
  domain: "Hybrid Retrieval · Cross-Encoder · NLP",
  summary:
    "Système de recherche et d’analyse documentaire tactique combinant recherche vectorielle dense (Qdrant) et recherche lexicale (BM25 personnalisé) avec fusion pondérée 70/30, résolution de documents parents sous SQLite et re-ranking cross-encoder FlashRank.",
  problem:
    "Une recherche purement vectorielle sur de la littérature tactique perd les termes techniques exacts (pressings spécifiques, demi-espaces, profils de rôles) et renvoie des fragments isolés privés de leur contexte analytique complet.",
  solution:
    "Implémentation d’un retriever hybride 70 % dense (Qdrant) / 30 % lexical (BM25), couplé au pattern Parent Document Retriever (indexation de chunks enfants, restitution du document parent depuis SQLite), d’un Query Rewriter, d’un filtre temporel de match et d’un re-ranker FlashRank (ms-marco-MiniLM-L-6-v2) avant génération et export PDF.",
  metrics: [
    {
      label: "Fusion hybride",
      value: "70 / 30",
      detail: "Combinaison normalisée Qdrant (dense) + BM25 Python (lexical)",
    },
    {
      label: "Re-ranking",
      value: "FlashRank",
      detail: "Cross-encoder ms-marco-MiniLM-L-6-v2 pour maximiser la précision en top-K",
    },
    {
      label: "Contexte restitué",
      value: "Parent Store",
      detail: "Indexation fine par chunks enfants et résolution dynamique SQLite des parents",
    },
  ],
  capabilities: [
    "Retriever hybride combinant embeddings denses (Qdrant) et BM25 personnalisé avec fusion de scores normalisés (70/30)",
    "Pattern Parent Document Retriever : recherche sur chunks enfants et récupération des documents complets depuis SQLite",
    "Module de réécriture de requêtes (Query Rewriter) et re-ranking cross-encoder léger FlashRank (ms-marco-MiniLM-L-6-v2)",
    "Extracteur temporel filtrant automatiquement les segments de match et adaptation au profil (coach, analyste, supporter)",
    "API asynchrone FastAPI testée sous pytest et génération de rapports analytiques PDF via ReportLab",
    "Garde-fous d’ancrage documentaire qui ont servi de fondation au moteur RAG de VISION-BALLING",
  ],
  architecture: [
    "Requête & Profil",
    "Query Rewriter",
    "Qdrant (70%) + BM25 (30%)",
    "Parent Store SQLite",
    "FlashRank Reranker",
    "Garde-fous LLM",
    "Rapport PDF",
  ],
  stack: [
    "Python",
    "FastAPI",
    "Qdrant",
    "BM25",
    "SQLite",
    "FlashRank",
    "SBERT",
    "ReportLab",
    "pytest",
    "Docker",
  ],
  githubUrl: "https://github.com/GAdrianK/football-rag-system",
} as const;

export const evaliaProject = {
  slug: "evalia",
  code: "SYS-03",
  name: "Evalia",
  subtitle: "Plateforme d’évaluation LLM-as-a-Judge, données synthétiques & Quality Gate CI/CD",
  version: "v0.4",
  status: "Outil d’évaluation LLMOps",
  domain: "LLMOps · Evol-Instruct · Évaluation RAG",
  summary:
    "Plateforme d’évaluation automatisée pour pipelines RAG générant des jeux de tests complexes multi-sauts (Evol-Instruct) à partir de documents bruts, mesurant la fidélité (décomposition atomique d’affirmations) et bloquant les régressions dans GitHub Actions.",
  capabilities: [
    "Décomposition atomique des réponses (LLM-as-a-Judge) pour calculer Faithfulness et Answer Relevance par similarité cosinus",
    "Générateur de jeux de données synthétiques Evol-Instruct à partir de fichiers Markdown et PDF",
    "Exécution asynchrone FastAPI + SQLAlchemy avec suivi des coûts de tokens et runner CLI pour GitHub Actions",
  ],
  stack: [
    "Python 3.11",
    "FastAPI",
    "SQLAlchemy Async",
    "Next.js",
    "OpenAI API",
    "GitHub Actions",
  ],
  githubUrl: "https://github.com/GAdrianK/Evalia",
} as const;
