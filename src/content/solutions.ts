export const professionalSolutions = [
  {
    id: "knowledge",
    number: "01",
    title: "Ancrage factuel strict (Zero-Hallucination)",
    promise:
      "Un LLM ne doit jamais inventer un fait observable. Dans VISION-BALLING, la vérité du match provient exclusivement des capteurs géométriques (MatchEvidenceStore) ; le RAG ne sert qu’à l’interprétation tactique.",
    useCases: [
      "Séparation stricte entre faits mesurés (Niveau 1) et candidats diagnostiques (Niveau 3)",
      "Citation obligatoire [event:id | t | conf] sur chaque affirmation générée",
      "Abstention explicite lorsque la couverture vidéo ou la confiance est insuffisante",
    ],
    process: ["Mesure 2D", "Fiche de preuve", "Retrieval hybride", "Vérification"],
    technologies: ["MatchEvidenceStore", "Qdrant", "BM25", "FlashRank"],
  },
  {
    id: "automation",
    number: "02",
    title: "Protocoles expérimentaux scellés (EXP-01 → 26)",
    promise:
      "Chaque brique technique est validée par un protocole chiffré sur jeux de données partitionnés (Train / Dev / Holdout) avant d’intégrer le pipeline principal.",
    useCases: [
      "Dataset H250 (5 834 images) pour la détection RF-DETR vs YOLO11",
      "12 séquences SoccerNet Tracking 2023 (SNMOT-060 à 071) pour le suivi et la tactique",
      "76 scénarios standardisés + LLM-as-a-Judge (Evalia) pour l’ancrage RAG",
    ],
    process: ["Hypothèse", "Benchmark isolé", "Ablation", "Adoption ou rejet"],
    technologies: ["H250", "SoccerNet", "IDF1 / mAP", "Evalia CI"],
  },
  {
    id: "prototype",
    number: "03",
    title: "Publication des résultats négatifs & limites",
    promise:
      "Un système d’ingénierie crédible documente ce qu’il ne peut pas mesurer plutôt que de masquer ses erreurs derrière des seuils arbitraires.",
    useCases: [
      "EXP-21 : réfutation des formations fixes (4-3-3) à cause de la troncation caméra TV (Macro F1 : 0 %)",
      "EXP-23 : remplacement des classes de pression discrètes par un indice continu PressureIndex ∈ [0, 1]",
      "Signalement explicite de l’erreur de parallaxe sur les ballons aériens (hypothèse Z = 0)",
    ],
    process: ["Constat d’échec", "Analyse causale", "Refonte continue", "Documentation"],
    technologies: ["Géométrie continue", "Hystérésis", "Audit épistémique", "Apache-2.0"],
  },
] as const;
