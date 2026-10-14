"use client";

import React, { createContext, useContext, useEffect, useSyncExternalStore } from "react";

export type Locale = "fr" | "en";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (key: string) => string;
}

export const translations = {
  fr: {
    // Nav
    "nav.presentation": "Ouverture",
    "nav.projets": "L’Établi",
    "nav.expertise": "Sous le capot",
    "nav.solutions": "Manifeste",
    "nav.contact": "Colophon",
    "nav.contact_cta": "Me contacter",
    "nav.contact_short": "Contact",
    "nav.mob_home": "Accueil",
    "nav.mob_projects": "Projets",
    "nav.mob_profile": "Profil",
    "nav.mob_contact": "Contact",
    "nav.mob_menu": "Menu",
    "nav.mob_close": "Fermer",
    "nav.lang_toggle": "Langue (FR / EN)",
    "nav.quick_title": "Index du cahier",
    "nav.quick_sub": "Chapitres et dossiers expérimentaux.",
    "nav.quick_close": "Fermer la navigation rapide",
    "nav.dossier_vb": "Dossier VISION-BALLING (v0.9.0-rc1)",
    "nav.dossier_fia": "Archive Football Intelligence Assistant",

    // Masthead & Hero
    "hero.masthead_issue": "CAHIER N° 01",
    "hero.masthead_sub": "LINGUISTIQUE (SORBONNE) × IA & VISION (PLURITAL)",
    "hero.location": "PARIS / ASNIÈRES",
    "hero.margin_tag": "[NOTE DE MARGE — 01]",
    "hero.margin_text":
      "J’ai commencé par étudier la syntaxe, l’italien et l’analyse du discours à la Sorbonne avant de plonger dans le NLP, le RAG et la vision par ordinateur en Master PluriTAL.",
    "hero.obsession_title": "OBSESSION ACTUELLE :",
    "hero.obsession_text":
      "Pourquoi un modèle de langage hallucine-t-il sur un match de foot, et comment l’ancrer de force dans la physique du terrain (105 m × 68 m) ?",
    "hero.stamp_rigor": "RIGUEUR FACTUELLE",
    "hero.stamp_field": "TERRAIN & PREUVE",
    "hero.kicker": "Ni agence, ni prompt engineer magique — ingénierie du langage & de l’image",
    "hero.title_part1": "De la grammaire",
    "hero.title_italian": "italienne",
    "hero.title_part2": "à la géométrie d’un",
    "hero.title_pressing": "contre-pressing",
    "hero.statement":
      "Je m’appelle Adriano Gallo. Ce qui me fait vibrer, c’est l’endroit exact où les mots rencontrent le réel : transformer une vidéo brute de match en coordonnées métriques, fouiller un corpus sans perdre une nuance technique, et obliger une IA à prouver chaque phrase par un fait horodaté — ou à se taire.",
    "hero.below_desc":
      "→ Ci-dessous : mon établi VISION-BALLING (v0.9.0-rc1) avec scrubber vidéo temps réel, mes notes d’expériences (y compris les modèles que j’ai jetés à la poubelle), Football Intelligence et Evalia.",
    "hero.cta_projects": "Manipuler l’établi VISION-BALLING",
    "hero.cta_case_study": "Lire le cahier d’expériences (EXP-01→26)",
    "hero.specimen_fig": "FIG. 00 — CAPTURE BRUTE SNMOT-068",
    "hero.specimen_rec": "● REC 25 FPS",
    "hero.specimen_quote":
      "« J’ai refusé que le LLM résume le match au hasard : chaque ligne du rapport pointe vers une frame précise. »",
    "hero.specimen_badge": "0% HALLU",

    // Projects Section
    "projects.section_tag": "CHAPITRE I — LE TERRAIN COMME LABORATOIRE",
    "projects.title_pre": "Comment empêcher une IA de",
    "projects.title_accent": "raconter n’importe quoi",
    "projects.title_post": "sur un match de foot ?",
    "projects.note_tag": "[POINT DE DÉPART]",
    "projects.note_text":
      "Demande à un LLM d’analyser une séquence vidéo de football : il va t’inventer un « 4-3-3 fluide » avec un aplomb parfait. J’ai construit VISION-BALLING pour briser cette boîte noire.",
    "projects.vb_badge": "PIÈCE MAÎTRESSE · v0.9.0-rc1",
    "projects.vb_subbadge": "26 protocoles expérimentaux scellés",
    "projects.vb_story":
      "Le principe est radical : le modèle de langage n’a pas le droit de deviner. On part du flux vidéo MP4, on détecte chaque joueur et le ballon à haute résolution (RF-DETR Small @ 960px, mAP50 de 0.865), on maintient les identités malgré les occultations (BoT-SORT + PRTReID déclenché uniquement quand deux joueurs se croisent, ce qui coupe 68 % des calculs GPU), puis on projette tout par homographie (PnLCalib, 3.2 px d’erreur) sur un vrai terrain de 105 m × 68 m.",
    "projects.failure_title": "✗ CE QUI A FOIRÉ (ET QUE J’AI GARDÉ DANS LE RAPPORT) :",
    "projects.failure_text":
      "Dans l’expérience EXP-21, j’ai voulu détecter automatiquement les formations (4-3-3, 4-4-2). Score sur de vraies caméras TV : 0.00 % de Macro F1. La caméra broadcast coupe toujours 30 à 45 % des joueurs hors champ ! Au lieu de maquiller la métrique, j’ai réfuté l’hypothèse et remplacé les formations fixes par de la géométrie continue (hauteur de ligne en mètres, surface d’enveloppe convexe en m², et indice vectoriel PressureIndex ∈ [0, 1]).",
    "projects.vb_stack_engine":
      "MOTEUR : Python 3.11, PyTorch, RF-DETR, YOLO11, BoT-SORT, PRTReID, PnLCalib (isolé en sous-processus GPL-2.0), K-Means CIE-Lab (96.2 %)",
    "projects.vb_stack_rag":
      "ANCRAGE RAG : MatchEvidenceStore + Qdrant + BM25 + FlashRank — 100 % d’affirmations sourcées / 0 % d’hallucination sur 76 cas",
    "projects.cta_dossier": "Ouvrir le dossier complet (EXP-01 → 26)",
    "projects.cta_github": "Code source GitHub ↗",

    // Secondary Projects
    "projects.fia_archive": "ARCHIVE N° 02",
    "projects.fia_title": "Football Intelligence Assistant",
    "projects.fia_subtitle": "LA GENÈSE DU MOTEUR RAG HYBRIDE",
    "projects.fia_p1":
      "Avant de brancher de la vidéo, j’ai voulu construire un assistant capable de fouiller une vraie bibliothèque tactique sans noyer les termes précis. Un RAG purement vectoriel lisse tout : si tu cherches « sortie Lavolpiana » ou « pressing orienté demi-espace », l’embedding seul passe à côté.",
    "projects.fia_p2":
      "J’ai donc écrit un retriever hybride 70/30 (Qdrant en dense + un BM25 codé en Python pour le lexical), branché un Parent Document Store sous SQLite (on cherche sur de petits fragments, mais on remonte la page complète au modèle) et ajouté un re-ranker cross-encoder FlashRank (ms-marco-MiniLM-L-6-v2) avec export de rapports PDF sous ReportLab.",
    "projects.fia_cta": "Lire l’étude d’architecture RAG",

    "projects.evalia_archive": "ARCHIVE N° 03",
    "projects.evalia_title": "Evalia",
    "projects.evalia_subtitle": "TORTURER LES MODÈLES EN CI/CD",
    "projects.evalia_p1":
      "Comment savoir si une modification de prompt ou de chunking dégrade ton RAG ? Plutôt que de tester 3 questions à la main, j’ai développé Evalia : un générateur qui transforme des PDF/Markdown bruts en questions pièges multi-sauts (Evol-Instruct), décompose chaque réponse en affirmations atomiques (LLM-as-a-Judge) et bloque la Pull Request sur GitHub Actions si la fidélité chute.",
    "projects.evalia_stack":
      "Sous le capot : FastAPI Async · SQLAlchemy · Décomposition atomique Faithfulness / Cosine Answer Relevance · GitHub Actions CLI",
    "projects.evalia_cta": "Explorer Evalia sur GitHub (github.com/GAdrianK/Evalia) ↗",

    // Workbench / Scrubber
    "workbench.live": "ÉTABLI LIVE",
    "workbench.sequence": "SÉQUENCE SOCCERNET SNMOT-068",
    "workbench.frame": "FRAME",
    "workbench.claims_stamp": "100% CLAIMS SOURCÉS",
    "workbench.play": "Lire",
    "workbench.pause": "Pause",
    "workbench.rewind": "Revenir au début des événements",
    "workbench.scrubber_label": "Scrubber la séquence vidéo de 0 à 14 secondes",
    "workbench.pins_hint": "↓ Cliquer sur un moment clé ou déplacer le curseur pour inspecter la preuve :",
    "workbench.radar_title": "PROJECTION SOL 105m × 68m (PnLCalib)",
    "workbench.pressure_peak": "PressureIndex Pic :",
    "workbench.reproj_err": "Reproj err : 3.2 px",
    "workbench.rag_label": "PHRASE GÉNÉRÉE PAR LE RAG ANCRÉ :",
    "workbench.adriano_note": "[ANNOTATION D’ADRIANO]",

    // FIA Preview
    "fia_prev.fig": "FIG. 02 — ARCHITECTURE HYBRIDE (FOOTBALL INTELLIGENCE ASSISTANT)",
    "fia_prev.stamp": "SOCLE RAG HYBRIDE",
    "fia_prev.q_label": "1. Question brute d’un coach → Query Rewriter",
    "fia_prev.q_text": "« Comment fixer le demi-espace adverse avec une sortie à trois (Lavolpiana) face à un pressing à deux pointes ? »",
    "fia_prev.dense_title": "70 % Dense (Qdrant)",
    "fia_prev.dense_desc": "Capture les concepts tactiques proches par similarité cosinus sur les chunks enfants.",
    "fia_prev.bm25_title": "30 % Lexical (BM25 Python)",
    "fia_prev.bm25_desc": "Ne rate jamais les mots rares (« Lavolpiana », « demi-espace », noms de coachs) que les embeddings lissent.",
    "fia_prev.parent_store":
      "→ PARENT DOCUMENT STORE (SQLite) + FLASHRANK : Au lieu de donner un mini-fragment coupé au LLM, on remonte le chapitre parent entier depuis SQLite et on le reclasse avec un Cross-Encoder (ms-marco-MiniLM-L-6-v2).",
    "fia_prev.why_title": "[POURQUOI CE PROJET A TOUT DÉCLENCHÉ]",
    "fia_prev.why_text":
      "C’est en construisant ce premier RAG que j’ai compris une chose : un RAG sur de la théorie tactique, c’est bien. Mais si tu lui demandes ce qui s’est passé à la 13e seconde d’un vrai match sans capteurs vidéo, il invente. C’est pour ça que j’ai ensuite créé VISION-BALLING.",
    "fia_prev.briques_title": "Briques livrées dans le dépôt :",
    "fia_prev.briques_text": "FastAPI asynchrone · Qdrant · BM25 from scratch · SQLite Parent Store · FlashRank · Export PDF ReportLab · Tests pytest",

    // Expertise
    "expertise.tag": "CHAPITRE II — ANATOMIE TECHNIQUE",
    "expertise.title_pre": "Ce que je construis",
    "expertise.title_accent": "vraiment",
    "expertise.title_post": "sous le capot.",
    "expertise.subtitle":
      "Pas d’arbre de Noël de compétences copiées-collées : voici les cinq couches d’ingénierie qui tournent réellement dans mes dépôts, avec ce que chacune résout — et ses compromis.",
    "expertise.field_note": "[NOTE DE TERRAIN]",
    "expertise.tools_used": "Outils utilisés :",
    "expertise.open": "[OUVERT −]",
    "expertise.read": "[LIRE LA NOTE +]",

    // Manifeste / Solutions
    "manifesto.tag": "CHAPITRE III — MANIFESTE D’ATELIER",
    "manifesto.title_pre": "Pourquoi je me méfie des",
    "manifesto.title_accent": "phrases trop lisses",
    "manifesto.title_post": ".",
    "manifesto.golden_rule": "RÈGLE D’OR DE MES DÉPÔTS :",
    "manifesto.quote": "« Si le système n’a pas la preuve mesurée sous les yeux, il n’a pas le droit d’écrire l’adjectif. »",
    "manifesto.quote_sub": "— Appliqué sur les 76 scénarios d’audit de VISION-BALLING (EXP-26)",
    "manifesto.p1_title": "I. CE QUE LA LINGUISTIQUE M’A APPRIS SUR L’IA",
    "manifesto.p1_text":
      "Quand on passe trois ans à analyser la grammaire italienne, la traduction et la structure du discours à la Sorbonne avant de faire du NLP et du Machine Learning, on ne voit pas les LLM comme de la magie. On les voit pour ce qu’ils sont : de formidables machines probabilistes qui préfèrent produire une phrase vraisemblable mais fausse plutôt que d’avouer leur ignorance. Mon travail d’ingénieur consiste à construire les garde-fous géométriques, lexicaux et logiques qui les ramènent sur terre.",
    "manifesto.p2_title": "II. PUBLIER LES ÉCHECS AUSSI FORT QUE LES RÉUSSITES",
    "manifesto.p2_text":
      "Dans presque tous les portfolios IA, tout marche à 99 %. Dans la vraie vie, c’est faux. Quand j’ai testé la classification de formations tactiques sur caméra broadcast (EXP-21), elle s’est effondrée à 0.00 % de F1. Quand j’ai testé des seuils discrets de pression (EXP-23), ça clignotait à chaque frame. Laisser ces résultats négatifs en pleine lumière dans la documentation de VISION-BALLING, c’est ce qui sépare l’ingénierie sérieuse d’une démo truquée.",
    "manifesto.p3_title": "III. LE JEU COLLECTIF COMME TERRAIN D’EXPÉRIMENTATION",
    "manifesto.p3_text":
      "Pourquoi le football ? Parce qu’un match est le pire cauchemar possible pour une IA : 22 joueurs qui s’occultent, une caméra TV qui bouge et coupe la moitié du terrain, un ballon qui fuse, et un vocabulaire tactique ultra-codifié. Si une architecture multimodale (Vision + Géométrie 2D + RAG Hybride) tient debout là-dessus sans halluciner, elle peut tenir debout sur n’importe quel problème industriel complexe.",

    // Journey
    "journey.tag": "CHAPITRE IV — TRAJECTOIRE & INSPIRATIONS",
    "journey.title_pre": "Un parcours",
    "journey.title_accent": "hybride",
    "journey.title_post": ", assumé de A à Z.",
    "journey.languages_title": "LANGUES PARLÉES AU QUOTIDIEN :",
    "journey.languages_list": "Français (natif) · Italien (courant) · Anglais (avancé) · Portugais (intermédiaire)",
    "journey.looking_title": "CE QUE JE CHERCHE POUR LA SUITE :",
    "journey.looking_text":
      "Une équipe exigeante (stage de fin d’études / alternance / ingénierie IA, NLP ou Vision) où l’on construit de vrais systèmes, où l’on mesure ce qu’on déploie, et où la curiosité est bienvenue.",

    // Colophon / Contact
    "contact.tag": "COLOPHON & DERNIÈRE PAGE — LIGNE DIRECTE",
    "contact.subtag": "ZÉRO FORMULAIRE SAAS · CONTACT HUMAIN",
    "contact.title_pre": "On se parle",
    "contact.title_accent": "sans filtre",
    "contact.title_post": " ?",
    "contact.desc":
      "Pas de formulaire à 6 champs qui part dans le vide. Choisis une amorce ci-dessous pour ouvrir directement ta messagerie, ou écris-moi une ligne à",
    "contact.btn_direct": "Écrire un mail direct",
    "contact.btn_copy": "Copier",
    "contact.btn_copied": "Adresse copiée",
    "contact.quick_openers_label": "↓ Amorces rapides (1 clic ouvre ton client mail) :",
    "contact.col_author": "AUTEUR & ÉDITION",
    "contact.col_author_val": "Adriano Gallo — Paris / Asnières-sur-Seine",
    "contact.col_edu": "FORMATION",
    "contact.col_top": "↑ Haut du cahier",

    // Quick Opener Presets
    "opener.1.label": "Parler d’une alternance / d’un poste IA & NLP",
    "opener.1.subject": "Opportunité IA / NLP — Adriano Gallo",
    "opener.1.body": "Bonjour Adriano,\n\nJ’ai parcouru ton cahier d’ingénierie et ton travail sur VISION-BALLING. Échangeons autour d’une opportunité au sein de notre équipe :",
    "opener.2.label": "Poser une question technique sur VISION-BALLING",
    "opener.2.subject": "Question technique — VISION-BALLING (v0.9.0-rc1)",
    "opener.2.body": "Bonjour Adriano,\n\nJ’ai testé l’établi SNMOT-068 sur ton site et j’aimerais échanger sur l’architecture (Vision / Calibration 2D / Grounded RAG) :",
    "opener.3.label": "Discuter foot, tactique & modèles de langage",
    "opener.3.subject": "Foot, tactique & IA",
    "opener.3.body": "Salut Adriano,\n\nTon approche sur la géométrie continue et le zéro-hallucination m’a parlé. Prenons quelques minutes pour échanger :",
  },
  en: {
    // Nav
    "nav.presentation": "Opening",
    "nav.projets": "The Workbench",
    "nav.expertise": "Under the Hood",
    "nav.solutions": "Manifesto",
    "nav.contact": "Colophon",
    "nav.contact_cta": "Get in Touch",
    "nav.contact_short": "Contact",
    "nav.mob_home": "Home",
    "nav.mob_projects": "Projects",
    "nav.mob_profile": "Profile",
    "nav.mob_contact": "Contact",
    "nav.mob_menu": "Menu",
    "nav.mob_close": "Close",
    "nav.lang_toggle": "Language (FR / EN)",
    "nav.quick_title": "Notebook Index",
    "nav.quick_sub": "Chapters and experimental records.",
    "nav.quick_close": "Close quick navigation",
    "nav.dossier_vb": "VISION-BALLING Report (v0.9.0-rc1)",
    "nav.dossier_fia": "Football Intelligence Assistant Archive",

    // Masthead & Hero
    "hero.masthead_issue": "NOTEBOOK N° 01",
    "hero.masthead_sub": "LINGUISTICS (SORBONNE) × AI & VISION (PLURITAL)",
    "hero.location": "PARIS / ASNIÈRES",
    "hero.margin_tag": "[MARGIN NOTE — 01]",
    "hero.margin_text":
      "I started out studying syntax, Italian and discourse analysis at the Sorbonne before diving into NLP, RAG, and computer vision in the PluriTAL Master's program.",
    "hero.obsession_title": "CURRENT OBSESSION:",
    "hero.obsession_text":
      "Why does a language model hallucinate when analyzing a soccer match, and how can we anchor it by force into pitch physics (105 m × 68 m)?",
    "hero.stamp_rigor": "FACTUAL RIGOR",
    "hero.stamp_field": "PITCH & EVIDENCE",
    "hero.kicker": "Neither agency nor prompt magic — language & vision systems engineering",
    "hero.title_part1": "From Italian",
    "hero.title_italian": "grammar",
    "hero.title_part2": "to the geometry of a",
    "hero.title_pressing": "counter-press",
    "hero.statement":
      "My name is Adriano Gallo. What drives me is the exact spot where words meet reality: converting raw broadcast video into metric coordinates, querying domain corpora without smoothing away subtle technical vocabulary, and forcing AI to prove every single claim with a timestamped fact — or keep quiet.",
    "hero.below_desc":
      "→ Below: my live VISION-BALLING workbench (v0.9.0-rc1) with real-time video scrubbing, experimental lab notes (including the models I threw away), Football Intelligence and Evalia.",
    "hero.cta_projects": "Launch VISION-BALLING Workbench",
    "hero.cta_case_study": "Read the Experimental Log (EXP-01→26)",
    "hero.specimen_fig": "FIG. 00 — RAW SNMOT-068 CAPTURE",
    "hero.specimen_rec": "● REC 25 FPS",
    "hero.specimen_quote":
      "“I refused to let the LLM summarize matches at random: every sentence in the report points to a verified frame.”",
    "hero.specimen_badge": "0% HALLU",

    // Projects Section
    "projects.section_tag": "CHAPTER I — THE PITCH AS A LAB",
    "projects.title_pre": "How do you stop an AI from",
    "projects.title_accent": "hallucinating nonsense",
    "projects.title_post": "about a soccer match?",
    "projects.note_tag": "[STARTING POINT]",
    "projects.note_text":
      "Ask an LLM to analyze a football match broadcast: it will invent a “fluid 4-3-3” with complete confidence. I built VISION-BALLING to break that black box.",
    "projects.vb_badge": "FLAGSHIP WORK · v0.9.0-rc1",
    "projects.vb_subbadge": "26 sealed experimental protocols",
    "projects.vb_story":
      "The underlying rule is uncompromising: the language model is not allowed to guess. We take raw broadcast MP4 video, detect every player and ball at high resolution (RF-DETR Small @ 960px, 0.865 mAP50), maintain track continuity through occlusions (BoT-SORT + PRTReID triggered only during bounding box intersections, slashing 68% of GPU compute), then project everything via homography (PnLCalib, 3.2 px reprojection error) onto an authoritative 105 m × 68 m metric pitch.",
    "projects.failure_title": "✗ WHAT FAILED (AND WHY I KEPT IT IN THE REPORT):",
    "projects.failure_text":
      "In experiment EXP-21, I tried classifying formations (4-3-3, 4-4-2) automatically. Score on real broadcast cameras: 0.00% Macro F1. Broadcast framing consistently truncates 30 to 45% of off-screen players! Instead of massaging the metric, I refuted the hypothesis and replaced rigid formation labels with continuous geometry (defensive line height in meters, convex hull area in m², and vector PressureIndex ∈ [0, 1]).",
    "projects.vb_stack_engine":
      "ENGINE: Python 3.11, PyTorch, RF-DETR, YOLO11, BoT-SORT, PRTReID, PnLCalib (isolated in GPL-2.0 subprocess), CIE-Lab K-Means (96.2%)",
    "projects.vb_stack_rag":
      "GROUNDED RAG: MatchEvidenceStore + Qdrant + BM25 + FlashRank — 100% supported claims / 0% hallucination across 76 benchmark scenarios",
    "projects.cta_dossier": "Open Full Research Report (EXP-01 → 26)",
    "projects.cta_github": "GitHub Source Code ↗",

    // Secondary Projects
    "projects.fia_archive": "ARCHIVE N° 02",
    "projects.fia_title": "Football Intelligence Assistant",
    "projects.fia_subtitle": "GENESIS OF THE HYBRID RAG ENGINE",
    "projects.fia_p1":
      "Before connecting video feeds, I wanted to build an assistant capable of querying tactical literature without drowning precise football concepts. Naive vector retrieval flattens nuance: if you look for “Lavolpiana build-up” or “half-space oriented pressing”, embeddings alone miss the exact technical signal.",
    "projects.fia_p2":
      "I engineered a 70/30 hybrid retriever (dense Qdrant + custom Python BM25 for lexical precision), a SQLite Parent Document Store (indexing child chunks while resolving full parent pages for the LLM), and a FlashRank cross-encoder re-ranker (ms-marco-MiniLM-L-6-v2) with automated ReportLab PDF dossier generation.",
    "projects.fia_cta": "Read the RAG Architecture Study",

    "projects.evalia_archive": "ARCHIVE N° 03",
    "projects.evalia_title": "Evalia",
    "projects.evalia_subtitle": "TORTURE-TESTING RAG SYSTEMS IN CI/CD",
    "projects.evalia_p1":
      "How can you be certain a prompt or chunking tweak didn't secretly break your RAG? Rather than manually sanity-checking 3 queries, I built Evalia: a platform converting raw PDFs/Markdown into complex multi-hop adversarial test suites (Evol-Instruct), decomposing outputs into atomic claims (LLM-as-a-Judge), and blocking PR merges on GitHub Actions whenever faithfulness drops.",
    "projects.evalia_stack":
      "Under the hood: Async FastAPI · SQLAlchemy · Atomic Claim Decomposition (Faithfulness / Cosine Relevance) · GitHub Actions CLI Runner",
    "projects.evalia_cta": "Explore Evalia on GitHub (github.com/GAdrianK/Evalia) ↗",

    // Workbench / Scrubber
    "workbench.live": "LIVE WORKBENCH",
    "workbench.sequence": "SOCCERNET SNMOT-068 SEQUENCE",
    "workbench.frame": "FRAME",
    "workbench.claims_stamp": "100% SOURCED CLAIMS",
    "workbench.play": "Play",
    "workbench.pause": "Pause",
    "workbench.rewind": "Back to event start",
    "workbench.scrubber_label": "Scrub video sequence from 0 to 14 seconds",
    "workbench.pins_hint": "↓ Click a timestamp pin or drag the slider to inspect evidence:",
    "workbench.radar_title": "105m × 68m GROUND PROJECTION (PnLCalib)",
    "workbench.pressure_peak": "Peak PressureIndex:",
    "workbench.reproj_err": "Reproj err: 3.2 px",
    "workbench.rag_label": "GROUNDED RAG GENERATED CLAIM:",
    "workbench.adriano_note": "[ADRIANO’S LAB NOTE]",

    // FIA Preview
    "fia_prev.fig": "FIG. 02 — HYBRID ARCHITECTURE (FOOTBALL INTELLIGENCE ASSISTANT)",
    "fia_prev.stamp": "HYBRID RAG CORE",
    "fia_prev.q_label": "1. Coach Raw Query → Query Rewriter",
    "fia_prev.q_text": "“How do you isolate the opponent’s half-space using a 3-man build-up (Lavolpiana) against a two-striker press?”",
    "fia_prev.dense_title": "70% Dense (Qdrant)",
    "fia_prev.dense_desc": "Captures conceptual tactical proximity via cosine similarity over child chunks.",
    "fia_prev.bm25_title": "30% Lexical (Python BM25)",
    "fia_prev.bm25_desc": "Never misses exact domain terms (“Lavolpiana”, “half-space”, coach names) that embeddings dilute.",
    "fia_prev.parent_store":
      "→ PARENT DOCUMENT STORE (SQLite) + FLASHRANK: Instead of handing fragmented snippets to the LLM, we resolve the entire parent section from SQLite and re-rank candidate chunks with a lightweight Cross-Encoder (ms-marco-MiniLM-L-6-v2).",
    "fia_prev.why_title": "[WHY THIS PROJECT TRIGGERED EVERYTHING]",
    "fia_prev.why_text":
      "Building this first RAG taught me a fundamental lesson: theoretical tactical literature is helpful, but if you ask what happened at the 13th second of an actual match without video telemetry, it hallucinates. That realization directly sparked VISION-BALLING.",
    "fia_prev.briques_title": "Shipped in the repository:",
    "fia_prev.briques_text": "Async FastAPI · Qdrant · BM25 from scratch · SQLite Parent Store · FlashRank · ReportLab PDF Export · pytest suite",

    // Expertise
    "expertise.tag": "CHAPTER II — TECHNICAL ANATOMY",
    "expertise.title_pre": "What I",
    "expertise.title_accent": "actually build",
    "expertise.title_post": "under the hood.",
    "expertise.subtitle":
      "No copy-pasted resume buzzwords: here are the five engineering layers actively running in my repositories, detailing what each accomplishes — and its real trade-offs.",
    "expertise.field_note": "[FIELD NOTE]",
    "expertise.tools_used": "Tooling:",
    "expertise.open": "[OPEN −]",
    "expertise.read": "[READ NOTE +]",

    // Manifeste / Solutions
    "manifesto.tag": "CHAPTER III — WORKBENCH MANIFESTO",
    "manifesto.title_pre": "Why I distrust",
    "manifesto.title_accent": "overly polished claims",
    "manifesto.title_post": ".",
    "manifesto.golden_rule": "CARDINAL RULE OF MY CODEBASES:",
    "manifesto.quote": "“If the system does not have measured evidence before its eyes, it is forbidden from writing the adjective.”",
    "manifesto.quote_sub": "— Enforced across all 76 audit scenarios of VISION-BALLING (EXP-26)",
    "manifesto.p1_title": "I. WHAT LINGUISTICS TAUGHT ME ABOUT AI",
    "manifesto.p1_text":
      "Spending three years dissecting Italian grammar, translation, and discourse theory at the Sorbonne before pivoting to NLP and Machine Learning permanently immunizes you against treating LLMs as magic. You see them for what they are: remarkable probabilistic engines that prefer producing a plausible falsehood rather than admitting ignorance. My job as an engineer is to construct the geometric, lexical, and verification guardrails that keep them grounded in reality.",
    "manifesto.p2_title": "II. SHARING FAILURES AS LOUDLY AS SUCCESSES",
    "manifesto.p2_text":
      "In almost every AI portfolio, everything miraculously works at 99%. In real-world engineering, that is untrue. When I evaluated tactical formation classification on broadcast cameras (EXP-21), it collapsed to a 0.00% Macro F1. When I tested discrete pressure thresholds (EXP-23), labels flickered on every frame. Documenting these negative results candidly in VISION-BALLING is what separates disciplined engineering from demo theatre.",
    "manifesto.p3_title": "III. COLLECTIVE SPORT AS A HARDWARE LAB",
    "manifesto.p3_text":
      "Why soccer? Because a match is an AI's worst nightmare: 22 players constantly occluding one another, a moving TV camera slicing the field in half, a high-velocity ball, and hyper-codified tactical vocabulary. If a multimodal architecture (Computer Vision + 2D Metric Calibration + Grounded RAG) holds firm without hallucinating under these conditions, it can conquer any complex enterprise setting.",

    // Journey
    "journey.tag": "CHAPTER IV — TRAJECTORY & INSPIRATIONS",
    "journey.title_pre": "A proudly",
    "journey.title_accent": "hybrid path",
    "journey.title_post": ", from day one.",
    "journey.languages_title": "LANGUAGES SPOKEN DAILY:",
    "journey.languages_list": "French (native) · Italian (fluent) · English (advanced) · Portuguese (intermediate)",
    "journey.looking_title": "WHAT I AM LOOKING FOR NEXT:",
    "journey.looking_text":
      "A high-caliber engineering team (end-of-studies internship / work-study apprenticeship / full-time role in AI, NLP, or Computer Vision) dedicated to building verifiable systems with rigorous benchmarks.",

    // Colophon / Contact
    "contact.tag": "COLOPHON & BACK COVER — DIRECT LINE",
    "contact.subtag": "NO SAAS FORM · HUMAN CONTACT",
    "contact.title_pre": "Let’s talk",
    "contact.title_accent": "straight",
    "contact.title_post": "?",
    "contact.desc":
      "No 6-field form going into a void. Pick a starter below to launch your email client directly, or drop me a line at",
    "contact.btn_direct": "Compose Direct Email",
    "contact.btn_copy": "Copy",
    "contact.btn_copied": "Address copied",
    "contact.quick_openers_label": "↓ Quick starters (1 click opens your email app):",
    "contact.col_author": "AUTHOR & PRINT",
    "contact.col_author_val": "Adriano Gallo — Paris / Asnières-sur-Seine",
    "contact.col_edu": "EDUCATION",
    "contact.col_top": "↑ Top of notebook",

    // Quick Opener Presets
    "opener.1.label": "Discuss an AI & NLP position / apprenticeship",
    "opener.1.subject": "AI / NLP Opportunity — Adriano Gallo",
    "opener.1.body": "Hello Adriano,\n\nI reviewed your engineering notebook and your work on VISION-BALLING. Let's connect regarding an opportunity within our team:",
    "opener.2.label": "Ask a technical question about VISION-BALLING",
    "opener.2.subject": "Technical inquiry — VISION-BALLING (v0.9.0-rc1)",
    "opener.2.body": "Hello Adriano,\n\nI interacted with the SNMOT-068 workbench on your site and would like to discuss your architecture (Vision / 2D Calibration / Grounded RAG):",
    "opener.3.label": "Chat football, tactics & language models",
    "opener.3.subject": "Football, Tactics & AI",
    "opener.3.body": "Hi Adriano,\n\nYour perspective on continuous geometry and zero-hallucination resonated with me. Let's take a few minutes to chat:",
  },
} as const;

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("localechange", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("localechange", callback);
  };
}

function getSnapshot(): Locale {
  try {
    const saved = localStorage.getItem("preferred_locale");
    if (saved === "fr" || saved === "en") return saved;
    if (typeof navigator !== "undefined" && navigator.language.slice(0, 2) === "en") {
      return "en";
    }
  } catch {
    // ignore
  }
  return "fr";
}

function getServerSnapshot(): Locale {
  return "fr";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    try {
      localStorage.setItem("preferred_locale", newLocale);
      window.dispatchEvent(new Event("localechange"));
    } catch {
      // ignore
    }
  };

  const toggleLocale = () => {
    setLocale(locale === "fr" ? "en" : "fr");
  };

  const t = (key: string): string => {
    const dict = translations[locale] as Record<string, string>;
    if (dict && dict[key]) {
      return dict[key];
    }
    const fallback = translations.fr as Record<string, string>;
    return fallback[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
