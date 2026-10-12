"use client";

import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { useEffect, useRef, useState } from "react";

import {
  ArrowUpRight,
  House,
  LayoutGrid,
  Menu,
  MessageCircle,
  Search,
  UserRound,
  X,
  type LucideIcon,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";

import { GlassPanel } from "@/components/primitives/glass-panel";
import { Button } from "@/components/ui/button";
import {
  navigationItems,
  type SectionId,
} from "@/content/navigation";
import { useActiveSection } from "@/hooks/use-active-section";
import { useScrollState } from "@/hooks/use-scroll-state";
import { cn } from "@/lib/utils";

const desktopItems = navigationItems.filter((item) => item.id !== "contact");

const mobileItems: ReadonlyArray<{
  id: SectionId;
  label: string;
  icon: LucideIcon;
}> = [
  { id: "presentation", label: "Accueil", icon: House },
  { id: "projets", label: "Projets", icon: LayoutGrid },
  { id: "expertise", label: "Profil", icon: UserRound },
  { id: "contact", label: "Contact", icon: MessageCircle },
];

const navigationKeys = new Set(["ArrowLeft", "ArrowRight", "Home", "End"]);

function handleNavigationKeyDown(event: ReactKeyboardEvent<HTMLElement>) {
  if (!navigationKeys.has(event.key)) {
    return;
  }

  const controls = Array.from(
    event.currentTarget.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    ),
  ).filter((control) => control.tabIndex !== -1);
  const currentIndex = controls.indexOf(document.activeElement as HTMLElement);

  if (controls.length === 0 || currentIndex === -1) {
    return;
  }

  event.preventDefault();

  let nextIndex = currentIndex;

  if (event.key === "ArrowRight") {
    nextIndex = (currentIndex + 1) % controls.length;
  } else if (event.key === "ArrowLeft") {
    nextIndex = (currentIndex - 1 + controls.length) % controls.length;
  } else if (event.key === "Home") {
    nextIndex = 0;
  } else if (event.key === "End") {
    nextIndex = controls.length - 1;
  }

  controls[nextIndex]?.focus();
}

function ActiveIndicator({ layoutId }: { layoutId: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.span
      layoutId={layoutId}
      className="absolute right-3 bottom-0 left-3 h-px bg-primary"
      transition={{
        duration: shouldReduceMotion ? 0 : 0.22,
        ease: [0.22, 1, 0.36, 1],
      }}
      aria-hidden="true"
    />
  );
}

function DesktopNavbar({ activeSection, onOpenQuick }: { activeSection: SectionId; onOpenQuick: () => void }) {
  const isScrolled = useScrollState();
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.header
      className="pointer-events-none fixed top-5 left-1/2 z-50 hidden -translate-x-1/2 lg:block"
      initial={false}
      animate={{ y: isScrolled ? -6 : 0 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.22,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <GlassPanel
        variant="navigation"
        padding="none"
        radius="lg"
        className={cn(
          "pointer-events-auto flex items-center transition-[height,padding] ease-out",
          isScrolled ? "h-12 px-2 duration-200" : "h-14 px-2.5 duration-200",
        )}
      >
        <nav
          aria-label="Navigation principale"
          className="flex items-center gap-1"
          onKeyDown={handleNavigationKeyDown}
        >
          <a
            href="#presentation"
            className={cn(
              "group mr-1 flex shrink-0 items-center justify-center rounded-sm border border-border bg-transparent font-mono text-[0.6875rem] font-medium tracking-[0.08em] text-foreground transition-[width,height,background-color] duration-200 hover:bg-surface-strong focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/25",
              isScrolled ? "size-8" : "size-9",
            )}
            aria-label="Adriano Gallo — retour à la présentation"
          >
            AG
          </a>

          <div className="flex items-center">
            {desktopItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={cn(
                    "relative flex h-9 items-center rounded-sm px-3 text-xs font-medium tracking-[0.01em] outline-none transition-colors duration-200 focus-visible:ring-[3px] focus-visible:ring-ring/25 xl:px-3.5",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                  aria-current={isActive ? "location" : undefined}
                >
                  {isActive && (
                    <ActiveIndicator layoutId="desktop-active-section" />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </div>

          <button
            type="button"
            onClick={onOpenQuick}
            aria-label="Ouvrir la navigation rapide"
            aria-keyshortcuts="Control+K Meta+K"
            className="ml-1 hidden h-8 items-center gap-1.5 rounded-sm border border-border bg-transparent px-2.5 font-mono text-[0.625rem] text-muted-foreground outline-none transition-colors hover:bg-surface-strong hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/25 xl:flex"
          >
            <Search className="size-3" aria-hidden="true" />
            <span>⌘K</span>
          </button>

          <Button
            asChild
            size="sm"
            className={cn(
              "ml-1 transition-[height,padding,box-shadow,transform] duration-200",
              isScrolled ? "h-8 px-3.5" : "h-9 px-4",
              activeSection === "contact" && "outline outline-1 outline-primary/35",
            )}
          >
            <a
              href="#contact"
              aria-label="Me contacter"
              aria-current={activeSection === "contact" ? "location" : undefined}
            >
              <span>{isScrolled ? "Contact" : "Me contacter"}</span>
              <ArrowUpRight
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </Button>
        </nav>
      </GlassPanel>
    </motion.header>
  );
}

function QuickNavigation({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const frame = window.requestAnimationFrame(() => dialogRef.current?.querySelector<HTMLElement>("a[href]")?.focus());

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab" || !dialogRef.current) return;
      const controls = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'));
      const first = controls[0];
      const last = controls.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="fixed inset-0 z-[70] grid place-items-start bg-black/40 px-4 pt-[12svh] backdrop-blur-xs sm:place-items-center sm:pt-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.16 }} onPointerDown={onClose}>
          <motion.div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="quick-navigation-title" className="w-full max-w-lg" initial={{ opacity: 0, y: 10, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 6, scale: 0.98 }} transition={{ duration: 0.18 }} onPointerDown={(event) => event.stopPropagation()}>
            <GlassPanel variant="elevated" padding="sm" radius="md" className="mobile-menu-surface">
              <div className="relative z-10 flex items-center gap-3 border-b border-foreground/30 px-2 pb-4"><Search className="size-4 text-primary" aria-hidden="true" /><div><h2 id="quick-navigation-title" className="font-mono text-xs font-semibold uppercase">Index du cahier</h2><p className="mt-0.5 text-xs text-muted-foreground">Chapitres et dossiers expérimentaux.</p></div><button type="button" onClick={onClose} aria-label="Fermer la navigation rapide" className="ml-auto grid size-9 place-items-center rounded-xs text-muted-foreground outline-none hover:bg-surface-strong hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"><X className="size-4" aria-hidden="true" /></button></div>
              <nav aria-label="Navigation rapide" className="mt-2 grid gap-1 font-mono text-xs">
                {navigationItems.map((item, index) => <a key={item.id} href={`#${item.id}`} onClick={onClose} className="flex min-h-10 items-center justify-between rounded-xs px-3 text-foreground outline-none transition-colors hover:bg-surface-strong focus-visible:bg-surface-strong focus-visible:ring-2 focus-visible:ring-ring"><span>{item.label}</span><span className="text-[0.625rem] text-primary">0{index + 1}</span></a>)}
                <Link href="/projets/vision-balling" onClick={onClose} className="mt-1 flex min-h-10 items-center justify-between rounded-xs border-t border-foreground/25 px-3 pt-2 font-semibold text-primary outline-none transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:ring-2 focus-visible:ring-ring"><span>Dossier VISION-BALLING (v0.9.0-rc1)</span><ArrowUpRight className="size-4" aria-hidden="true" /></Link>
                <Link href="/projets/football-intelligence-assistant" onClick={onClose} className="flex min-h-10 items-center justify-between rounded-xs px-3 text-secondary outline-none transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:ring-2 focus-visible:ring-ring"><span>Archive Football Intelligence Assistant</span><ArrowUpRight className="size-4" aria-hidden="true" /></Link>
              </nav>
            </GlassPanel>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MobileDock({ activeSection }: { activeSection: SectionId }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dockRef = useRef<HTMLDivElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const focusFrame = window.requestAnimationFrame(() => {
      menuPanelRef.current?.querySelector<HTMLElement>("a[href]")?.focus();
    });

    const handlePointerDown = (event: PointerEvent) => {
      if (
        dockRef.current &&
        !dockRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div
      ref={dockRef}
      className="mobile-dock-safe fixed left-1/2 z-50 w-[calc(100%_-_1.5rem)] max-w-[27rem] -translate-x-1/2 lg:hidden"
    >
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuPanelRef}
            id="mobile-navigation-menu"
            className="absolute right-0 bottom-[calc(100%+0.75rem)] left-0"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.98 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <GlassPanel
              variant="elevated"
              padding="sm"
              radius="md"
              className="mobile-menu-surface"
              role="region"
              aria-label="Menu de navigation complet"
            >
              <div className="relative z-10 grid grid-cols-2 gap-1 font-mono text-xs">
                {navigationItems.map((item) => {
                  const isActive = activeSection === item.id;

                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={closeMenu}
                      className={cn(
                        "rounded-xs px-3 py-2.5 font-medium outline-none transition-colors duration-200 focus-visible:ring-[3px] focus-visible:ring-ring/35",
                        isActive
                          ? "bg-foreground text-background"
                          : "text-muted-foreground hover:bg-surface-strong hover:text-foreground",
                      )}
                      aria-current={isActive ? "location" : undefined}
                    >
                      {item.label}
                    </a>
                  );
                })}
                <Link
                  href="/projets/vision-balling"
                  onClick={closeMenu}
                  className="col-span-2 mt-1 flex items-center justify-between rounded-xs border border-foreground bg-background px-3 py-2.5 font-semibold text-primary outline-none transition-colors duration-200 hover:bg-surface-strong focus-visible:ring-[3px] focus-visible:ring-ring/35"
                >
                  Dossier VISION-BALLING
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </Link>
              </div>
            </GlassPanel>
          </motion.div>
        )}
      </AnimatePresence>

      <GlassPanel
        variant="navigation"
        padding="none"
        radius="lg"
        className="px-1.5 py-1.5"
      >
        <nav
          aria-label="Navigation mobile"
          className="relative z-10 grid grid-cols-5 items-center"
          onKeyDown={handleNavigationKeyDown}
        >
          {mobileItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={closeMenu}
                className={cn(
                  "relative flex min-h-14 min-w-0 flex-col items-center justify-center gap-1 rounded-lg px-1 text-[0.625rem] font-medium outline-none transition-colors duration-200 focus-visible:ring-[3px] focus-visible:ring-ring/35",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
                aria-current={isActive ? "location" : undefined}
              >
                {isActive && (
                  <ActiveIndicator layoutId="mobile-active-section" />
                )}
                <Icon aria-hidden="true" className="relative z-10 size-[1.125rem]" />
                <span className="relative z-10 max-w-full truncate">
                  {item.label}
                </span>
              </a>
            );
          })}

          <button
            ref={menuButtonRef}
            type="button"
            className={cn(
              "relative flex min-h-14 min-w-0 flex-col items-center justify-center gap-1 rounded-lg px-1 text-[0.625rem] font-medium text-muted-foreground outline-none transition-colors duration-200 hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/35",
              isMenuOpen && "bg-white/9 text-foreground",
            )}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu complet"}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? (
              <X aria-hidden="true" className="size-[1.125rem]" />
            ) : (
              <Menu aria-hidden="true" className="size-[1.125rem]" />
            )}
            <span>{isMenuOpen ? "Fermer" : "Menu"}</span>
          </button>
        </nav>
      </GlassPanel>
    </div>
  );
}

export function SiteNavigation() {
  const activeSection = useActiveSection();
  const [isQuickNavigationOpen, setIsQuickNavigationOpen] = useState(false);

  useEffect(() => {
    function handleShortcut(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsQuickNavigationOpen((current) => !current);
      }
    }
    document.addEventListener("keydown", handleShortcut);
    return () => document.removeEventListener("keydown", handleShortcut);
  }, []);

  return (
    <>
      <DesktopNavbar activeSection={activeSection} onOpenQuick={() => setIsQuickNavigationOpen(true)} />
      <MobileDock activeSection={activeSection} />
      <QuickNavigation isOpen={isQuickNavigationOpen} onClose={() => setIsQuickNavigationOpen(false)} />
    </>
  );
}
