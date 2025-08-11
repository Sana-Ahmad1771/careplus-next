import Header from "../components/common/Header";
import Gallery from "../components/Pages/gallery/Gallery";
import Techniques from "../components/Pages/home/Techniques";
import JoiningSafeCare from "../components/Pages/home/joining";
import Footer from "../components/common/Footer";

export const metadata = {
  title: "Gallery",
  description:
    "Browse our gallery featuring high-quality industry images, showcasing modern equipment, innovative processes, and professional work environments that reflect our expertise and commitment to excellence.",
  openGraph: {
    title: "Gallery - CarePlus",
    description:
      "Browse our gallery featuring high-quality industry images, showcasing modern equipment, innovative processes, and professional work environments that reflect our expertise and commitment to excellence.",
    // images: ["/og-about.png"], // we can set custome image according to page
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery - CarePlus",
    description:
      "Browse our gallery featuring high-quality industry images, showcasing modern equipment, innovative processes, and professional work environments that reflect our expertise and commitment to excellence.",
    // images: ["/og-about.png"],
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
