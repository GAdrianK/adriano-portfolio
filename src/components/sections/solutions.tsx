"use client";

import { useLanguage } from "@/lib/i18n";

export function Solutions() {
  const { locale, t } = useLanguage();

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
            {t("manifesto.tag")}
          </p>
          <h2
            id="solutions-title"
            className="mt-3 font-editorial text-[clamp(2.6rem,5.4vw,4.9rem)] leading-[0.92] font-normal text-foreground"
          >
            {locale === "fr" ? (
              <>
                Pourquoi je me méfie des{" "}
                <span className="italic text-primary">phrases trop lisses</span>.
              </>
            ) : (
              <>
                Why I distrust{" "}
                <span className="italic text-primary">overly polished claims</span>.
              </>
            )}
          </h2>

          <div className="mt-8 paper-sheet p-5">
            <p className="font-mono text-xs font-semibold text-foreground uppercase">
              {t("manifesto.golden_rule")}
            </p>
            <p className="mt-2 font-editorial text-2xl italic leading-snug text-foreground">
              {t("manifesto.quote")}
            </p>
            <p className="mt-3 font-mono text-[0.6875rem] text-muted-foreground">
              {t("manifesto.quote_sub")}
            </p>
          </div>
        </div>

        {/* Right 7 cols: Narrative Essay + Lab Notebook Ratures */}
        <div className="space-y-8 lg:col-span-7 lg:pl-6">
          <div className="border-b border-foreground/30 pb-7">
            <p className="font-mono text-xs font-semibold text-secondary uppercase">
              {t("manifesto.p1_title")}
            </p>
            {locale === "fr" ? (
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
            ) : (
              <p className="mt-3 text-base leading-7 text-foreground/90">
                Spending three years dissecting Italian grammar, translation,
                and discourse theory at the Sorbonne before pivoting to NLP and
                Machine Learning permanently immunizes you against treating LLMs
                as magic. You see them for what they are: remarkable probabilistic
                engines that prefer <em>producing a plausible falsehood</em> rather
                than admitting ignorance. My job as an engineer is to construct the
                geometric, lexical, and verification guardrails that keep them grounded
                in reality.
              </p>
            )}
          </div>

          <div className="border-b border-foreground/30 pb-7">
            <p className="font-mono text-xs font-semibold text-primary uppercase">
              {t("manifesto.p2_title")}
            </p>
            {locale === "fr" ? (
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
            ) : (
              <p className="mt-3 text-base leading-7 text-foreground/90">
                In almost every AI portfolio, everything miraculously works at 99%.
                In real-world engineering, that is untrue. When I evaluated tactical
                formation classification on broadcast cameras (<strong>EXP-21</strong>),
                it collapsed to a <strong>0.00% Macro F1</strong>. When I tested
                discrete pressure thresholds (<strong>EXP-23</strong>), labels flickered
                on every frame. Documenting these{" "}
                <span className="underline decoration-primary decoration-2">
                  negative results
                </span>{" "}
                candidly in <strong>VISION-BALLING</strong> is what separates
                disciplined engineering from demo theatre.
              </p>
            )}
          </div>

          <div>
            <p className="font-mono text-xs font-semibold text-foreground uppercase">
              {t("manifesto.p3_title")}
            </p>
            <p className="mt-3 text-base leading-7 text-foreground/90">
              {t("manifesto.p3_text")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
