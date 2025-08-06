"use client"; // Required if using in app directory and client-side components

import { motion } from "framer-motion";

const History = () => {
  return (
    <section className="bg-white py-20 px-5 lg:px-32 xl:px-40 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Image Section */}
        <motion.div
          className="max-w-full lg:w-1/2"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/assets/History-1-img.png" // ✅ Correct path (without /public)
            alt="Our History"
            className="w-full h-auto object-cover rounded-xl shadow-md"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="max-w-[650px] lg:w-1/2 flex flex-col gap-6 font-normal leading-normal"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="text-[#1E3D69] font-roboto bg-[#A9D6EB] px-4 py-2 text-[20px] w-fit"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Our History
          </motion.span>

          <motion.h1
            className="text-4xl font-roboto lg:text-[44px] text-[#1E3D69]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Safecare Medical Industries
          </motion.h1>

          <motion.p
            className="font-poppins lg:text-justify text-[18px] lg:text-[20px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Headquartered in Abu Dhabi, UAE, Safecare is a Domestic Profit
            Corporation providing quality medical plastic consumable products
            across all GCC countries. With registered subsidiary factories and
            offices in the UK, USA, Germany, and China, Safecare thrives on
            delivering quality medical products across the globe.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default History;
