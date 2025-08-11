import Contact from "../components/Pages/contact/Contact";
import Locationmap from "../components/Pages/contact/Map"
import JoiningSafeCare from "../components/Pages/home/joining";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

export const metadata = {
  title: "Contac",
  description: "Get in touch with us for inquiries, support, or service details. Find our location, contact form, and ways to connect with our team.",
  openGraph: {
    title: "Contact - CarePlus",
    description: "Get in touch with us for inquiries, support, or service details. Find our location, contact form, and ways to connect with our team.",
    images: ["/og-contact.png"], // optional custom OG
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - CarePlus",
    description: "Get in touch with us for inquiries, support, or service details. Find our location, contact form, and ways to connect with our team.",
    images: ["/og-contact.png"],
  },
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