"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import productsData from "../products/productsData.json";
import { TiStarFullOutline } from "react-icons/ti";
import { Suspense } from "react";

import respiratory1 from "../../../product-images/respiratory-1.png";
import respiratory2 from "../../../product-images/respiratory-2.png";
import respiratory3 from "../../../product-images/respiratory-3.png";
import respiratory4 from "../../../product-images/respiratory-4.png";
import Image from "next/image";

const imageMap = {
  "respiratory-1.png": respiratory1,
  "respiratory-2.png": respiratory2,
  "respiratory-3.png": respiratory3,
  "respiratory-4.png": respiratory4,
};

const categories = [
  "Respiratory Consumables",
  "Emesis Supplies",
  "PPE Consumables",
  "Nursing Consumables",
  "Surgical Kits",
  "CSSD",
  "Wound Care",
  "Drapes & Packs",
  "Apparels",
];

const Filters = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    // Load images into product list
    const productsWithImages = productsData.map((product) => ({
      ...product,
      image: imageMap[product.image] || null,
    }));
    setAllProducts(productsWithImages);

    const param = searchParams.get("category");
    if (param) setSelectedCategories(param.split(","));
  }, [searchParams]);

  const updateSearchParams = (categories) => {
    const query = categories.length
      ? `?category=${categories.join(",")}`
      : "";
    router.push(`/products${query}`);
  };

  const toggleCategory = (category) => {
    const updated = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updated);
    updateSearchParams(updated);
  };

  const clearAll = () => {
    setSelectedCategories([]);
    updateSearchParams([]);
  };

  const filteredProducts =
    selectedCategories.length === 0
      ? allProducts
      : allProducts.filter((product) =>
          selectedCategories.includes(product.category)
        );

  const headingText =
    selectedCategories.length === 0
      ? '"All Products"'
      : `"${selectedCategories.join(", ")}"`;

  return (
    <Suspense>
    <section className="py-20 px-5 lg:px-32 xl:px-40 font-poppins overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Filters Sidebar */}
        <aside className="lg:w-1/4 w-full">
          <h2 className="text-lg font-semibold mb-3">Filters</h2>
          <hr className="mb-3" />

          <div className="mb-4">
            <h3 className="font-medium">Applied Filters</h3>
            {selectedCategories.length > 0 ? (
              <div className="flex items-center justify-between mt-1">
                <div className="flex flex-wrap gap-2">
                  {selectedCategories.map((cat) => (
                    <span
                      key={cat}
                      className="text-xs bg-gray-200 px-2 py-1 rounded"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                <button
                  onClick={clearAll}
                  className="text-xs font-medium underline hover:text-red-500 p-2"
                >
                  Clear All
                </button>
              </div>
            ) : (
              <p className="text-[13px] mt-2 font-normal bg-[#ECEFF1] w-fit px-1 rounded">
                All
              </p>
            )}
          </div>
          <hr className="mb-3" />

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="all-categories"
                name="category"
                className="accent-black"
                checked={selectedCategories.length === 0}
                onChange={clearAll}
              />
              <label htmlFor="all-categories" className="text-sm">
                All
              </label>
            </div>

            {categories.map((cat) => (
              <div key={cat} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={cat}
                  name="category"
                  className="accent-black"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                />
                <label htmlFor={cat} className="text-sm">
                  {cat}
                </label>
              </div>
            ))}
          </div>
        </aside>

        {/* Products Section */}
        <main className="lg:w-3/4 w-full font-poppins">
          <h2 className="text-[28px] lg:text-2xl font-normal mb-5 italic font-roboto">
            {headingText} — {filteredProducts.length} Results
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="p-2 font-poppins">
                <div className="bg-gray-100 h-[265px] flex items-center justify-center mb-4">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.title}
                      className="h-full object-contain"
                    />
                  ) : (
                    <span className="text-gray-400 text-sm">No Image</span>
                  )}
                </div>
                <div className="space-y-2">
                  <p className="text-sm">{product.category}</p>
                  <h3 className="font-medium text-[18px]">{product.title}</h3>
                  <div className="flex justify-between">
                    <p className="text-sm flex gap-1 items-center">
                      <TiStarFullOutline size={20} color="#FFC831" />
                      5.0 (10 Reviews)
                    </p>
                    <p className="text-green-600 font-medium text-[16px]">
                      In Stock
                    </p>
                  </div>
                </div>
                <button className="mt-3 w-full bg-[#F4F4F4] font-medium py-2 text-sm">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </section>
    </Suspense>
  );
};

export default Filters;
