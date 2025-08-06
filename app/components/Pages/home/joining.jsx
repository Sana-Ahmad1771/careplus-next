"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import joiningbg from "@/public/assets/Joining-bg.png";

const JoiningSafeCare = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    console.log("Email submitted:", email);
    // Add your API call or logic here
    setEmail("");
  };

  return (
    <div
      className="py-10 px-5 lg:px-32 xl:px-40 font-roboto bg-no-repeat lg:bg-center sm:bg-left bg-left bg-cover text-center flex flex-col lg:flex-row items-center justify-between overflow-hidden font-normal"
      style={{ backgroundImage: `url(${joiningbg.src})` }}
    >
      <p className="text-2xl leading-normal text-[#fff]">
        Join our newsletter to
        <br />
        keep up to date with us!
      </p>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row items-center gap-4 text-[#fff] mt-5 lg:mt-0">
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="border-2 border-[rgba(255,255,255,0.90)] bg-[rgba(247,247,247,0.60)] font-medium text-[#ffff] text-[16px] px-4 py-2 rounded-md w-72 focus:outline-none focus:ring-3 focus:ring-blue-400"
          />
          <motion.button
            type="submit"
            className="bg-[#1FBAFC] cursor-pointer font-inter font-medium px-6 py-2 rounded-md"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#1E3D69",
              transition: { duration: 0.3 },
            }}
            viewport={{ once: true }}
          >
            Submit
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default JoiningSafeCare;
