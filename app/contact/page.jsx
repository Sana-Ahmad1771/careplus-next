import Header from "../components/common/Header";
import Contact from "../components/Pages/contact/Contact";
import Locationmap from "../components/Pages/contact/Map";
import JoiningSafeCare from "../components/Pages/home/joining";
import Footer from "../components/common/Footer";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with us for inquiries, support, or service details. Find our location, contact form, and ways to connect with our team.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://careplus-next.vercel.app",
    siteName: "Care Plus",
    title: "Contact - Care Plus",
    description:
      "Get in touch with us for inquiries, support, or service details. Find our location, contact form, and ways to connect with our team.",
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
    title: "Contact - Care Plus",
    description:
      "Get in touch with us for inquiries, support, or service details. Find our location, contact form, and ways to connect with our team.",
    images: ["https://careplus-next.vercel.app/ogimage.png"],
  },
};

const page = () => {
  return (
    <>
      <Header />
      <Contact />
      <Locationmap />
      <JoiningSafeCare />
      <Footer />
    </>
  );
};

export default page;
