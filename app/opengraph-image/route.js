import { ImageResponse } from "next/og";

export const runtime = "edge";

// Required GET function
export async function GET() {
  const heroImageUrl =
    "https://careplus-next.vercel.app/assets/heroimg.png"; // your actual image URL

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%" }}>
        <img
          src={heroImageUrl}
          alt="CarePlus Hero"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
