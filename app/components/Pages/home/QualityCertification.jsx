"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import cert1 from "@/public/assets/cert-1.png";
import cert2 from "@/public/assets/cert-2.png";
import cert3 from "@/public/assets/cert-3.png";
import qualitybg from "@/public/assets/qualitycertification-bg.png";

const QualityCertification = () => {
  return (
    <motion.div
      className="bg-white bg-no-repeat bg-cover bg-center py-30 px-5 lg:px-32 xl:px-40 text-center mt-10 overflow-hidden leading-normal font-normal"
      style={{ backgroundImage: `url(${qualitybg.src})` }} // 🛠️ Important fix
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-4xl font-roboto lg:text-[44px] text-[#1E3D69] mb-[9px]"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        Quality & Certifications
      </motion.h2>

      <motion.p
        className="text-[18px] lg:text-[20px] font-poppins"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
      >
        We do care, for your better tomorrow.
      </motion.p>

      <div className="flex flex-col items-center gap-6 mt-[70px] lg:flex-row lg:justify-center lg:gap-12">
        {/* ✅ Use Image component */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Image
            src={cert1}
            alt="CE Certification"
            className="w-[120px] lg:w-[160px]"
          />
        </motion.div>

        <motion.div
          className="w-12 h-[1.5px] lg:h-[100px] lg:w-[2px]"
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.20) 50%, rgba(0, 0, 0, 0.00) 100%)",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.3 }}
          viewport={{ once: true }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Image
            src={cert2}
            alt="GMP Certification"
            className="w-[120px] lg:w-[160px]"
          />
        </motion.div>

        <motion.div
          className="w-12 h-[1.5px] lg:h-[100px] lg:w-[2px]"
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.20) 50%, rgba(0, 0, 0, 0.00) 100%)",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.3 }}
          viewport={{ once: true }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Image
            src={cert3}
            alt="ISO Certification"
            className="w-[120px] lg:w-[160px]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default QualityCertification;
