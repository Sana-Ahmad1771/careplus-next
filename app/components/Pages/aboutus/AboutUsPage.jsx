"use client"

import aboutbg from "@/public/assets/unsplash_12Tdn6oLvSU.png";
import vissionbg from "@/public/assets/bg-about-vission.png";
import { motion } from "framer-motion";
import Link from "next/link";

export const AboutUsPage = () => {
  return (
    <>
      {/* Top Banner */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-cover bg-no-repeat bg-center min-h-[60vh] 2xl:min-h-[65vh] lg:min-h-[100vh] flex flex-col justify-center items-center 2xl:items-center 2xl:justify-start 2xl:pt-44 font-roboto text-[#121212] relative px-5 overflow-hidden"
        style={{ backgroundImage: `url(${aboutbg.src})` }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:text-[44px] text-4xl font-medium mb-5"
        >
          About Us
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="space-x-2 lg:text-2xl text-[16px] font-normal"
        >
          <Link href="/">Home /</Link>
          <a href="#aboutUs">About Us /</a>
          <a href="#overView">Overview</a>
        </motion.div>
      </motion.div>

      {/* Who We Are Section */}
      <motion.section
        className="px-5 lg:px-36 xl:px-50"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="bg-white font-normal relative w-fit lg:-mt-[100px] 2xl:-mt-[100px] z-30 lg:px-8 pt-4 lg:pt-12 lg:pb-40 my-12">
          <h2 className="font-roboto text-center lg:text-left lg:text-[42px] text-4xl mb-[36px]">
            Who We Are?
          </h2>
          <div className="text-[16px] lg:text-[20px] text-justify font-poppins space-y-6">
            <p>
              Safecare Medical Industries was conceived and established in the
              year of 2016 by Bin Ali group that plans to give a different
              dimension to the medical industries all across the Middle East.
            </p>
            <p>
              Headquartered in Abu Dhabi UAE, SafeCare is a Domestic Profit
              Corporation providing quality Medical plastic consumable products
              across all GCC countries. With its registered subsidiary factories
              and subsidiary offices across the UK, USA, Germany, and China,
              SafeCare thrives on producing and providing quality medical
              products across the globe.
            </p>
            <p>
              Safe care Medical Industries has built a worldwide reputation for
              providing high quality plastic consumables over the years. With a
              production area of 6000 square meters, we manufacture all of our
              products in a controlled environment called Clean Room of class
              10000(IS0 7) and 100000(ISO 8). Our manufacturing includes a wide
              variety of processes including Injection moulding, Blow Moulding,
              Thermoforming etc. and all those that are required for a world
              class medical manufacturing facility.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <section className="pb-30 px-5 lg:px-32 xl:px-40">
        <div className="flex flex-col md:flex-row h-auto md:h-[502px] flex-wrap">
          {/* Mission */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-[#1E3D69] text-white flex justify-center flex-col font-normal lg:p-10 px-5 py-10 w-full md:w-1/2"
          >
            <h2 className="text-[44px] mb-2 font-roboto">Our Mission</h2>
            <p className="font-poppins">
              Our mission is to become an admired, customer-friendly, and
              innovative medical solutions provider.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-no-repeat bg-cover  flex justify-center flex-col lg:p-10 px-5 py-10 w-full md:w-1/2 font-normal flex-wrap"
            style={{ backgroundImage: `url(${vissionbg.src})` }}
          >
            <h2 className="text-[44px] mb-2 font-roboto">Our Vision</h2>
            <p className="font-poppins">
              Safecare Medical Industries exists to improve human life quality
              through affordable and reliable innovations.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};
