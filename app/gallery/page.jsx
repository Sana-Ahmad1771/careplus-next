import Header from "../components/common/Header";
import Gallery from "../components/Pages/gallery/Gallery";
import Techniques from "../components/Pages/home/Techniques";
import JoiningSafeCare from "../components/Pages/home/joining";
import Footer from "../components/common/Footer";

export const metadata = {
  title: "Gallery",
  description:
    "Browse our gallery featuring high-quality industry images, showcasing modern equipment, innovative processes, and professional work environments that reflect our expertise and commitment to excellence.",
   alternates: {
    canonical: "https://careplus-next.vercel.app/gallery",
  },
    openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://careplus-next.vercel.app/gallery",
    siteName: "Care Plus",
    title: "Gallery - Care Plus",
    description:
      "Browse our gallery featuring high-quality industry images, showcasing modern equipment, innovative processes, and professional work environments that reflect our expertise and commitment to excellence.",
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
    title: "Gallery - Care Plus",
    description:
      "Browse our gallery featuring high-quality industry images, showcasing modern equipment, innovative processes, and professional work environments that reflect our expertise and commitment to excellence.",
    images: ["https://careplus-next.vercel.app/ogimage.png"],
  },
};

const page = () => {
  return (
    <>
      <Header />
      <Gallery />
      <Techniques />
      <JoiningSafeCare />
      <Footer />
    </>
  );
};

export default page;
