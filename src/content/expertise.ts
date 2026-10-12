export const expertiseAreas = [
  {
    id: "vision",
    label: "Vision & Tracking",
    title: "Extraire des trajectoires fiables depuis un flux broadcast.",
    description:
      "Entraînement et intégration de détecteurs d’objets (RF-DETR, YOLO11) et de trackers multi-objets (BoT-SORT, ByteTrack) avec ré-identification conditionnelle (PRTReID) et filtrage de Kalman découplé.",
    capabilities: [
      "Détection haute résolution petits objets (ballon, joueurs lointains)",
      "Gating spatio-temporel ReID (−68 % d’appels d’apparence)",
      "Clustering non supervisé CIE-Lab pour équipes et arbitres (96.2 %)",
      "Modes d’exécution adaptatifs : Quality (960px) vs Low Latency (640px)",
    ],
    technologies: ["RF-DETR", "YOLO11", "BoT-SORT", "PRTReID", "OpenCV", "Kalman 2D"],
  },
  {
    id: "geometry",
    label: "Géométrie & Tactique 2D",
    title: "Projeter les pixels sur un référentiel métrique continu.",
    description:
      "Calibration homographique du terrain (PnLCalib, TVCalib) avec lissage temporel exponentiel pour transformer les coordonnées caméra en grandeurs physiques sur 105 m × 68 m.",
    capabilities: [
      "Projection homographique lissée (−54 % de variance temporelle)",
      "Indice de pression vectoriel continu PressureIndex ∈ [0, 1]",
      "Enveloppes convexes, compacité (m²) et hauteur de ligne défensive",
      "Graphe causal d’événements horodatés (TacticalEvidenceEvent)",
    ],
    technologies: ["PnLCalib", "TVCalib", "Homographie 2D", "NumPy", "SciPy"],
  },
  {
    id: "rag",
    label: "RAG Hybride & Ancrage",
    title: "Contraindre le modèle de langage par la preuve mesurée.",
    description:
      "Conception d’architectures RAG multimodales où la vérité factuelle (MatchEvidenceStore) est séparée du corpus explicatif, avec obligation de citation horodatée et abstention explicite.",
    capabilities: [
      "Recherche hybride dense + lexicale (Qdrant 70 % / BM25 30 %)",
      "Pattern Parent Document Retriever (chunks enfants → parents SQLite)",
      "Re-ranking cross-encoder léger FlashRank (ms-marco-MiniLM-L-6-v2)",
      "Audit d’ancrage : 100 % d’affirmations sourcées, 0 % d’hallucination",
    ],
    technologies: ["Qdrant", "BM25", "FlashRank", "SQLite", "LangChain", "SBERT"],
  },
  {
    id: "nlp",
    label: "NLP & Linguistique",
    title: "Structurer le sens, les requêtes et l’évaluation.",
    description:
      "Issu du Master PluriTAL (Sorbonne Nouvelle, Paris Nanterre, INALCO) : traitement automatique du langage, réécriture de requêtes, extraction temporelle et évaluation automatisée de fidélité.",
    capabilities: [
      "Réécriture de requêtes (Query Rewriting) et extraction temporelle",
      "Génération de données synthétiques multi-sauts (Evol-Instruct)",
      "Évaluation LLM-as-a-Judge par décomposition atomique d’affirmations",
      "Analyse de corpus multilingues (français, italien, anglais)",
    ],
    technologies: ["Sentence-Transformers", "spaCy", "TF-IDF", "Evol-Instruct", "Python"],
  },
  {
    id: "engineering",
    label: "Architecture & Prod",
    title: "Livrer des pipelines reproductibles, testés et isolés.",
    description:
      "Construction d’APIs FastAPI, isolation de composants sous licences strictes (GPL-2.0 en sous-processus), génération d’artefacts signés SHA-256 et intégration continue.",
    capabilities: [
      "Isolation subprocess hermétique (PnLCalib GPL-2.0 → Apache-2.0)",
      "Traçabilité des runs : empreintes SHA-256, JSONL et profilage FPS",
      "APIs REST asynchrones FastAPI & interfaces React / Next.js",
      "Suites de tests pytest et Quality Gates en CI/CD GitHub Actions",
    ],
    technologies: ["FastAPI", "PyTorch", "React", "Next.js", "pytest", "Docker"],
  },
] as const;
