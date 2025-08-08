"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // ✅ Import Next.js Image component
import building1 from "@/public/assets/Building-1.png";
import building2 from "@/public/assets/Building-2.png";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Gallery = () => {
  return (
    <>
      {/* Banner */}
      <section className="relative z-0 h-[510px] pt-20 px-5 lg:px-32 xl:px-40 bg-[#F5F5F5] flex justify-center items-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h1
            className="lg:text-[44px] text-4xl font-medium mb-5"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Gallery
          </motion.h1>
          <motion.div
            className="space-x-2 cursor-pointer text-2xl font-roboto font-normal"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/">Home /</Link>
            <span>Gallery</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <section className="relative z-10 -top-20 px-5 lg:px-32 xl:px-40 pt-10">
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-4 lg:gap- bg-white p-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {/* Column 1 */}
          <div className="grid lg:gap-[42px] md:gap-[23px] sm:gap-[18px] gap-5">
            {[building1, building2, building1].map((src, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={src}
                  alt={`Building ${idx + 1}`}
                  className="shadow-md rounded-md hover:shadow-[#1E3D69]"
                />
              </motion.div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="grid sm:gap-4 md:gap-2 xl:gap-6 lg:gap-12 gap-5">
            {[building2, building2].map((src, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={src}
                  alt={`Building ${idx + 4}`}
                  className="shadow-md rounded-md hover:shadow-[#1E3D69]"
                />
              </motion.div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="grid lg:gap-[42px] md:gap-[23px] sm:gap-[18px] gap-5">
            {[building1, building2, building1].map((src, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={src}
                  alt={`Building ${idx + 6}`}
                  className="shadow-md rounded-md hover:shadow-[#1E3D69]"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Gallery;
