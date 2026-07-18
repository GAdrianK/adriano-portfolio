export const expertiseAreas = [
  {
    id: "rag",
    label: "LLM & RAG",
    title: "Relier les modèles aux connaissances utiles.",
    description:
      "Conception de chaînes RAG capables de rechercher un contexte documentaire et de limiter les réponses hors sujet.",
    capabilities: ["Recherche sémantique", "Indexation locale", "Contexte documentaire", "Garde-fous"],
    technologies: ["LangChain", "FAISS", "SBERT", "TF-IDF"],
  },
  {
    id: "agents",
    label: "Agents IA",
    title: "Connecter le raisonnement aux outils.",
    description:
      "Conception de systèmes agentiques qui relient les modèles de langage, les données et les outils autour d’un objectif défini.",
    capabilities: ["Orchestration d’outils", "Étapes contrôlées", "Contexte métier", "Garde-fous"],
    technologies: ["Agents IA", "LLM", "Python", "APIs"],
  },
  {
    id: "backend",
    label: "Backend IA",
    title: "Construire l’interface entre le modèle et le produit.",
    description:
      "Développement d’APIs et de composants backend pour rendre les fonctionnalités IA accessibles à une application.",
    capabilities: ["API FastAPI", "Intégration JavaScript", "Tests automatisés", "Conteneurisation"],
    technologies: ["FastAPI", "JavaScript", "pytest", "Docker"],
  },
  {
    id: "nlp",
    label: "NLP",
    title: "Rechercher l’information par le sens.",
    description:
      "Utilisation des représentations sémantiques et lexicales pour indexer et retrouver des passages documentaires pertinents.",
    capabilities: ["Embeddings", "Recherche sémantique", "Recherche lexicale", "Indexation documentaire"],
    technologies: ["SBERT", "TF-IDF", "FAISS", "Python"],
  },
  {
    id: "infra",
    label: "Infrastructure",
    title: "Faire fonctionner le prototype de bout en bout.",
    description:
      "Organisation des briques nécessaires à l’exécution locale, aux tests, à l’API et à la production de rapports.",
    capabilities: ["Indexation locale", "Tests avec pytest", "API FastAPI", "Export PDF"],
    technologies: ["Docker", "pytest", "FastAPI", "ReportLab"],
  },
] as const;

