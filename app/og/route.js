import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  const heroImageUrl = "https://careplus-next.vercel.app/assets/Rectangle3173.png";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <img
          src={heroImageUrl}
          alt="CarePlus Hero"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", 
          }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
