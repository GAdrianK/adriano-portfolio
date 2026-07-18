import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  titleId: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ index, eyebrow, title, description, titleId, align = "left", className }: SectionHeadingProps) {
  return (
    <header className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <div className={cn("mb-5 flex items-center gap-3", align === "center" && "justify-center")}>
        <span className="font-mono text-[0.6875rem] tracking-[0.16em] text-secondary">{index}</span>
        <span className="h-px w-8 bg-secondary/45" aria-hidden="true" />
        <span className="font-mono text-[0.6875rem] tracking-[0.16em] text-muted-foreground uppercase">{eyebrow}</span>
      </div>
      <h2 id={titleId} className="text-heading text-balance font-semibold">{title}</h2>
      <p className="mt-5 text-body-lg text-pretty text-muted-foreground">{description}</p>
    </header>
  );
}

