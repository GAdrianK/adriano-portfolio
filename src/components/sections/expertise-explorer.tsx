"use client";

import { AnimatePresence, motion } from "motion/react";
import { useRef, useState, type KeyboardEvent } from "react";

import { expertiseAreas } from "@/content/expertise";

export function ExpertiseExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);
  const activeArea = expertiseAreas.at(activeIndex) ?? expertiseAreas[0]!;

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    const keys = [
      "ArrowRight",
      "ArrowDown",
      "ArrowLeft",
      "ArrowUp",
      "Home",
      "End",
    ];
    if (!keys.includes(event.key)) return;
    event.preventDefault();
    let nextIndex = activeIndex;
    if (event.key === "ArrowRight" || event.key === "ArrowDown")
      nextIndex = (activeIndex + 1) % expertiseAreas.length;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp")
      nextIndex =
        (activeIndex - 1 + expertiseAreas.length) % expertiseAreas.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = expertiseAreas.length - 1;
    setActiveIndex(nextIndex);
    tabsRef.current
      ?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
      [nextIndex]?.focus();
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.65fr_1.35fr] lg:gap-8">
      <div
        ref={tabsRef}
        role="tablist"
        aria-label="Domaines techniques"
        aria-orientation="vertical"
        className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-0 lg:overflow-visible lg:border-t lg:border-border lg:pb-0"
      >
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
            className="group relative min-w-fit overflow-hidden border border-border px-4 py-3.5 text-left transition-colors hover:text-foreground lg:w-full lg:border-x-0 lg:border-t-0 lg:px-5 lg:py-4"
          >
            {index === activeIndex && (
              <motion.span
                layoutId="expertise-active"
                className="absolute inset-y-0 left-0 w-0.5 bg-primary"
                transition={{ type: "spring", stiffness: 420, damping: 38 }}
              />
            )}
            <span className="relative flex items-center justify-between gap-6">
              <span
                className={
                  index === activeIndex
                    ? "font-medium text-foreground"
                    : "text-muted-foreground"
                }
              >
                {area.label}
              </span>
              <span className="font-mono text-[0.6875rem] text-muted-foreground">
                0{index + 1}
              </span>
            </span>
          </button>
        ))}
      </div>

      <div className="relative min-h-[25rem] overflow-hidden border border-border bg-surface p-6 sm:p-8 lg:p-10">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeArea.id}
            id={`expertise-panel-${activeArea.id}`}
            role="tabpanel"
            aria-labelledby={`expertise-tab-${activeArea.id}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.16 }}
          >
            <div className="flex items-center justify-between border-b border-border pb-3.5 font-mono text-xs tracking-[0.12em] uppercase">
              <span className="text-primary">0{activeIndex + 1} · {activeArea.label}</span>
              <span className="text-secondary">Implémenté en production</span>
            </div>

            <h3 className="mt-6 max-w-2xl text-2xl leading-tight font-semibold tracking-[-0.04em] sm:text-3xl">
              {activeArea.title}
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
              {activeArea.description}
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {activeArea.capabilities.map((capability, idx) => (
                <div
                  key={capability}
                  className="grid grid-cols-[1.5rem_1fr] border-t border-border pt-3 text-xs leading-5 text-foreground/90 sm:text-sm"
                >
                  <span className="font-mono text-xs text-primary">
                    {idx + 1}.
                  </span>
                  <span>{capability}</span>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-1.5 border-t border-border pt-5">
              {activeArea.technologies.map((technology) => (
                <span
                  key={technology}
                  className="border border-border bg-background/60 px-2.5 py-1 font-mono text-[0.6875rem] text-secondary"
                >
                  {technology}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
