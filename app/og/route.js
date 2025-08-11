// app/og/route.js
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  // Use absolute URL to public folder asset
  const logoUrl = "https://careplus-next.vercel.app/assets/Mask-group-logo.png";

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "white",
          color: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <img
          src={logoUrl}
          alt="CarePlus Logo"
          width="300"
          height="300"
          style={{ marginBottom: 20 }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}

