export const professionalSolutions = [
  {
    id: "knowledge",
    number: "01",
    title: "Assistant documentaire intelligent",
    promise: "Interroger votre base de connaissances en langage naturel, avec des réponses traçables.",
    useCases: ["Support interne", "Documentation technique", "Recherche réglementaire"],
    process: ["Cadrage du corpus", "Prototype RAG", "Évaluation", "Intégration"],
    technologies: ["LLM", "RAG", "FAISS", "FastAPI"],
  },
  {
    id: "automation",
    number: "02",
    title: "Automatisation avec agents IA",
    promise: "Confier les tâches répétitives à des agents supervisés qui utilisent vos outils existants.",
    useCases: ["Qualification", "Synthèse", "Opérations multi-outils"],
    process: ["Cartographie", "Workflow", "Garde-fous", "Pilotage"],
    technologies: ["Agents IA", "LLM", "Python", "APIs"],
  },
  {
    id: "prototype",
    number: "03",
    title: "Prototype IA sur mesure",
    promise: "Transformer une opportunité métier en preuve de valeur testable, sans surconstruire.",
    useCases: ["Nouveau produit", "Validation technique", "Expérience conversationnelle"],
    process: ["Hypothèse", "Design", "Build", "Mesure"],
    technologies: ["JavaScript", "Python", "FastAPI", "Docker"],
  },
] as const;
