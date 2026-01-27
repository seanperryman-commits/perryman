import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Sean Perryman — AI Policy & Governance Advisor";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0F172A",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        {/* Accent line */}
        <div
          style={{
            width: "80px",
            height: "4px",
            background: "#0EA5E9",
            marginBottom: "40px",
            borderRadius: "2px",
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "#FFFFFF",
            marginBottom: "16px",
            fontFamily: "serif",
          }}
        >
          Sean Perryman
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: "28px",
            color: "#94A3B8",
            fontFamily: "sans-serif",
          }}
        >
          AI Policy & Governance Advisor
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            width: "80px",
            height: "4px",
            background: "#0EA5E9",
            marginTop: "40px",
            borderRadius: "2px",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
