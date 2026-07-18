"use client";

import type { PointerEvent } from "react";

import { GlassPanel, type GlassPanelProps } from "@/components/primitives/glass-panel";
import { cn } from "@/lib/utils";

export function SpotlightCard({ className, onPointerMove, ...props }: GlassPanelProps) {
  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    onPointerMove?.(event);
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--spotlight-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--spotlight-y", `${event.clientY - bounds.top}px`);
  }

  return <GlassPanel className={cn("spotlight-card", className)} onPointerMove={handlePointerMove} {...props} />;
}

