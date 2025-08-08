"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import news1 from "@/public/assets/news-1.png";
import news2 from "@/public/assets/news-2.png";
import news3 from "@/public/assets/news-3.png";

const NewsAndEvents = () => {
  return (
    <motion.section
      className="py-20 px-5 lg:px-32 xl:px-40 bg-white overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-4xl font-roboto lg:text-[44px] font-normal text-[#1E3D69] mb-9"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        News and Events
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 font-poppins">
        {/* Left Main Card */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-[#F7F7F7] shadow-md rounded-lg overflow-hidden flex flex-col px-5 sm:px-10 py-9 h-full">
            <Image
              src={news1}
              alt="Featured News"
              className="w-full max-h-[400px] object-cover rounded-md"
            />
            <div className="py-10 flex flex-col gap-6 font-normal leading-normal">
              <h3 className="text-[28px]">Improve Workflow With Agile Yoga</h3>
              <p className="text-[18px] lg:text-[20px]">
                Safecare manufacturing takes place in the ISO 7, ISO 8
                classified clean room environment that has a low level of
                pollutants such as dust and chemical vapours.
              </p>
              <motion.button
                whileHover="hover"
                className="mt-1 cursor-pointer font-medium text-[16px] self-start flex items-center gap-2"
              >
                Read More
                <motion.span
                  variants={{
                    hover: { x: 5 },
                    initial: { x: 0 },
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <MoveRight size={23} />
                </motion.span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Right Side Cards */}
        <div className="flex flex-col gap-6 font-normal leading-normal">
          {[news2, news3].map((img, index) => (
            <motion.div
              key={index}
              className="bg-[#F7F7F7] shadow-md rounded-lg overflow-hidden flex flex-col lg:flex-row !xl:flex-wrap p-4 gap-6 lg:px-5 sm:px-10 py-9"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-full lg:w-auto">
                <Image
                  src={img}
                  alt={`News ${index + 2}`}
                  className="w-full max-h-full lg:h-[297px] lg:w-[440px] object-cover rounded-md"
                />
              </div>
              <div className="flex flex-col justify-center gap-4">
                <h3 className="text-[28px]">
                  Improve Workflow With Agile Yoga
                </h3>
                <p className="text-[18px] lg:text-[20px]">
                  Safecare manufacturing takes place in the ISO 7, ISO 8
                  classified clean room environment.
                </p>
                <motion.button
                  whileHover="hover"
                  className="mt-1 cursor-pointer font-medium text-[16px] self-start flex items-center gap-2"
                >
                  Read More
                  <motion.span
                    variants={{
                      hover: { x: 5 },
                      initial: { x: 0 },
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <MoveRight size={23} />
                  </motion.span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default NewsAndEvents;