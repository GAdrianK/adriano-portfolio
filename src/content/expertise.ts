export const expertiseAreas = [
  {
    id: "vision",
    label: "Vision & Tracking",
    labelEn: "Vision & Tracking",
    title: "Extraire des trajectoires fiables depuis un flux broadcast.",
    titleEn: "Extracting reliable trajectories from raw broadcast feeds.",
    description:
      "Entraînement et intégration de détecteurs d’objets (RF-DETR, YOLO11) et de trackers multi-objets (BoT-SORT, ByteTrack) avec ré-identification conditionnelle (PRTReID) et filtrage de Kalman découplé.",
    descriptionEn:
      "Fine-tuning and deployment of high-resolution object detectors (RF-DETR, YOLO11) and multi-object trackers (BoT-SORT, ByteTrack) with gated conditional re-identification (PRTReID) and decoupled Kalman filtering.",
    capabilities: [
      "Détection haute résolution petits objets (ballon, joueurs lointains)",
      "Gating spatio-temporel ReID (−68 % d’appels d’apparence)",
      "Clustering non supervisé CIE-Lab pour équipes et arbitres (96.2 %)",
      "Modes d’exécution adaptatifs : Quality (960px) vs Low Latency (640px)",
    ],
    capabilitiesEn: [
      "High-resolution small-object detection (ball, distant players)",
      "Spatio-temporal ReID gating (−68% appearance feature extractions)",
      "Unsupervised CIE-Lab clustering for teams and referees (96.2%)",
      "Adaptive execution modes: Quality (960px) vs Low Latency (640px)",
    ],
    technologies: ["RF-DETR", "YOLO11", "BoT-SORT", "PRTReID", "OpenCV", "Kalman 2D"],
  },
  {
    id: "geometry",
    label: "Géométrie & Tactique 2D",
    labelEn: "Geometry & 2D Tactics",
    title: "Projeter les pixels sur un référentiel métrique continu.",
    titleEn: "Projecting screen pixels onto an authoritative metric pitch.",
    description:
      "Calibration homographique du terrain (PnLCalib, TVCalib) avec lissage temporel exponentiel pour transformer les coordonnées caméra en grandeurs physiques sur 105 m × 68 m.",
    descriptionEn:
      "Field homography calibration (PnLCalib, TVCalib) with temporal exponential smoothing to translate broadcast camera coordinates into continuous metric measurements on a 105 m × 68 m pitch.",
    capabilities: [
      "Projection homographique lissée (−54 % de variance temporelle)",
      "Indice de pression vectoriel continu PressureIndex ∈ [0, 1]",
      "Enveloppes convexes, compacité (m²) et hauteur de ligne défensive",
      "Graphe causal d’événements horodatés (TacticalEvidenceEvent)",
    ],
    capabilitiesEn: [
      "Smoothed homography projection (−54% temporal variance)",
      "Continuous vector defensive PressureIndex ∈ [0, 1]",
      "Convex hulls, team compactness (m²), and defensive line height",
      "Causal timestamped event graph (TacticalEvidenceEvent)",
    ],
    technologies: ["PnLCalib", "TVCalib", "Homographie 2D", "NumPy", "SciPy"],
  },
  {
    id: "rag",
    label: "RAG Hybride & Ancrage",
    labelEn: "Hybrid RAG & Grounding",
    title: "Contraindre le modèle de langage par la preuve mesurée.",
    titleEn: "Constraining language models with verified empirical evidence.",
    description:
      "Conception d’architectures RAG multimodales où la vérité factuelle (MatchEvidenceStore) est séparée du corpus explicatif, avec obligation de citation horodatée et abstention explicite.",
    descriptionEn:
      "Architecting multimodal RAG pipelines where physical ground truth (MatchEvidenceStore) is segregated from domain knowledge, enforcing timestamped citations and explicit abstention.",
    capabilities: [
      "Recherche hybride dense + lexicale (Qdrant 70 % / BM25 30 %)",
      "Pattern Parent Document Retriever (chunks enfants → parents SQLite)",
      "Re-ranking cross-encoder léger FlashRank (ms-marco-MiniLM-L-6-v2)",
      "Audit d’ancrage : 100 % d’affirmations sourcées, 0 % d’hallucination",
    ],
    capabilitiesEn: [
      "Hybrid dense + lexical retrieval (70% Qdrant / 30% BM25)",
      "Parent Document Retriever pattern (child search chunks → parent SQLite docs)",
      "Fast cross-encoder re-ranking via FlashRank (ms-marco-MiniLM-L-6-v2)",
      "Grounding verification audit: 100% supported claims, 0% hallucination",
    ],
    technologies: ["Qdrant", "BM25", "FlashRank", "SQLite", "LangChain", "SBERT"],
  },
  {
    id: "nlp",
    label: "NLP & Linguistique",
    labelEn: "NLP & Linguistics",
    title: "Structurer le sens, les requêtes et l’évaluation.",
    titleEn: "Structuring semantic intent, queries, and automated evaluation.",
    description:
      "Issu du Master PluriTAL (Sorbonne Nouvelle, Paris Nanterre, INALCO) : traitement automatique du langage, réécriture de requêtes, extraction temporelle et évaluation automatisée de fidélité.",
    descriptionEn:
      "Rooted in the PluriTAL NLP Master's (Sorbonne Nouvelle, Paris Nanterre, INALCO): query rewriting, temporal entity extraction, and automated LLM-as-a-judge evaluation.",
    capabilities: [
      "Réécriture de requêtes (Query Rewriting) et extraction temporelle",
      "Génération de données synthétiques multi-sauts (Evol-Instruct)",
      "Évaluation LLM-as-a-Judge par décomposition atomique d’affirmations",
      "Analyse de corpus multilingues (français, italien, anglais)",
    ],
    capabilitiesEn: [
      "Domain query rewriting and temporal constraint extraction",
      "Multi-hop synthetic evaluation dataset generation (Evol-Instruct)",
      "LLM-as-a-Judge evaluation via atomic claim decomposition",
      "Multilingual corpus analysis (French, Italian, English)",
    ],
    technologies: ["Sentence-Transformers", "spaCy", "TF-IDF", "Evol-Instruct", "Python"],
  },
  {
    id: "engineering",
    label: "Architecture & Prod",
    labelEn: "Production Systems",
    title: "Livrer des pipelines reproductibles, testés et isolés.",
    titleEn: "Delivering reproducible, benchmarked, and isolated systems.",
    description:
      "Construction d’APIs FastAPI, isolation de composants sous licences strictes (GPL-2.0 en sous-processus), génération d’artefacts signés SHA-256 et intégration continue.",
    descriptionEn:
      "Building async FastAPI services, isolating copyleft components (GPL-2.0 sealed subprocess bridge), producing SHA-256 signed evidence artifacts, and CI/CD quality gates.",
    capabilities: [
      "Isolation subprocess hermétique (PnLCalib GPL-2.0 → Apache-2.0)",
      "Traçabilité des runs : empreintes SHA-256, JSONL et profilage FPS",
      "APIs REST asynchrones FastAPI & interfaces React / Next.js",
      "Suites de tests pytest et Quality Gates en CI/CD GitHub Actions",
    ],
    capabilitiesEn: [
      "Hermetic subprocess isolation (PnLCalib GPL-2.0 bridge to Apache-2.0)",
      "Full run reproducibility: SHA-256 signatures, JSONL logs & FPS profiling",
      "Async FastAPI REST APIs and reactive React / Next.js interfaces",
      "Comprehensive pytest test suites and CI/CD quality gates on GitHub Actions",
    ],
    technologies: ["FastAPI", "PyTorch", "React", "Next.js", "pytest", "Docker"],
  },
] as const;
