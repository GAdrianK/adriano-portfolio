"use client";

import { AnimatePresence, motion } from "motion/react";
import { useRef, useState, type KeyboardEvent } from "react";
import { Check, Cpu } from "lucide-react";

import { expertiseAreas } from "@/content/expertise";

export function ExpertiseExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);
  const activeArea = expertiseAreas.at(activeIndex) ?? expertiseAreas[0]!;

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    const keys = ["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp", "Home", "End"];
    if (!keys.includes(event.key)) return;
    event.preventDefault();
    let nextIndex = activeIndex;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (activeIndex + 1) % expertiseAreas.length;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (activeIndex - 1 + expertiseAreas.length) % expertiseAreas.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = expertiseAreas.length - 1;
    setActiveIndex(nextIndex);
    tabsRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[nextIndex]?.focus();
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.68fr_1.32fr] lg:gap-8">
      <div ref={tabsRef} role="tablist" aria-label="Domaines d’expertise" aria-orientation="vertical" className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
        {expertiseAreas.map((area, index) => (
          <button
            key={area.id}
            id={`expertise-tab-${area.id}`}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-controls={`expertise-panel-${area.id}`}
            tabIndex={index === activeIndex ? 0 : -1}
            onClick={() => setActiveIndex(index)}
            onKeyDown={handleKeyDown}
            className="group relative min-w-fit overflow-hidden border-b border-border px-4 py-4 text-left transition-colors hover:text-foreground lg:w-full lg:px-5"
          >
            {index === activeIndex && <motion.span layoutId="expertise-active" className="absolute inset-y-3 left-0 w-px bg-primary" transition={{ type: "spring", stiffness: 420, damping: 38 }} />}
            <span className="relative flex items-center justify-between gap-8"><span className={index === activeIndex ? "text-foreground" : "text-muted-foreground"}>{area.label}</span><span className="hidden font-mono text-[0.625rem] text-muted-foreground lg:inline">0{index + 1}</span></span>
          </button>
        ))}
      </div>

      <div className="relative min-h-[27rem] overflow-hidden border border-border bg-surface p-6 sm:p-8 lg:p-10">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeArea.id}
            id={`expertise-panel-${activeArea.id}`}
            role="tabpanel"
            aria-labelledby={`expertise-tab-${activeArea.id}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
          >
            <div className="flex items-center gap-2 font-mono text-[0.6875rem] tracking-[0.14em] text-secondary uppercase"><Cpu className="size-4" aria-hidden="true" />{activeArea.label}</div>
            <h3 className="mt-6 max-w-2xl text-[clamp(1.75rem,3.5vw,3.5rem)] leading-[1.02] font-semibold tracking-[-0.045em]">{activeArea.title}</h3>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">{activeArea.description}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {activeArea.capabilities.map((capability) => <div key={capability} className="flex items-center gap-3 border-t border-border py-3.5 text-sm"><Check className="size-3.5 shrink-0 text-primary" aria-hidden="true" />{capability}</div>)}
            </div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-5">{activeArea.technologies.map((technology) => <span key={technology} className="font-mono text-[0.6875rem] text-primary">{technology}</span>)}</div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
