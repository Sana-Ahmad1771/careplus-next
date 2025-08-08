import("next").Metadata
export const metadata = {
  title: "Products"
}

import { Suspense } from "react";
import Header from "../components/common/Header";
import JoiningSafeCare from "../components/Pages/home/joining";
import Footer from "../components/common/Footer";

// Import client components
import Products from "../components/Pages/products/Products";
import Filters from "../components/Pages/products/Filter";

const Page = () => {
  return (
    <>
      <Header />

      <Suspense fallback={<div>Loading Products Header...</div>}>
        <Products />
      </Suspense>

      <Suspense fallback={<div>Loading Filters...</div>}>
        <Filters />
      </Suspense>

      <JoiningSafeCare />
      <Footer />
    </>
  );
};

export default Page;
