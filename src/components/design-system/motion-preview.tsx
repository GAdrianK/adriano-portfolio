"use client";

import { MoveRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export function MotionPreview() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="group flex min-h-36 items-end justify-between rounded-lg border border-border bg-surface/70 p-5 shadow-soft"
      whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.01 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.99 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
    >
      <div>
        <p className="font-mono text-xs tracking-[0.16em] text-secondary uppercase">
          Motion
        </p>
        <p className="mt-2 max-w-xs text-sm leading-6 text-muted-foreground">
          Survolez cette surface pour tester l’élévation courte et maîtrisée.
        </p>
      </div>
      <MoveRight
        aria-hidden="true"
        className="size-5 text-foreground transition-transform duration-200 group-hover:translate-x-1"
      />
    </motion.div>
  );
}

