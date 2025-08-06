"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import NurseImg1 from "@/public/assets/Nurse-1.png";

const About = () => {
  return (
    <section className="relative z-[30] sm:px-10 mt-10 lg:-mt-4 xl:-mt-10 px-5 lg:px-35 xl:px-50 overflow-hidden">
      <div className="mx-auto bg-white py-[66px] px-5 flex flex-col lg:flex-row items-center justify-center font-normal leading-normal font-poppins gap-6 lg:gap-[100px]">

        {/* Nurse Image */}
        <motion.div
          className="max-w-sm w-full"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 18,
            duration: 0.8,
          }}
          viewport={{ once: true }}
        >
          <Image
            src={NurseImg1}
            alt="Nurse"
            className="w-full h-auto object-cover shadow-lg rounded-2xl"
            width={400}
            height={500}
            priority
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="space-y-4 max-w-xl text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 18,
            delay: 0.15,
            duration: 0.8,
          }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-4xl lg:text-[44px] font-roboto text-[#1E3D69]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 16,
              delay: 0.25,
              duration: 0.7,
            }}
            viewport={{ once: true }}
          >
            Who we are?
          </motion.h1>

          <motion.p
            className="text-[18px] lg:text-[20px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 16,
              delay: 0.35,
              duration: 0.7,
            }}
            viewport={{ once: true }}
          >
            <span className="font-medium">Safecare Medical Industries</span> was
            conceived and established in 2016 to bring a new dimension to the
            medical industry across the Middle East.
          </motion.p>

          <motion.button
            className="text-white bg-[#1E3D69] px-6 py-2 cursor-pointer rounded"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#8fabd2",
              transition: { duration: 0.3 },
            }}
            transition={{
              delay: 0.3,
              duration: 0.3,
            }}
            viewport={{ once: true }}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
