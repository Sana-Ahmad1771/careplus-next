import Hero from "./components/Pages/home/Hero";
import About from "./components/Pages/home/About";
import Mission from "./components/Pages/home/Mission";
import History from "./components/Pages/home/History";
import Productsection from "./components/Pages/home/cards/ProductSection";
import ClientsSection from "./components/Pages/home/cards/ClientsSection";
import Techniques from "./components/Pages/home/Techniques";
import OurKeyStrengths from "./components/Pages/home/Keystrength"
import NewsAndEvents from "./components/Pages/home/NewsAndEvents";
import QualityCertification from "./components/Pages/home/QualityCertification";
import JoiningSafeCare from "./components/Pages/home/joining";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";


export const metadata = {
  metadataBase: new URL("https://careplus-next.vercel.app"),
  title: {
    default: "Care Plus",
    template: "%s - Care Plus",
  },
  description:
    "Welcome to Care Plus – delivering innovative solutions and top-quality products for the healthcare industry. Explore our services, browse our gallery, and discover how we can meet your needs.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://careplus-next.vercel.app/",
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
      "Welcome to Care Plus – delivering innovative solutions and top-quality products for the healthcare industry. Explore our services, browse our gallery, and discover how we can meet your needs.",
    images: ["https://careplus-next.vercel.app/ogimage.png"],
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Mission />
      <History />
      <Productsection />
      <ClientsSection />
      <Techniques />
      <OurKeyStrengths />
      <NewsAndEvents />
      <QualityCertification />
      <JoiningSafeCare />
      <Footer />
    </>
  );
}
