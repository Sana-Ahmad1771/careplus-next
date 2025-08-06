import Filters from "../components/Pages/products/Filter";
import Products from "../components/Pages/products/Products";
import Header from "../components/common/Header";
import JoiningSafeCare from "../components/Pages/home/joining";
import Footer from "../components/common/Footer";

const page = () => {
  return (
    <>
      <Header />
      <Products />
      <Filters />
      <JoiningSafeCare />
      <Footer />
    </>
  );
};

export default page;
