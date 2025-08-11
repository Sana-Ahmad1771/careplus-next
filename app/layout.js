import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://careplus-next.vercel.app"),
  title: {
    default: "Care Plus",
    template: "%s - Care Plus"
  },
  description:
    "Welcome to Care Plus – delivering innovative solutions and top-quality products for the healthcare industry. Explore our services, browse our gallery, and discover how we can meet your needs.",
  openGraph: {
    url: "https://careplus-next.vercel.app",
    siteName: "Care Plus",
    images: [
      {
        url: "https://careplus-next.vercel.app/og-image.png", // Static file
        width: 1200,
        height: 630,
        alt: "Care Plus Hero",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://careplus-next.vercel.app/og-image.png"], // Static file
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
