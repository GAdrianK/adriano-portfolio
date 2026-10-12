"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

type ContactFormProps = { contactEmail: string | null };

export function ContactForm({ contactEmail }: ContactFormProps) {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!contactEmail) return;
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const sender = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "Échange technique / Opportunité");
    const message = String(data.get("message") ?? "");
    const body = [`Bonjour Adriano,`, "", message, "", `— ${name}`, sender].join("\n");
    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Ouverture de votre client mail avec le message pré-rempli.");
    window.location.assign(mailto);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-xs font-mono tracking-[0.06em] text-muted-foreground uppercase">
          Nom
          <input
            name="name"
            autoComplete="name"
            required
            className="h-11 rounded-sm border border-input bg-background px-3.5 font-sans text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/20"
            placeholder="Votre nom"
          />
        </label>
        <label className="grid gap-2 text-xs font-mono tracking-[0.06em] text-muted-foreground uppercase">
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            className="h-11 rounded-sm border border-input bg-background px-3.5 font-sans text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/20"
            placeholder="nom@organisation.fr"
          />
        </label>
      </div>
      <label className="grid gap-2 text-xs font-mono tracking-[0.06em] text-muted-foreground uppercase">
        Objet
        <select
          name="subject"
          defaultValue="Opportunité Ingénieur IA / NLP / Alternance"
          className="h-11 rounded-sm border border-input bg-background px-3.5 font-sans text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/20"
        >
          <option>Opportunité Ingénieur IA / NLP / Alternance</option>
          <option>Échange technique autour de VISION-BALLING</option>
          <option>Collaboration / Projet RAG ou Vision</option>
          <option>Autre demande</option>
        </select>
      </label>
      <label className="grid gap-2 text-xs font-mono tracking-[0.06em] text-muted-foreground uppercase">
        Message
        <textarea
          name="message"
          required
          rows={5}
          className="resize-y rounded-sm border border-input bg-background px-3.5 py-3 font-sans text-sm leading-6 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/20"
          placeholder="Votre message..."
        />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={!contactEmail} className="w-full sm:w-auto">
          Envoyer par email
          {contactEmail ? <ArrowUpRight aria-hidden="true" /> : <Mail aria-hidden="true" />}
        </Button>
        <p className="font-mono text-[0.6875rem] leading-5 text-muted-foreground" role="status" aria-live="polite">
          {status || (contactEmail ? "Ouverture directe dans votre messagerie." : "Canal direct en cours de configuration.")}
        </p>
      </div>
    </form>
  );
}
