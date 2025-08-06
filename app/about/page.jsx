import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import { AboutUsPage } from "../components/Pages/aboutus/AboutUsPage";
import CleanRoom from "../components/Pages/aboutus/Cleanrooms";
import { OurKeyStrength } from "../components/Pages/aboutus/Pharmagrade-section";
import { StorageRoom } from "../components/Pages/aboutus/Storageroom-section";
import QualityCertification from "../components/Pages/home/QualityCertification";


const page = () => {
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

export default page;
