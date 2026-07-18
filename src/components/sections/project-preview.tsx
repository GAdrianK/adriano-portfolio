const systemNotes = [
  ["01", "Profil", "Coach · Analyste · Supporter"],
  ["02", "Recherche", "SBERT · TF-IDF · FAISS"],
  ["03", "Sortie", "Réponse contextualisée · PDF"],
] as const;

export function ProjectPreview() {
  return (
    <div
      className="project-preview flex min-h-[30rem] flex-col border border-border bg-background p-5 sm:min-h-[34rem] sm:p-8"
      aria-label="Composition éditoriale du projet Football Intelligence Assistant"
    >
      <header className="flex items-center justify-between border-b border-border pb-4 font-mono text-[0.625rem] tracking-[0.14em] uppercase">
        <span className="text-primary">Case study · 01</span>
        <span className="text-muted-foreground">Prototype</span>
      </header>

      <div className="grid flex-1 gap-12 py-10 sm:grid-cols-[1.05fr_0.95fr] sm:items-end sm:py-12">
        <div>
          <p className="font-mono text-[0.625rem] tracking-[0.15em] text-muted-foreground uppercase">Football / Knowledge / Retrieval</p>
          <p className="mt-7 text-[clamp(3.3rem,8vw,7rem)] leading-[0.8] font-medium tracking-[-0.08em] text-foreground">FIA</p>
          <p className="mt-8 max-w-sm text-xl leading-tight font-medium tracking-[-0.035em] text-foreground sm:text-2xl">Football Intelligence Assistant</p>
        </div>

        <blockquote className="border-l border-primary/50 pl-5 text-sm leading-6 text-muted-foreground sm:pl-6">
          « Comment organiser la progression du ballon sous pression ? »
        </blockquote>
      </div>

      <div className="border-t border-border">
        {systemNotes.map(([index, label, value]) => (
          <div key={index} className="grid grid-cols-[2rem_5rem_1fr] gap-3 border-b border-border py-3.5 text-[0.6875rem] leading-5 last:border-b-0 sm:grid-cols-[2.5rem_6rem_1fr]">
            <span className="font-mono text-primary">{index}</span>
            <span className="text-foreground">{label}</span>
            <span className="text-right text-muted-foreground">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

