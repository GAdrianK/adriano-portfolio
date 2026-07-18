import { ImageResponse } from "next/og";

export const alt = "Adriano Gallo — AI Engineer, LLM, RAG et Agents IA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 78px",
          color: "#f3f7ff",
          background: "linear-gradient(135deg, #070b14 0%, #0b1730 62%, #102a42 100%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, color: "#52ddd8", fontSize: 24, letterSpacing: 5 }}>
          <div style={{ width: 42, height: 2, background: "#52ddd8" }} />
          ADRIANO GALLO
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 82, fontWeight: 700, letterSpacing: -5 }}>AI Engineer</div>
          <div style={{ marginTop: 18, fontSize: 48, fontWeight: 600, color: "#52ddd8", letterSpacing: -2 }}>LLM · RAG · Agents IA</div>
          <div style={{ marginTop: 32, maxWidth: 900, fontSize: 25, lineHeight: 1.45, color: "#aebbd0" }}>
            Des systèmes intelligents connectés aux données, aux outils et aux besoins métier.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", color: "#718099", fontSize: 18, letterSpacing: 3 }}>
          <span>FOOTBALL INTELLIGENCE ASSISTANT</span>
          <span>RAG · NLP · PRODUCT</span>
        </div>
      </div>
    ),
    size,
  );
}
