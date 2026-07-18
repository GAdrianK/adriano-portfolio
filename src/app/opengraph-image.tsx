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
          color: "#F2F0EA",
          background: "#0B0B0C",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, color: "#C7B9A5", fontSize: 20, letterSpacing: 6 }}>
          <div style={{ width: 42, height: 1, background: "#C7B9A5" }} />
          ADRIANO GALLO
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, fontWeight: 500, letterSpacing: -6 }}>AI Engineer</div>
          <div style={{ marginTop: 18, fontSize: 42, fontWeight: 400, color: "#C7B9A5", letterSpacing: -2 }}>LLM · RAG · Agents IA</div>
          <div style={{ marginTop: 32, maxWidth: 900, fontSize: 25, lineHeight: 1.45, color: "#A1A1AA" }}>
            Des systèmes intelligents connectés aux données, aux outils et aux besoins métier.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #23262B", paddingTop: 24, color: "#A1A1AA", fontSize: 16, letterSpacing: 3 }}>
          <span>FOOTBALL INTELLIGENCE ASSISTANT</span>
          <span>RAG · NLP · PRODUCT</span>
        </div>
      </div>
    ),
    size,
  );
}
