export const footballIntelligenceProject = {
  slug: "football-intelligence-assistant",
  name: "Football Intelligence Assistant",
  status: "Prototype fonctionnel en développement",
  summary:
    "Assistant conversationnel destiné aux coachs, analystes et passionnés de football. Le système utilise une architecture RAG pour rechercher des informations tactiques dans une base documentaire et produire des réponses contextualisées selon le profil de l’utilisateur.",
  problem:
    "Les coachs, analystes et passionnés doivent pouvoir retrouver des informations tactiques dans une base documentaire et obtenir une réponse adaptée à leur profil.",
  solution:
    "Le prototype s’appuie sur une architecture RAG, une indexation locale et des garde-fous pour rechercher le contexte utile, limiter les réponses hors sujet et produire une restitution contextualisée.",
  capabilities: [
    "Recherche sémantique",
    "Réponses adaptées aux coachs, analystes et supporters",
    "API FastAPI",
    "Indexation locale",
    "Export de rapports PDF",
    "Garde-fous limitant les réponses hors contexte",
  ],
  architecture: [
    "Question",
    "Profil",
    "SBERT / TF-IDF",
    "FAISS",
    "Garde-fous",
    "Réponse",
    "Rapport PDF",
  ],
  stack: [
    "Python",
    "FastAPI",
    "SBERT",
    "TF-IDF",
    "FAISS",
    "LangChain",
    "JavaScript",
    "ReportLab",
    "pytest",
    "Docker",
  ],
  githubUrl: "https://github.com/GAdrianK/football-rag-system",
} as const;

