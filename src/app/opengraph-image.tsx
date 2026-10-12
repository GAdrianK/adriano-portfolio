import { ImageResponse } from "next/og";

export const alt =
  "Adriano Gallo — Cahier d’ingénierie IA, Vision par ordinateur & Langage";
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
          padding: "64px 72px",
          color: "#141311",
          background: "#F3EDE2",
          border: "12px solid #141311",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "2px solid #141311",
            paddingBottom: 18,
            fontFamily: "monospace",
            fontSize: 18,
            letterSpacing: 3,
          }}
        >
          <span>CAHIER N° 01 — ADRIANO GALLO</span>
          <span style={{ color: "#B83A24", fontWeight: 700 }}>
            SORBONNE × PLURITAL
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 82,
              lineHeight: 0.95,
              fontWeight: 400,
              letterSpacing: -2,
            }}
          >
            De la grammaire italienne à la géométrie d’un contre-pressing.
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 26,
              fontFamily: "monospace",
              color: "#1E4D33",
            }}
          >
            VISION-BALLING (v0.9.0-rc1) · RF-DETR · BoT-SORT · PnLCalib 2D ·
            0% Hallucination RAG
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid #141311",
            paddingTop: 20,
            fontFamily: "monospace",
            fontSize: 16,
            color: "#59544C",
          }}
        >
          <span>PARIS / ASNIÈRES-SUR-SEINE</span>
          <span>GITHUB.COM/GADRIANK</span>
        </div>
      </div>
    ),
    size,
  );
}
