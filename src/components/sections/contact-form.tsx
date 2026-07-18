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
    const subject = String(data.get("subject") ?? "Projet IA");
    const message = String(data.get("message") ?? "");
    const body = [`Bonjour Adriano,`, "", message, "", `— ${name}`, sender].join("\n");
    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Votre application email va s’ouvrir avec le message préparé.");
    window.location.assign(mailto);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium">Nom<input name="name" autoComplete="name" required className="h-12 rounded-md border border-input bg-white/[0.035] px-4 text-sm text-foreground outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-ring/20" placeholder="Votre nom" /></label>
        <label className="grid gap-2 text-sm font-medium">Email<input name="email" type="email" autoComplete="email" required className="h-12 rounded-md border border-input bg-white/[0.035] px-4 text-sm text-foreground outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-ring/20" placeholder="vous@entreprise.com" /></label>
      </div>
      <label className="grid gap-2 text-sm font-medium">Sujet<select name="subject" defaultValue="Prototype IA sur mesure" className="h-12 rounded-md border border-input bg-[#111827] px-4 text-sm text-foreground outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-ring/20"><option>Assistant documentaire intelligent</option><option>Automatisation avec agents IA</option><option>Prototype IA sur mesure</option><option>Autre projet IA</option></select></label>
      <label className="grid gap-2 text-sm font-medium">Contexte<textarea name="message" required rows={5} className="resize-y rounded-md border border-input bg-white/[0.035] px-4 py-3 text-sm leading-6 text-foreground outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-ring/20" placeholder="Le problème à résoudre, vos utilisateurs et le résultat attendu…" /></label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={!contactEmail} className="w-full sm:w-auto">Préparer le message{contactEmail ? <ArrowUpRight aria-hidden="true" /> : <Mail aria-hidden="true" />}</Button>
        <p className="text-xs leading-5 text-muted-foreground" role="status" aria-live="polite">
          {status || (contactEmail ? "Aucune donnée n’est stockée sur ce site." : "Canal direct en cours de configuration.")}
        </p>
      </div>
    </form>
  );
}
