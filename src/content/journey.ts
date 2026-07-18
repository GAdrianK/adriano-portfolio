export const journeySteps = [
  {
    number: "01",
    label: "Fondations logicielles",
    title: "Structurer l’application",
    text: "Python, JavaScript, API FastAPI et tests pytest constituent le socle logiciel du prototype.",
  },
  {
    number: "02",
    label: "Langage & recherche",
    title: "Indexer la documentation",
    text: "SBERT, TF-IDF et FAISS relient la recherche sémantique et lexicale à une base documentaire locale.",
  },
  {
    number: "03",
    label: "RAG & garde-fous",
    title: "Encadrer la réponse",
    text: "LangChain organise la chaîne RAG et les garde-fous limitent les réponses hors contexte.",
  },
  {
    number: "04",
    label: "Restitution",
    title: "Livrer un résultat exploitable",
    text: "L’interface JavaScript présente la réponse et ReportLab permet son export sous forme de rapport PDF.",
  },
] as const;

