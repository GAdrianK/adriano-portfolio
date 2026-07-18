import { Database, FileText, Search, ShieldCheck, Sparkles } from "lucide-react";

const indexedContent = [
  { title: "Document tactique", detail: "Index local" },
  { title: "Contexte de jeu", detail: "Recherche sémantique" },
  { title: "Profil utilisateur", detail: "Réponse contextualisée" },
] as const;

export function ProjectPreview() {
  return (
    <div
      className="project-preview relative min-h-[27rem] overflow-hidden rounded-xl border border-white/10 bg-[#080d18] p-4 shadow-soft sm:min-h-[32rem] sm:p-6"
      aria-label="Aperçu conceptuel de l’interface Football Intelligence Assistant"
    >
      <div className="flex items-center justify-between border-b border-white/8 pb-4">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-secondary shadow-[0_0_1rem_var(--secondary)]" />
          <span className="font-mono text-[0.625rem] tracking-[0.14em] text-muted-foreground uppercase">Football intelligence</span>
        </div>
        <span className="rounded-pill border border-primary/20 bg-primary/8 px-2.5 py-1 font-mono text-[0.5625rem] tracking-[0.12em] text-primary uppercase">Prototype</span>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-[0.82fr_1.18fr]">
        <div className="rounded-lg border border-white/8 bg-white/[0.025] p-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground"><Search className="size-3.5 text-secondary" aria-hidden="true" />Requête · Profil coach</div>
          <p className="mt-5 text-sm leading-6 text-foreground sm:text-base">« Comment organiser la progression du ballon sous pression ? »</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["tactique", "progression", "pression"].map((tag) => <span key={tag} className="rounded-pill border border-white/8 bg-white/5 px-2.5 py-1 font-mono text-[0.625rem] text-muted-foreground">{tag}</span>)}
          </div>
          <div className="mt-8 border-t border-white/8 pt-4">
            <div className="flex items-center gap-2 font-mono text-[0.625rem] tracking-[0.12em] text-secondary uppercase"><Database className="size-3.5" aria-hidden="true" />Indexation locale</div>
            <div className="mt-4 space-y-2.5">
              {indexedContent.map((item) => (
                <div key={item.title} className="rounded-md border border-white/8 bg-black/10 p-3">
                  <p className="text-xs font-medium text-foreground">{item.title}</p>
                  <p className="mt-1 font-mono text-[0.5625rem] text-muted-foreground uppercase">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-primary/15 bg-primary/[0.035] p-4 sm:p-5">
          <div className="flex items-center gap-2 font-mono text-[0.625rem] tracking-[0.12em] text-primary uppercase"><Sparkles className="size-3.5" aria-hidden="true" />Réponse contextualisée</div>
          <div className="mt-5 space-y-2.5" aria-hidden="true"><span className="block h-2 w-full rounded-pill bg-white/12" /><span className="block h-2 w-[92%] rounded-pill bg-white/10" /><span className="block h-2 w-[76%] rounded-pill bg-white/8" /></div>
          <div className="mt-6 space-y-3">
            <div className="rounded-md border border-white/8 bg-black/15 p-3">
              <div className="flex items-center gap-2"><ShieldCheck className="size-3.5 text-secondary" aria-hidden="true" /><span className="text-xs font-medium text-foreground">Garde-fous contextuels</span></div>
              <p className="mt-2 text-[0.6875rem] leading-5 text-muted-foreground">Les réponses hors du contexte documentaire sont limitées.</p>
            </div>
            <div className="rounded-md border border-white/8 bg-black/15 p-3">
              <div className="flex items-center gap-2"><FileText className="size-3.5 text-secondary" aria-hidden="true" /><span className="text-xs font-medium text-foreground">Rapport PDF</span></div>
              <p className="mt-2 text-[0.6875rem] leading-5 text-muted-foreground">La restitution peut être exportée avec ReportLab.</p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2 border-t border-white/8 pt-4 font-mono text-[0.5625rem] tracking-[0.1em] text-muted-foreground uppercase"><span>SBERT</span><span aria-hidden="true">·</span><span>TF-IDF</span><span aria-hidden="true">·</span><span>FAISS</span></div>
        </div>
      </div>
    </div>
  );
}

