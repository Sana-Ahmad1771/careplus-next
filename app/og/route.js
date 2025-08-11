// app/og/route.js
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {

  const logoUrl = "https://careplus-next.vercel.app/assets/Rectangle3173.png";

  return new ImageResponse(
    (
      <div
        style={{
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
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}

