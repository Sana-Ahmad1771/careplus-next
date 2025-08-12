import Header from "../components/common/Header";
import { AboutUsPage } from "../components/Pages/aboutus/AboutUsPage";
import CleanRoom from "../components/Pages/aboutus/Cleanrooms";
import { OurKeyStrength } from "../components/Pages/aboutus/Pharmagrade-section";
import { StorageRoom } from "../components/Pages/aboutus/Storageroom-section";
import QualityCertification from "../components/Pages/home/QualityCertification";
import Footer from "../components/common/Footer";

export const metadata = {
  title: "About Us",
  description: "Learn more about CarePlus, our mission, and our commitment to healthcare excellence.",
  alternates: {
    canonical: "https://careplus-next.vercel.app/about",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://careplus-next.vercel.app/about",
    siteName: "Care Plus",
    title: "About - Care Plus",
    description: "Learn more about CarePlus, our mission, and our commitment to healthcare excellence.",
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
    title: "About - Care Plus",
   description: "Learn more about CarePlus, our mission, and our commitment to healthcare excellence.",
    images: ["https://careplus-next.vercel.app/ogimage.png"],
  },
};

const Page = () => {
  return (
    <div>
      <Header />
      <AboutUsPage />
      <CleanRoom />
      <StorageRoom />
      <OurKeyStrength />
      <QualityCertification />
      <Footer />
    </div>
  );
};

export default Page;
