export function Solutions() {
  return (
    <section
      id="solutions"
      data-navigation-section
      className="deferred-section scroll-mt-28 border-t-2 border-foreground py-[var(--section-space)]"
      aria-labelledby="solutions-title"
    >
      <div className="grid gap-12 lg:grid-cols-12">
        {/* Left 5 cols: Editorial Manifesto */}
        <div className="lg:col-span-5">
          <p className="font-mono text-xs tracking-[0.12em] text-primary uppercase">
            CHAPITRE III — MANIFESTE D’ATELIER
          </p>
          <h2
            id="solutions-title"
            className="mt-3 font-editorial text-[clamp(2.6rem,5.4vw,4.9rem)] leading-[0.92] font-normal text-foreground"
          >
            Pourquoi je me méfie des{" "}
            <span className="italic text-primary">phrases trop lisses</span>.
          </h2>

          <div className="mt-8 paper-sheet p-5">
            <p className="font-mono text-xs font-semibold text-foreground uppercase">
              RÈGLE D’OR DE MES DÉPÔTS :
            </p>
            <p className="mt-2 font-editorial text-2xl italic leading-snug text-foreground">
              « Si le système n’a pas la preuve mesurée sous les yeux, il n’a
              pas le droit d’écrire l’adjectif. »
            </p>
            <p className="mt-3 font-mono text-[0.6875rem] text-muted-foreground">
              — Appliqué sur les 76 scénarios d’audit de VISION-BALLING (EXP-26)
            </p>
          </div>
        </div>

        {/* Right 7 cols: Narrative Essay + Lab Notebook Ratures */}
        <div className="space-y-8 lg:col-span-7 lg:pl-6">
          <div className="border-b border-foreground/30 pb-7">
            <p className="font-mono text-xs font-semibold text-secondary uppercase">
              I. CE QUE LA LINGUISTIQUE M’A APPRIS SUR L’IA
            </p>
            <p className="mt-3 text-base leading-7 text-foreground/90">
              Quand on passe trois ans à analyser la grammaire italienne, la
              traduction et la structure du discours à la Sorbonne avant de
              faire du NLP et du Machine Learning, on ne voit pas les LLM comme
              de la magie. On les voit pour ce qu’ils sont : de formidables
              machines probabilistes qui préfèrent{" "}
              <em>produire une phrase vraisemblable mais fausse</em> plutôt que
              d’avouer leur ignorance. Mon travail d’ingénieur consiste à
              construire les garde-fous géométriques, lexicaux et logiques qui
              les ramènent sur terre.
            </p>
          </div>

          <div className="border-b border-foreground/30 pb-7">
            <p className="font-mono text-xs font-semibold text-primary uppercase">
              II. PUBLIER LES ÉCHECS AUSSI FORT QUE LES RÉUSSITES
            </p>
            <p className="mt-3 text-base leading-7 text-foreground/90">
              Dans presque tous les portfolios IA, tout marche à 99 %. Dans la
              vraie vie, c’est faux. Quand j’ai testé la classification de
              formations tactiques sur caméra broadcast (<strong>EXP-21</strong>),
              elle s’est effondrée à <strong>0.00 % de F1</strong>. Quand j’ai
              testé des seuils discrets de pression (<strong>EXP-23</strong>),
              ça clignotait à chaque frame. Laisser ces{" "}
              <span className="underline decoration-primary decoration-2">
                résultats négatifs
              </span>{" "}
              en pleine lumière dans la documentation de{" "}
              <strong>VISION-BALLING</strong>, c’est ce qui sépare l’ingénierie
              sérieuse d’une démo truquée.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs font-semibold text-foreground uppercase">
              III. LE JEU COLLECTIF COMME TERRAIN D’EXPÉRIMENTATION
            </p>
            <p className="mt-3 text-base leading-7 text-foreground/90">
              Pourquoi le football ? Parce qu’un match est le pire cauchemar
              possible pour une IA : 22 joueurs qui s’occultent, une caméra TV
              qui bouge et coupe la moitié du terrain, un ballon qui fuse, et un
              vocabulaire tactique ultra-codifié. Si une architecture
              multimodale (Vision + Géométrie 2D + RAG Hybride) tient debout
              là-dessus sans halluciner, elle peut tenir debout sur n’importe
              quel problème industriel complexe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
