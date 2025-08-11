import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {

  const logoUrl = "https://careplus-next.vercel.app/assets/Rectangle3173.png";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <img
          src={logoUrl}
          alt="CarePlus Home"
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}

