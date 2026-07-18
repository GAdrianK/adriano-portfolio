"use client";

import { useState } from "react";

import {
  Binary,
  Blocks,
  CheckCircle2,
  Database,
  Files,
  Sparkles,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { GlassPanel } from "@/components/primitives/glass-panel";
import { cn } from "@/lib/utils";

type ArchitectureNodeId =
  | "documents"
  | "embeddings"
  | "vector-store"
  | "user"
  | "agent"
  | "tools"
  | "response";

type ArchitectureNode = {
  id: ArchitectureNodeId;
  label: string;
  shortLabel: string;
  description: string;
  icon: LucideIcon;
  x: string;
  y: string;
  emphasis?: boolean;
};

const architectureNodes: ReadonlyArray<ArchitectureNode> = [
  {
    id: "documents",
    label: "Documents",
    shortLabel: "Documents",
    description: "Les sources métier sont collectées, nettoyées et segmentées.",
    icon: Files,
    x: "15%",
    y: "23.5%",
  },
  {
    id: "embeddings",
    label: "Embeddings",
    shortLabel: "Vectors",
    description: "Le contenu est transformé en représentations sémantiques.",
    icon: Binary,
    x: "50%",
    y: "23.5%",
  },
  {
    id: "vector-store",
    label: "Vector Store",
    shortLabel: "Vector DB",
    description: "Les connaissances sont indexées pour une recherche rapide.",
    icon: Database,
    x: "85%",
    y: "23.5%",
  },
  {
    id: "user",
    label: "Utilisateur",
    shortLabel: "Utilisateur",
    description: "Une intention métier claire déclenche le système.",
    icon: UserRound,
    x: "10.5%",
    y: "68%",
  },
  {
    id: "agent",
    label: "Agent IA",
    shortLabel: "Agent IA",
    description: "L’agent raisonne, récupère le contexte et orchestre les actions.",
    icon: Sparkles,
    x: "38%",
    y: "68%",
    emphasis: true,
  },
  {
    id: "tools",
    label: "Tools / APIs",
    shortLabel: "Tools / APIs",
    description: "Les outils connectent l’IA aux services et données opérationnels.",
    icon: Blocks,
    x: "67%",
    y: "68%",
  },
  {
    id: "response",
    label: "Réponse métier",
    shortLabel: "Réponse",
    description: "Le résultat est structuré, traçable et directement exploitable.",
    icon: CheckCircle2,
    x: "91.5%",
    y: "68%",
  },
];

const connections: ReadonlyArray<{
  from: ArchitectureNodeId;
  to: ArchitectureNodeId;
  path: string;
}> = [
  { from: "documents", to: "embeddings", path: "M118 108 H255" },
  { from: "embeddings", to: "vector-store", path: "M345 108 H482" },
  {
    from: "vector-store",
    to: "agent",
    path: "M510 142 C510 218 228 190 228 274",
  },
  { from: "user", to: "agent", path: "M91 312 H184" },
  { from: "agent", to: "tools", path: "M273 312 H356" },
  { from: "tools", to: "response", path: "M445 312 H500" },
];

const knowledgeFlow: ReadonlyArray<ArchitectureNodeId> = [
  "documents",
  "embeddings",
  "vector-store",
];

const agentFlow: ReadonlyArray<ArchitectureNodeId> = [
  "user",
  "agent",
  "tools",
  "response",
];

function getNode(nodeId: ArchitectureNodeId) {
  const node = architectureNodes.find((candidate) => candidate.id === nodeId);

  if (!node) {
    throw new Error(`Architecture node not found: ${nodeId}`);
  }

  return node;
}

type NodeButtonProps = {
  node: ArchitectureNode;
  isActive: boolean;
  isCompact?: boolean;
  onActivate: (nodeId: ArchitectureNodeId) => void;
};

function NodeButton({
  node,
  isActive,
  isCompact = false,
  onActivate,
}: NodeButtonProps) {
  const Icon = node.icon;
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.button
      type="button"
      className={cn(
        "group relative isolate flex border text-left outline-none transition-[border-color,background-color,box-shadow,color] duration-200 focus-visible:ring-[3px] focus-visible:ring-ring/40",
        isCompact
          ? "min-h-14 w-full items-center gap-2 rounded-md px-2.5 py-2"
          : "w-28 flex-col gap-2 rounded-lg px-3 py-3 xl:w-30",
        isActive
          ? "border-primary/50 bg-primary/13 text-foreground shadow-[0_12px_34px_oklch(0.5_0.16_258_/_20%),inset_0_1px_0_oklch(1_0_0_/_12%)]"
          : "border-white/10 bg-[oklch(0.18_0.028_260/82%)] text-muted-foreground shadow-[inset_0_1px_0_oklch(1_0_0_/_7%)] hover:border-white/20 hover:bg-white/8 hover:text-foreground",
        node.emphasis && !isActive && "border-primary/25 bg-primary/7",
      )}
      aria-pressed={isActive}
      aria-label={`${node.label} : ${node.description}`}
      onPointerEnter={() => onActivate(node.id)}
      onFocus={() => onActivate(node.id)}
      onClick={() => onActivate(node.id)}
      whileHover={shouldReduceMotion ? {} : { y: -2 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.18 }}
    >
      <span
        className={cn(
          "flex shrink-0 items-center justify-center rounded-sm border transition-colors duration-200",
          isCompact ? "size-8" : "size-9",
          isActive
            ? "border-primary/30 bg-primary/15 text-secondary"
            : "border-white/10 bg-white/5 text-muted-foreground group-hover:text-foreground",
        )}
        aria-hidden="true"
      >
        <Icon className={isCompact ? "size-3.5" : "size-4"} />
      </span>
      <span
        className={cn(
          "font-medium leading-tight",
          isCompact ? "text-[0.6875rem]" : "text-xs",
        )}
      >
        {isCompact ? node.shortLabel : node.label}
      </span>
    </motion.button>
  );
}

function MobileFlow({
  label,
  nodeIds,
  activeNodeId,
  onActivate,
}: {
  label: string;
  nodeIds: ReadonlyArray<ArchitectureNodeId>;
  activeNodeId: ArchitectureNodeId;
  onActivate: (nodeId: ArchitectureNodeId) => void;
}) {
  return (
    <div>
      <p className="mb-2.5 font-mono text-[0.625rem] tracking-[0.14em] text-secondary uppercase">
        {label}
      </p>
      <div className="relative space-y-2 before:absolute before:top-6 before:bottom-6 before:left-6 before:w-px before:bg-gradient-to-b before:from-primary/40 before:via-border before:to-secondary/35">
        {nodeIds.map((nodeId) => {
          const node = getNode(nodeId);

          return (
            <NodeButton
              key={node.id}
              node={node}
              isActive={activeNodeId === node.id}
              isCompact
              onActivate={onActivate}
            />
          );
        })}
      </div>
    </div>
  );
}

export function AIArchitectureGraph() {
  const [activeNodeId, setActiveNodeId] =
    useState<ArchitectureNodeId>("agent");
  const shouldReduceMotion = useReducedMotion();
  const activeNode = getNode(activeNodeId);

  return (
    <GlassPanel
      variant="elevated"
      padding="none"
      radius="xl"
      className="architecture-shell w-full"
    >
      <div className="relative z-10 flex items-center justify-between gap-4 border-b border-border px-4 py-4 sm:px-5">
        <div className="flex items-center gap-2.5">
          <span
            className="flex size-8 items-center justify-center rounded-sm border border-primary/20 bg-primary/10 text-secondary"
            aria-hidden="true"
          >
            <Sparkles className="size-3.5" />
          </span>
          <div>
            <p className="text-xs font-medium text-foreground">
              Architecture IA
            </p>
            <p className="mt-0.5 font-mono text-[0.625rem] tracking-[0.12em] text-muted-foreground uppercase">
              Retrieval · Agent · Action
            </p>
          </div>
        </div>
        <span className="hidden rounded-pill border border-border bg-white/5 px-2.5 py-1 font-mono text-[0.5625rem] tracking-[0.1em] text-muted-foreground uppercase sm:inline-flex">
          Interactive
        </span>
      </div>

      <div
        className="relative z-10 hidden sm:block"
        role="group"
        aria-label="Architecture IA interactive. Utilisez Tab pour explorer les nœuds."
      >
        <div className="relative aspect-[1.28] min-h-[25rem]">
          <svg
            className="pointer-events-none absolute inset-0 size-full"
            viewBox="0 0 600 460"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="architecture-line" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="var(--primary)" />
                <stop offset="1" stopColor="var(--secondary)" />
              </linearGradient>
              <marker
                id="architecture-arrow"
                markerWidth="7"
                markerHeight="7"
                refX="6"
                refY="3.5"
                orient="auto"
              >
                <path d="M0 0 L7 3.5 L0 7 Z" fill="var(--muted-foreground)" />
              </marker>
            </defs>
            {connections.map((connection) => {
              const isRelated =
                connection.from === activeNodeId ||
                connection.to === activeNodeId;

              return (
                <motion.path
                  key={`${connection.from}-${connection.to}`}
                  d={connection.path}
                  fill="none"
                  stroke={isRelated ? "url(#architecture-line)" : "var(--border)"}
                  strokeWidth={isRelated ? 1.8 : 1.2}
                  strokeLinecap="round"
                  markerEnd="url(#architecture-arrow)"
                  vectorEffect="non-scaling-stroke"
                  initial={false}
                  animate={{ opacity: isRelated ? 0.9 : 0.5 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
                />
              );
            })}
          </svg>

          <span className="absolute top-[8%] left-[4%] font-mono text-[0.5625rem] tracking-[0.14em] text-muted-foreground uppercase">
            Knowledge layer
          </span>
          <span className="absolute top-[51%] left-[4%] font-mono text-[0.5625rem] tracking-[0.14em] text-muted-foreground uppercase">
            Agent runtime
          </span>

          {architectureNodes.map((node) => (
            <div
              key={node.id}
              className="absolute"
              style={{
                left: node.x,
                top: node.y,
                transform: "translate(-50%, -50%)",
              }}
            >
              <NodeButton
                node={node}
                isActive={activeNodeId === node.id}
                onActivate={setActiveNodeId}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className="relative z-10 grid grid-cols-2 gap-3 p-4 sm:hidden"
        role="group"
        aria-label="Architecture IA interactive. Utilisez Tab pour explorer les nœuds."
      >
        <MobileFlow
          label="Knowledge"
          nodeIds={knowledgeFlow}
          activeNodeId={activeNodeId}
          onActivate={setActiveNodeId}
        />
        <MobileFlow
          label="Agent runtime"
          nodeIds={agentFlow}
          activeNodeId={activeNodeId}
          onActivate={setActiveNodeId}
        />
      </div>

      <div className="relative z-10 min-h-24 border-t border-border bg-black/10 px-4 py-4 sm:px-5">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeNode.id}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -3 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.16 }}
            aria-live="polite"
          >
            <div className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-secondary" aria-hidden="true" />
              <p className="font-mono text-[0.625rem] tracking-[0.13em] text-secondary uppercase">
                {activeNode.label}
              </p>
            </div>
            <p className="mt-2 max-w-lg text-xs leading-5 text-muted-foreground sm:text-sm sm:leading-6">
              {activeNode.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </GlassPanel>
  );
}

