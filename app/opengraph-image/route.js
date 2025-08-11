// import { ImageResponse } from "next/og";

// export const runtime = "edge";

// export async function GET() {
//   const heroImageUrl = "https://careplus-next.vercel.app/ogimage.png";

//   return new ImageResponse(
//     (
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           width: "100%",
//           height: "100%",
//           backgroundColor: "#ffffff",
//           position: "relative",
//           fontSize: 48,
//           fontWeight: "bold",
//           color: "#0B3D91",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <img
//           src={heroImageUrl}
//           alt="Care Plus Hero"
//           style={{
//             position: "absolute",
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             opacity: 0.7,
//           }}
//         />
//         <span
//           style={{
//             zIndex: 1,
//             background: "rgba(255,255,255,0.8)",
//             padding: "20px 40px",
//             borderRadius: "10px",
//           }}
//         >
//           Care Plus – Healthcare Solutions
//         </span>
//       </div>
//     ),
//     {
//       width: 1200,
//       height: 630,
//     }
//   );
// }
