"use client"
import storageroomimage from "@/public/assets/storage-image.png";
import { motion } from "framer-motion";
import Image from "next/image";

export const StorageRoom = () => {
  return (
    <>
      {/* 2 section */}
      <section className="pb-20 px-5 lg:px-32 xl:px-40 bg-white overflow-hidden">
        <motion.div
          className="flex flex-col-reverse lg:flex-row items-center justify-center lg:items-center h-auto lg:h-[529px] gap-[30px] 2xl:gap-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Text Content */}
          <motion.div
            className="font-poppins text-[#323232] text-[16px] lg:text-[20px] space-y-4 font-normal max-w-xl flex-1 z-10"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-[13px] font-medium bg-[#A9D6EB] w-fit rounded-2xl py-1 px-2">
              High Tech Automated
            </p>
            <h2 className="text-2xl lg:text-[28px] ">Storage System</h2>
            <p className="text-[16px]">
              Safecare holds the unique accomplishment of having the world's
              finest automated storage system spread over a vast area of 30000
              sq ft. The system ensures 100 percent effciency in storage without
              involving any manual interventions
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative w-full max-w-[528px] lg:w-[600px]  flex justify-center items-end"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Rectangle Behind - Only on large screens */}
            <div className="absolute bottom-0 lg:left-[28px] w-[550px] h-[265px] border-[11px] border-[#1E3D69] hidden lg:block z-0"></div>

            {/* Image */}
            <Image
              src={storageroomimage}
              alt="storageroom"
              className="relative z-10 w-[90%] max-w-[528px] h-auto lg:left-10 object-cover lg:bottom-6"
            />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};
