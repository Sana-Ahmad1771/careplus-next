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
  openGraph: {
    title: "CarePlus",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "CarePlus",
    images: ["/opengraph-image"],
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
