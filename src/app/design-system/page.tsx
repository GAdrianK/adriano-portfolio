import type { CSSProperties } from "react";

import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Layers3,
  Sparkles,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { MotionPreview } from "@/components/design-system/motion-preview";
import { GlassPanel } from "@/components/primitives/glass-panel";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Design system",
  description: "Fondations visuelles du portfolio d’Adriano Gallo.",
};

const colors = [
  { name: "Background", token: "--background", value: "Deep navy" },
  { name: "Surface", token: "--surface", value: "Raised navy" },
  { name: "Foreground", token: "--foreground", value: "Cold white" },
  { name: "Muted", token: "--muted-foreground", value: "Slate" },
  { name: "Primary", token: "--primary", value: "Electric blue" },
  { name: "Secondary", token: "--secondary", value: "Soft cyan" },
  { name: "Accent", token: "--accent", value: "Cold violet" },
  { name: "Success", token: "--success", value: "Positive state" },
] as const;

const spacing = [
  { name: "1", token: "--space-1", value: "4 px" },
  { name: "2", token: "--space-2", value: "8 px" },
  { name: "4", token: "--space-4", value: "16 px" },
  { name: "6", token: "--space-6", value: "24 px" },
  { name: "8", token: "--space-8", value: "32 px" },
  { name: "12", token: "--space-12", value: "48 px" },
  { name: "16", token: "--space-16", value: "64 px" },
] as const;

const radii = [
  { name: "XS", token: "--radius-xs", value: "8 px" },
  { name: "SM", token: "--radius-sm", value: "12 px" },
  { name: "MD", token: "--radius-md", value: "16 px" },
  { name: "LG", token: "--radius-lg", value: "24 px" },
  { name: "XL", token: "--radius-xl", value: "32 px" },
  { name: "Pill", token: "--radius-pill", value: "999 px" },
] as const;

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8 grid gap-3 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
      <div>
        <p className="font-mono text-xs font-medium tracking-[0.16em] text-secondary uppercase">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-heading font-semibold text-balance">{title}</h2>
      </div>
      <p className="max-w-2xl text-sm leading-6 text-muted-foreground lg:justify-self-end lg:text-base">
        {description}
      </p>
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <main id="main-content" className="page-shell py-8 sm:py-12 lg:py-16">
      <header className="mb-24 sm:mb-32">
        <Button asChild variant="text" size="sm">
          <Link href="/">
            <ArrowLeft aria-hidden="true" />
            Retour
          </Link>
        </Button>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-pill border border-border bg-white/5 px-3 py-1.5 font-mono text-xs tracking-[0.14em] text-secondary uppercase">
              <Sparkles aria-hidden="true" className="size-3.5" />
              Foundations 01
            </div>
            <h1 className="mt-7 text-display-lg font-semibold text-balance">
              Design system
            </h1>
          </div>
          <p className="max-w-xl text-body-lg text-pretty text-muted-foreground lg:justify-self-end">
            Une base sombre, lisible et technique. Les effets de verre restent
            réservés aux surfaces qui ont besoin de profondeur.
          </p>
        </div>
      </header>

      <div className="space-y-24 sm:space-y-32">
        <section aria-labelledby="colors-title">
          <SectionHeader
            eyebrow="01 · Couleurs"
            title="Palette sémantique"
            description="Les composants utilisent des rôles fonctionnels plutôt que des couleurs brutes, afin de préserver la cohérence et le contraste."
          />
          <h2 id="colors-title" className="sr-only">
            Couleurs
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {colors.map((color) => (
              <div
                key={color.token}
                className="rounded-lg border border-border bg-surface/60 p-3 shadow-soft"
              >
                <div
                  className="aspect-[1.6] rounded-md border border-white/10"
                  style={{ backgroundColor: `var(${color.token})` }}
                />
                <div className="mt-4 flex items-start justify-between gap-3 px-1 pb-1">
                  <div>
                    <p className="text-sm font-medium">{color.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {color.value}
                    </p>
                  </div>
                  <code className="font-mono text-[0.6875rem] text-secondary">
                    {color.token}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="type-title">
          <SectionHeader
            eyebrow="02 · Typographie"
            title="Hiérarchie éditoriale"
            description="Geist Sans porte les grandes compositions et l’interface ; Geist Mono est limité aux labels, statuts et métadonnées techniques."
          />
          <h2 id="type-title" className="sr-only">
            Typographie
          </h2>
          <GlassPanel padding="lg" radius="xl">
            <div className="relative z-10 space-y-10 divide-y divide-border">
              <div className="pb-10">
                <p className="mb-3 font-mono text-xs text-secondary">Display XL</p>
                <p className="text-display-xl font-semibold">Intelligence</p>
              </div>
              <div className="pb-10">
                <p className="mb-3 font-mono text-xs text-secondary">Display LG</p>
                <p className="text-display-lg font-semibold">Systèmes utiles.</p>
              </div>
              <div className="grid gap-6 pt-1 md:grid-cols-2">
                <div>
                  <p className="mb-3 font-mono text-xs text-secondary">Body large</p>
                  <p className="text-body-lg text-muted-foreground">
                    Connecter les modèles aux données, aux outils et aux besoins
                    métier.
                  </p>
                </div>
                <div>
                  <p className="mb-3 font-mono text-xs text-secondary">Mono label</p>
                  <p className="font-mono text-sm tracking-[0.14em] text-foreground uppercase">
                    LLM · RAG · Agents IA
                  </p>
                </div>
              </div>
            </div>
          </GlassPanel>
        </section>

        <section aria-labelledby="buttons-title">
          <SectionHeader
            eyebrow="03 · Actions"
            title="Boutons"
            description="Trois niveaux d’emphase : une action primaire lumineuse, une action secondaire en verre et une action texte discrète."
          />
          <h2 id="buttons-title" className="sr-only">
            Boutons
          </h2>
          <GlassPanel className="flex flex-wrap items-center gap-4" padding="lg">
            <Button size="lg">
              Action principale
              <ArrowUpRight aria-hidden="true" />
            </Button>
            <Button variant="glass" size="lg">
              Action secondaire
              <Layers3 aria-hidden="true" />
            </Button>
            <Button variant="text" size="lg">
              En savoir plus
              <ArrowUpRight aria-hidden="true" />
            </Button>
            <Button disabled size="lg">
              Indisponible
            </Button>
          </GlassPanel>
        </section>

        <section aria-labelledby="glass-title">
          <SectionHeader
            eyebrow="04 · Surfaces"
            title="Profondeur contrôlée"
            description="Chaque niveau de verre correspond à un usage précis. Les halos du fond rendent le flou visible sans compromettre la lisibilité."
          />
          <h2 id="glass-title" className="sr-only">
            Surfaces en verre
          </h2>
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              {
                variant: "subtle" as const,
                title: "Subtle",
                copy: "Contenus secondaires et regroupements légers.",
              },
              {
                variant: "elevated" as const,
                title: "Elevated",
                copy: "Projets vedettes et surfaces qui structurent une section.",
              },
              {
                variant: "navigation" as const,
                title: "Navigation",
                copy: "Éléments flottants, compacts et toujours lisibles.",
              },
            ].map((panel) => (
              <GlassPanel
                key={panel.title}
                variant={panel.variant}
                radius={panel.variant === "navigation" ? "xl" : "lg"}
                className="min-h-56"
              >
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex size-10 items-center justify-center rounded-md border border-border bg-white/5">
                    <Check aria-hidden="true" className="size-4 text-secondary" />
                  </div>
                  <div className="mt-12">
                    <h3 className="text-lg font-medium">{panel.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {panel.copy}
                    </p>
                  </div>
                </div>
              </GlassPanel>
            ))}
          </div>
        </section>

        <section aria-labelledby="spacing-title">
          <SectionHeader
            eyebrow="05 · Géométrie"
            title="Espacements et rayons"
            description="Une base de 4 px, des gouttières fluides et une gamme courte de rayons donnent un rythme cohérent du mobile au grand écran."
          />
          <h2 id="spacing-title" className="sr-only">
            Espacements et rayons
          </h2>
          <div className="grid gap-5 lg:grid-cols-2">
            <GlassPanel>
              <h3 className="relative z-10 text-lg font-medium">Spacing</h3>
              <div className="relative z-10 mt-7 space-y-4">
                {spacing.map((item) => (
                  <div
                    key={item.token}
                    className="grid grid-cols-[3rem_1fr_3rem] items-center gap-3"
                  >
                    <code className="font-mono text-xs text-secondary">
                      {item.name}
                    </code>
                    <div className="h-2 rounded-pill bg-white/5">
                      <div
                        className="h-full min-w-1 rounded-pill bg-primary"
                        style={{ width: `var(${item.token})` }}
                      />
                    </div>
                    <span className="text-right text-xs text-muted-foreground">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </GlassPanel>

            <GlassPanel>
              <h3 className="relative z-10 text-lg font-medium">Radius</h3>
              <div className="relative z-10 mt-7 grid grid-cols-3 gap-3">
                {radii.map((item) => (
                  <div key={item.token}>
                    <div
                      className="aspect-square border border-white/15 bg-white/5"
                      style={
                        { borderRadius: `var(${item.token})` } as CSSProperties
                      }
                    />
                    <p className="mt-2 text-xs font-medium">{item.name}</p>
                    <p className="text-[0.6875rem] text-muted-foreground">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>
        </section>

        <section aria-labelledby="elevation-title" className="pb-16 sm:pb-24">
          <SectionHeader
            eyebrow="06 · Comportement"
            title="Ombres et mouvement"
            description="Les ombres différencient les plans sans noircir l’interface. Les interactions principales restent comprises entre 160 et 220 ms."
          />
          <h2 id="elevation-title" className="sr-only">
            Ombres et mouvement
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Soft", className: "shadow-soft" },
              { name: "Glass", className: "shadow-glass" },
              { name: "Glow", className: "shadow-glow" },
            ].map((shadow) => (
              <div
                key={shadow.name}
                className={`flex min-h-36 items-end rounded-lg border border-border bg-surface/85 p-5 ${shadow.className}`}
              >
                <div>
                  <p className="font-mono text-xs tracking-[0.16em] text-secondary uppercase">
                    Shadow
                  </p>
                  <p className="mt-2 text-sm font-medium">{shadow.name}</p>
                </div>
              </div>
            ))}
            <MotionPreview />
          </div>
        </section>
      </div>
    </main>
  );
}
