import { ImageResponse } from "next/og";
import { getCategoryById } from "@/data";
export const alt = "Drafted Until Clear — Interview Prep";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const category = getCategoryById(id);

  if (!category) {
    return new Response("Not found", { status: 404 });
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0A0A",
          color: "#FAFAFA",
          fontFamily: "sans-serif",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 140,
            height: 140,
            borderRadius: 32,
            border: `4px solid ${category.color}`,
            backgroundColor: "#171717",
            marginBottom: 40,
            boxShadow: `0 0 60px ${category.color}40`,
          }}
        >
          <span style={{ fontSize: 72, fontWeight: "bold", color: category.color }}>D</span>
        </div>
        
        <h1 style={{ fontSize: 80, fontWeight: "bold", marginBottom: 20, textAlign: "center", lineHeight: 1.1 }}>
          {category.label} <span style={{ color: "#71717A" }}>Interview Questions</span>
        </h1>
        
        <p style={{ fontSize: 36, color: "#A1A1AA", textAlign: "center", maxWidth: 900, lineHeight: 1.4 }}>
          {category.description}
        </p>
        
        <div style={{ position: "absolute", bottom: 60, display: "flex", alignItems: "center", opacity: 0.8 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, backgroundColor: "#FAFAFA", color: "#0A0A0A", borderRadius: 8, marginRight: 16, fontSize: 24, fontWeight: "bold" }}>
            D
          </div>
          <span style={{ fontSize: 28, fontWeight: "bold", letterSpacing: "1px" }}>Drafted Until Clear</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
