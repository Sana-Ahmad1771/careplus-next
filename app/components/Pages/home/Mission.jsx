"use client"; // if you're using it in a client component

import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section className="z-[10] relative sm:px-10 -mt-16 mx-auto px-5 lg:px-32 xl:px-40 overflow-hidden">
      <div
        className="bg-[#ECECEC] mx-auto px-3 bg-no-repeat bg-right pt-17"
        style={{ backgroundImage: `url('/assets/Nurse-bg.png')` }}
      >
        <div className="flex flex-col lg:flex-row items-center min-h-[623px] pt-3">
          {/* Text Section */}
          <motion.div
            className="max-w-[650px] mt-20 lg:mx-24 p-5 xl:p-10 border-l-[5.399px] font-normal leading-normal border-[#1E3D69] bg-white/70 backdrop-blur-[7.56px] relative mb-6 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="bg-[#A9D6EB] py-3 px-6 font-roboto absolute -top-12 left-0 lg:-left-10 text-3xl text-[#1E3D69]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Our Mission
            </motion.span>

            <motion.p
              className="font-poppins text-[21px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="font-medium">Advancing Life</span> – That’s what
              we at Safecare aim to do. With our products & our focus every day,
              it’s our goal to push boundaries for the benefit of those who rely
              on our care the most.
            </motion.p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="/assets/Nurse-2.png"
              alt="Nurse"
              className="max-w-full max-h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
