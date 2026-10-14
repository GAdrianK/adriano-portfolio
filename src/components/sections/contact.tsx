"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site";
import { useLanguage } from "@/lib/i18n";

export function Contact() {
  const { locale, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    if (!siteConfig.contactEmail) return;
    void navigator.clipboard.writeText(siteConfig.contactEmail);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  }

  const quickOpeners = [
    {
      label: t("opener.1.label"),
      subject: t("opener.1.subject"),
      body: t("opener.1.body"),
    },
    {
      label: t("opener.2.label"),
      subject: t("opener.2.subject"),
      body: t("opener.2.body"),
    },
    {
      label: t("opener.3.label"),
      subject: t("opener.3.subject"),
      body: t("opener.3.body"),
    },
  ];

  return (
    <section
      id="contact"
      data-navigation-section
      className="scroll-mt-28 border-t-2 border-foreground py-[var(--section-space)]"
      aria-labelledby="contact-title"
    >
      {/* Magazine Colophon / Back Cover */}
      <div className="paper-sheet p-6 sm:p-10 lg:p-12">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-foreground pb-4 font-mono text-xs uppercase">
          <span className="font-semibold text-primary">
            {t("contact.tag")}
          </span>
          <span className="text-muted-foreground">
            {t("contact.subtag")}
          </span>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h2
              id="contact-title"
              className="font-editorial text-[clamp(2.8rem,6.5vw,5.8rem)] leading-[0.9] font-normal text-foreground"
            >
              {locale === "fr" ? (
                <>
                  On se parle{" "}
                  <span className="italic text-primary">sans filtre</span> ?
                </>
              ) : (
                <>
                  Let’s talk{" "}
                  <span className="italic text-primary">straight</span>?
                </>
              )}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-foreground/90 sm:text-lg">
              {t("contact.desc")}{" "}
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="font-mono text-sm font-semibold underline decoration-primary decoration-2 underline-offset-4 hover:text-primary"
              >
                {siteConfig.contactEmail}
              </a>
              .
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <a href={`mailto:${siteConfig.contactEmail}`}>
                  {t("contact.btn_direct")}
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
              <Button
                type="button"
                variant="glass"
                size="lg"
                onClick={copyEmail}
              >
                {copied ? (
                  <>
                    {t("contact.btn_copied")}
                    <Check aria-hidden="true" />
                  </>
                ) : (
                  <>
                    {t("contact.btn_copy")} {siteConfig.contactEmail}
                    <Copy aria-hidden="true" />
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Right 5 cols: 1-Click Conversation Starters */}
          <div className="space-y-3 lg:col-span-5">
            <p className="font-mono text-xs font-semibold text-muted-foreground uppercase">
              {t("contact.quick_openers_label")}
            </p>
            {quickOpeners.map((opener, idx) => {
              const href = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
                opener.subject,
              )}&body=${encodeURIComponent(opener.body)}`;
              return (
                <a
                  key={opener.label}
                  href={href}
                  className="group flex items-center justify-between gap-4 border border-foreground bg-background px-4 py-3.5 font-mono text-xs transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <span>
                    0{idx + 1}. {opener.label}
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Print Imprint */}
        <div className="mt-10 grid gap-4 border-t border-foreground/30 pt-6 font-mono text-xs sm:grid-cols-3">
          <div>
            <p className="text-muted-foreground uppercase">{t("contact.col_author")}</p>
            <p className="mt-1 font-semibold text-foreground">
              {t("contact.col_author_val")}
            </p>
          </div>
          <div>
            <p className="text-muted-foreground uppercase">{t("contact.col_edu")}</p>
            <p className="mt-1 text-foreground">{siteConfig.education}</p>
          </div>
          <div className="flex flex-wrap items-end justify-start gap-5 sm:justify-end">
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-primary underline-offset-4 hover:text-primary"
            >
              GitHub (@GAdrianK) ↗
            </a>
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-primary underline-offset-4 hover:text-primary"
            >
              LinkedIn ↗
            </a>
            <a
              href="#presentation"
              className="font-semibold text-foreground hover:text-primary"
            >
              {t("contact.col_top")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
