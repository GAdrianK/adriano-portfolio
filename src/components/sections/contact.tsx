import { Mail, MessageSquareText, Shapes } from "lucide-react";

import { GlassPanel } from "@/components/primitives/glass-panel";
import { ContactForm } from "@/components/sections/contact-form";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/content/site";

export function Contact() {
  return (
    <section id="contact" data-navigation-section className="scroll-mt-28 border-t border-border py-[var(--section-space)]" aria-labelledby="contact-title">
      <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
        <div>
          <SectionHeading index="06" eyebrow="Contact" title="Construisons quelque chose d’utile." description="Vous avez un corpus difficile à exploiter, un processus à automatiser ou une idée de produit IA ? Posons le problème clairement et avançons à partir de là." titleId="contact-title" />
          <dl className="mt-10 grid gap-5 text-sm">
            <div className="flex gap-3"><Mail className="mt-0.5 size-4 shrink-0 text-secondary" aria-hidden="true" /><div><dt className="text-foreground">Email</dt><dd className="mt-1"><a className="text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground" href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a></dd></div></div>
            <div className="flex gap-3"><Shapes className="mt-0.5 size-4 shrink-0 text-secondary" aria-hidden="true" /><div><dt className="text-foreground">Domaines</dt><dd className="mt-1 text-muted-foreground">LLM, RAG, agents IA et NLP</dd></div></div>
            <div className="flex gap-3"><MessageSquareText className="mt-0.5 size-4 shrink-0 text-secondary" aria-hidden="true" /><div><dt className="text-foreground">Premier échange</dt><dd className="mt-1 text-muted-foreground">Besoin, contraintes et prochaine étape concrète</dd></div></div>
          </dl>
        </div>
        <GlassPanel variant="elevated" padding="lg" radius="xl"><div className="mb-8"><p className="font-mono text-[0.6875rem] tracking-[0.14em] text-secondary uppercase">Démarrer une conversation</p><h3 className="mt-4 text-2xl font-semibold tracking-[-0.035em]">Parlez-moi de votre projet.</h3></div><ContactForm contactEmail={siteConfig.contactEmail} /></GlassPanel>
      </div>
      <footer className="mt-[var(--section-space)] flex flex-col gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} {siteConfig.name}. Conçu comme un produit, construit avec Next.js.</p><a href="#presentation" className="w-fit text-foreground transition-colors hover:text-secondary">Retour en haut ↑</a></footer>
    </section>
  );
}

