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
  description: "Your trusted healthcare partner",
  openGraph: {
    title: "CarePlus",
    description: "Your trusted healthcare partner",
    images: ["/og"],
  },
  twitter: {
    card: "summary_large_image",
    title: "CarePlus",
    description: "Your trusted healthcare partner",
    images: ["/og"],
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
