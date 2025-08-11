const heroImageUrl = "https://careplus-next.vercel.app/assets/hero-image.png"; // update with your actual hero image

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
