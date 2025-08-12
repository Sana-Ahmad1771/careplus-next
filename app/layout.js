// app/layout.js
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
    template: "%s - Care Plus",
  },
  keywords: [
    "healthcare solutions",
    "medical equipment",
    "hospital supplies",
    "healthcare products",
    "quality healthcare",
    "Care Plus",
    "medical devices",
    "hospital equipment",
    "pharmaceutical grade supplies",
  ],
  authors: [{ name: "Sana Ahmad", url: "https://careplus-next.vercel.app" }],
  alternates: {
    canonical: "https://careplus-next.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://careplus-next.vercel.app",
    siteName: "Care Plus",
    title: "Care Plus",
    description:
      "Welcome to Care Plus – delivering innovative solutions and top-quality products for the healthcare industry. Explore our services, browse our gallery, and discover how we can meet your needs.",
    images: [
      {
        url: "https://careplus-next.vercel.app/ogimage.png",
        width: 1200,
        height: 630,
        alt: "Care Plus Hero",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Care Plus",
    description:
      "Welcome to Care Plus – delivering innovative solutions and top-quality products for the healthcare industry.",
    images: ["https://careplus-next.vercel.app/ogimage.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* Schema.org Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Care Plus",
              url: "https://careplus-next.vercel.app",
              logo: "https://careplus-next.vercel.app/assets/logo.png",
              sameAs: [
                "https://facebook.com/yourpage",
                "https://twitter.com/yourpage",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "(239) 555-0108",
                  contactType: "Customer Service",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
