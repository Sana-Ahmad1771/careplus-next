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
