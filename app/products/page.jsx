import { Suspense } from "react";
import Header from "../components/common/Header";
import JoiningSafeCare from "../components/Pages/home/joining";
import Footer from "../components/common/Footer";
// Import client components
import Products from "../components/Pages/products/Products";
import Filters from "../components/Pages/products/Filter";

export const metadata = {
  title: "Products",
  description:
    "Browse our range of high-quality healthcare products designed for your needs.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://careplus-next.vercel.app",
    siteName: "Care Plus",
    title: "Products - Care Plus",
    description:
      "Browse our range of high-quality healthcare products designed for your needs.",
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
    title: "Products - Care Plus",
    description:
      "Browse our range of high-quality healthcare products designed for your needs.",
    images: ["https://careplus-next.vercel.app/ogimage.png"],
  },
};

const Page = () => {
  return (
    <>
      <Header />

      <Suspense fallback={<div>Loading Products Header...</div>}>
        <Products />
      </Suspense>

      <Suspense fallback={<div>Loading Filters...</div>}>
        <Filters />
      </Suspense>

      <JoiningSafeCare />
      <Footer />
    </>
  );
};

export default Page;
