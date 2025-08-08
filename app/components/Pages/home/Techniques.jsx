"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import manfacturing from "@/public/assets/Manufacturing-industry.png";

const Techniques = () => {
  return (
    <section className="py-30 px-5 lg:px-32 xl:px-40 bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
        
        {/* Text Section */}
        <motion.div
          className="max-w-[467px] space-y-5 lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-roboto lg:text-[44px] font-medium text-[#1E3D69]">
            Manufacturing Techniques
          </h2>
          <p className="text-[18px] lg:text-justify lg:text-[20px] font-poppins font-normal leading-normal">
            Our manufacturing includes a wide variety of processes including
            <span className="font-medium">
              {" "}
              Injection moulding, Blow Moulding, Thermoforming etc.{" "}
            </span>
            and all those that are required for a World Class Medical
            Manufacturing Facility.
          </p>
        </motion.div>
        
        {/* Image Section */}
        <motion.div
          className="w-full lg:w-[50%] flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Image
            src={manfacturing}
            alt="Manufacturing"
            className="object-cover max-w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Techniques;
