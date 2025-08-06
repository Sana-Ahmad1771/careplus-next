"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Images
import product1 from "@/public/assets/product-1.png";
import product2 from "@/public/assets/product-2.png";
import product3 from "@/public/assets/product-3.png";
import product4 from "@/public/assets/product-4.png";

// Product data
const products = [
  { title: "Surgical Packs", image: product1 },
  { title: "Sterile Drapes", image: product2 },
  { title: "Surgical Kits", image: product3 },
  { title: "CSSD Wrappers", image: product4 },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const ProductSection = () => {
  return (
    <section className="pt-28 pb-20 px-5 lg:px-32 xl:px-40 leading-normal bg-white overflow-hidden">
      {/* Heading */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-roboto lg:text-[44px] font-medium text-[#1E3D69]">
          Our Product Category
        </h2>
        <p className="text-[18px] lg:text-[20px] font-poppins font-normal mt-6 max-w-4xl mx-auto">
          Our solutions encompass the entire gamut of healthcare delivery,
          ranging from: Turnkey solutions, Surgical, Clinical, Life Sciences,
          Laboratory Medicine etc.
        </p>
      </motion.div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
        {products.map((item, index) => (
          <motion.div
            key={index}
            className="flex justify-center"
            custom={index}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-[308px] relative shadow-md rounded-lg overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.title}
                className="w-full object-cover rounded"
                placeholder="blur"
              />
              <div className="absolute bottom-0 left-0 w-full font-poppins bg-[#A9D6EBE5] text-[#1E3D69] text-[18px] font-medium text-center py-2 hover:bg-[#7eb9d4e5] transition duration-300">
                {item.title}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
