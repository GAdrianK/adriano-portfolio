import { ImageResponse } from "next/og";

export const alt = "Adriano Gallo — Ingénieur IA, Vision par ordinateur, NLP & RAG Ancré";
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
          color: "#F0EDE6",
          background: "#0C0D0B",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            color: "#D47A49",
            fontSize: 20,
            letterSpacing: 5,
          }}
        >
          <div style={{ width: 42, height: 2, background: "#D47A49" }} />
          ADRIANO GALLO · MASTER PLURITAL
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 500, letterSpacing: -4 }}>
            Ingénieur IA & NLP
          </div>
          <div
            style={{
              marginTop: 16,
              fontSize: 38,
              fontWeight: 400,
              color: "#7DB594",
              letterSpacing: -1,
            }}
          >
            Vision par ordinateur · RAG multimodal ancré · Systèmes hybrides
          </div>
          <div
            style={{
              marginTop: 28,
              maxWidth: 940,
              fontSize: 24,
              lineHeight: 1.45,
              color: "#9D9B93",
            }}
          >
            VISION-BALLING (v0.9.0-rc1) · Football Intelligence Assistant · Evalia
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #242824",
            paddingTop: 24,
            color: "#9D9B93",
            fontSize: 16,
            letterSpacing: 2,
          }}
        >
          <span>VISION-BALLING · RF-DETR · BOT-SORT · PNLCALIB 2D</span>
          <span>0% HALLUCINATION RAG</span>
        </div>
      </div>
    ),
    size,
  );
}
