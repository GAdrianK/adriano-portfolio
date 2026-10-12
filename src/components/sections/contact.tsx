import { GlassPanel } from "@/components/primitives/glass-panel";
import { ContactForm } from "@/components/sections/contact-form";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/content/site";

export function Contact() {
  return (
    <section
      id="contact"
      data-navigation-section
      className="scroll-mt-28 border-t border-border py-[var(--section-space)]"
      aria-labelledby="contact-title"
    >
      <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <div>
          <SectionHeading
            index="06"
            eyebrow="Contact"
            title="Échangeons directement."
            description="Disponible pour échanger autour d’une opportunité en ingénierie IA / NLP / Vision, d’une alternance, d’un stage de fin d’études ou d’une question technique sur mes projets."
            titleId="contact-title"
          />

          <dl className="mt-10 divide-y divide-border border-y border-border text-sm">
            <div className="grid grid-cols-[7.5rem_1fr] gap-4 py-4">
              <dt className="font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
                Email
              </dt>
              <dd>
                <a
                  className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary"
                  href={`mailto:${siteConfig.contactEmail}`}
                >
                  {siteConfig.contactEmail}
                </a>
              </dd>
            </div>
            <div className="grid grid-cols-[7.5rem_1fr] gap-4 py-4">
              <dt className="font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
                Code & Dépôts
              </dt>
              <dd className="flex flex-wrap gap-5">
                <a
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary"
                >
                  github.com/GAdrianK ↗
                </a>
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary"
                >
                  LinkedIn ↗
                </a>
              </dd>
            </div>
            <div className="grid grid-cols-[7.5rem_1fr] gap-4 py-4">
              <dt className="font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
                Base
              </dt>
              <dd className="text-muted-foreground">{siteConfig.location}</dd>
            </div>
          </dl>
        </div>

        <GlassPanel variant="subtle" padding="lg" radius="md">
          <div className="mb-7 border-b border-border pb-4">
            <p className="font-mono text-xs tracking-[0.12em] text-primary uppercase">
              Message direct
            </p>
            <h3 className="mt-2 text-2xl font-medium tracking-[-0.035em]">
              Envoyer un message
            </h3>
          </div>
          <ContactForm contactEmail={siteConfig.contactEmail} />
        </GlassPanel>
      </div>

      <footer className="mt-[var(--section-space)] flex flex-col gap-4 border-t border-border pt-8 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name} · Master PluriTAL · Paris
        </p>
        <div className="flex items-center gap-6">
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href="#presentation"
            className="text-foreground transition-colors hover:text-primary"
          >
            Haut de page ↑
          </a>
        </div>
      </footer>
    </section>
  );
}
