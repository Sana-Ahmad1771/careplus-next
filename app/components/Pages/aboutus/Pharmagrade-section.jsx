"use client"
import pharmagradeimage from "@/public/assets/pharmagradeimage.png";
import { motion } from "framer-motion";
import Image from "next/image";

export const OurKeyStrength = () => {
  return (
    <>
      {/* 3 section*/}
            <section className="pb-20 px-5 lg:px-32 xl:px-40 overflow-hidden">
              <motion.div
                className="flex flex-col lg:flex-row items-center justify-center gap-[30px] 2xl:gap-32 h-auto lg:h-[586px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Image Section */}
                <motion.div
                  className="relative w-full max-w-[528px] flex justify-center items-end lg:w-[528px] lg:h-[586px]"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Rectangle Behind */}
                  <div className="absolute bottom-0 lg:left-[28px] w-[319px] h-[265px] border-[11px] border-[#1E3D69] hidden lg:block z-0"></div>
      
                  {/* Main Image */}
                  <Image
                    src={pharmagradeimage}
                    alt="Clean Room"
                    className="relative z-10 w-[90%] max-w-[528px] lg:bottom-7 lg:left-7 h-auto object-cover"
                  />
                </motion.div>
                {/* Text Section */}
                <motion.div
                  className="font-poppins text-[#323232] text-[16px] lg:text-[20px] space-y-4 text-justify font-normal max-w-xl flex-1 z-10"
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <p className="text-[13px] font-medium bg-[#A9D6EB] w-fit rounded-2xl py-1 px-2">
                    Classified ISO 7, ISO 8
                  </p>
                  <h2 className="text-2xl lg:text-[28px]">Clean Rooms</h2>
                  <p>
                    Spread over a total area of 1500 sq meters. Safecare manufacturing
                    takes place in the ISO 7 and ISO 8 classified clean room
                    environment that has a low level of pollutants such as dust,
                    airborne microbes, aerosol particles, and chemical vapors.
                  </p>
                </motion.div>
              </motion.div>
            </section>
    </>
  );
};
