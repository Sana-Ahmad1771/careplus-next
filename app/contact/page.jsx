import Contact from "../components/Pages/contact/Contact";
import Locationmap from "../components/Pages/contact/Map"
import JoiningSafeCare from "../components/Pages/home/joining";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

export const metadata = {
  title: "Contact",
  description: "Get in touch with us for inquiries, support, or service details. Find our location, contact form, and ways to connect with our team."
};

const page = () => {
    return ( <>
    <Header />
    <Contact />
    <Locationmap />
    <JoiningSafeCare/>
    <Footer/>
    </> );
}
 
export default page;