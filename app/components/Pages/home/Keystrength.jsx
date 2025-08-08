"use client"
import { LayoutGrid, Cpu, Pill } from "lucide-react";
import { motion } from "framer-motion";
import Backgroundmolecule from "@/public/assets/Molecular-bg.png";


const strengths = [
  {
    icon: <LayoutGrid size={30} />,
    badge: "ISO 7, ISO 8",
    title: "Clean Rooms",
    description:
      "Spread over a total area of 1500 sq meters. Safecare manufacturing takes place in the ISO 7, ISO 8 classified clean room environment that has a low level of pollutants such as dust, airborne microbes, aerosol particles and chemical vapours.",
  },
  {
    icon: <Cpu size={30} />,
    badge: "High Tech Automated",
    title: "Storage System",
    description:
      "Safecare holds the unique accomplishment of having the world's finest automated storage system spread over a vast area of 30000 sq ft. The system ensures 100% efficiency in storage without involving any manual interventions.",
  },
  {
    icon: <Pill size={30} />,
    badge: "Made with Supreme",
    title: "Pharma Grade",
    description:
      "Spread over a total area of 1500 sq meters. Safecare manufacturing takes place in the ISO 7, ISO 8 classified clean room environment that has a low level of pollutants such as dust, airborne microbes, aerosol particles and chemical vapours.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function OurKeyStrengths() {
  return (
    <section
      className="bg-no-repeat bg-cover bg-left-top w-full px-4 sm:px-8 md:px-16 lg:px-18 xl:px-40 pt-20 pb-40 overflow-hidden"
      style={{ backgroundImage: `url(${Backgroundmolecule})` }}
    >
      <div className="text-center">
        <h2 className="text-4xl font-roboto lg:text-[44px] font-medium text-[#1E3D69] mb-9">
          Our Key Strengths
        </h2>

        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-20">
            {/* First two cards */}
            {strengths.slice(0, 2).map((item, index) => (
              <motion.div
                key={index}
                className="bg-white hover:bg-[#f0f9ff] shadow-lg rounded-xl font-poppins p-6 border border-gray-100 w-full max-w-[388px] 
                  transition-all duration-300 hover:shadow-blue-300 place-items-center"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
              >
                <div className="w-fit p-2 rounded-[4px] text-[#1E3D69]">
                  {item.icon}
                </div>
                <div className="bg-[#A9D6EB] px-2 py-1 text-[18px] mb-2 ">
                  {item.badge}
                </div>
                <h3 className="text-[28px] font-medium mb-2">{item.title}</h3>
                <p className="text-[16px] text-[#323232]">{item.description}</p>
              </motion.div>
            ))}
            {/* Third card: spans two columns and is centered on md, normal on lg */}
            <motion.div
              key={2}
              className="bg-white hover:bg-[#f0f9ff] shadow-lg rounded-xl font-poppins p-6 border border-gray-100 w-full max-w-[388px] 
                transition-all duration-300 hover:shadow-blue-300 place-items-center
                md:col-span-2 md:col-start-1 md:col-end-3 md:mx-auto lg:col-span-1 lg:col-start-auto lg:col-end-auto"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={2}
            >
              <div className="w-fit p-2 rounded-[4px] text-[#1E3D69]">
                {strengths[2].icon}
              </div>
              <div className="bg-[#A9D6EB] px-2 py-1 text-[18px] mb-2 ">
                {strengths[2].badge}
              </div>
              <h3 className="text-[28px] font-medium mb-2">
                {strengths[2].title}
              </h3>
              <p className="text-[16px] text-[#323232]">
                {strengths[2].description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
