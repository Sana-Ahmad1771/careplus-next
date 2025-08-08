import { ImageResponse } from "next/og";

// Route segment config (optional)
export const runtime = "edge"; // OG image works best with edge runtime

export async function GET() {
  // Fetch logo from public folder or remote URL
  const logoUrl = new URL("../../public/assets/Mask-group-logo.png",import.meta.url);
  const logoData = await fetch(logoUrl).then((res) => res.arrayBuffer());
  const base64Logo = Buffer.from(logoData).toString("base64");

  return new ImageResponse(
    (
      <div
        style={{
          background: "#F8FAFC", // light brand color
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <img
          src={`data:image/png;base64,${base64Logo}`}
          alt="CarePlus Logo"
          width="300"
          height="300"
          style={{ marginBottom: "20px" }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
