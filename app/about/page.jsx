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
  openGraph: {
    title: "About Us",
    description: "Learn more about CarePlus, our mission, and our commitment to healthcare excellence.",
    // images: ["/og-about.png"], 
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us",
    description: "Learn more about CarePlus, our mission, and our commitment to healthcare excellence.",
    // images: ["/og-about.png"],
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
