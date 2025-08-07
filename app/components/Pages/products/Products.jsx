"use client";

import { useSearchParams } from "next/navigation";

const Products = () => {
  const searchParams = useSearchParams();
  const selected = searchParams.get("category");
  const display = selected ? selected.replaceAll(",", ", ") : "All";

  return (
    <section className="py-20 px-5 lg:px-32 xl:px-40 bg-[#A9D6EB] overflow-hidden">
      <div className="text-center">
        <h1 className="lg:text-[44px] text-4xl font-medium mb-5">Our Products</h1>
        <div className="space-x-2 cursor-pointer text-2xl font-roboto font-normal">
          <a href="/">Home /</a>
          <a href="/products">Products /</a>
          <span>{display}</span>
        </div>
      </div>
    </section>
  );
};

export default Products;
