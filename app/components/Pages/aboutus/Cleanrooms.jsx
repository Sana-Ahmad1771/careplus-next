"use client"
import cleanroomimage from "@/public/assets/Clean-room-img.png";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const CleanRoom = () => {
  return (
    <>
      <section className="lg:pt-20 px-5 lg:px-32 xl:px-40 bg-white overflow-hidden">
        <motion.div
          className="text-center font-normal mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h1 className="lg:text-[44px] text-4xl mb-5 text-[#1E3D69] font-roboto">
            Our Key Strengths
          </h1>
          <p className="text-[16px] lg:text-[20px] font-poppins max-w-2xl mx-auto">
            Who are in extremely love with eco-friendly system.
          </p>
        </motion.div>
      </section>
      {/*Section 1*/}
      <section className="pb-20 px-5 lg:px-32 xl:px-40">
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
            <div className="absolute bottom-0 lg:left-[28px] w-[319px] h-[586px] border-[11px] border-[#1E3D69] hidden lg:block z-0"></div>

            {/* Main Image */}
            <Image
              src={cleanroomimage}
              alt="Clean Room"
              className="relative z-10 w-[90%] max-w-[528px] lg:bottom-12 lg:left-6 h-auto object-cover"
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

export default CleanRoom;
