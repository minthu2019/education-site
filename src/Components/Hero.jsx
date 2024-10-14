import React from "react";
import "../index.css";
import { FaArrowRight } from "react-icons/fa6";
import { easeIn, motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      name="hero"
      className="hero w-full pl-[10%] pr-[10%] flex items-center justify-center"
    >
      <div className="hero-text">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.9, delay: 0.4, ease: "easeInOut" },
          }}
          className="text-6xl font-bold max-md:text-3xl"
        >
          We ensure better{" "}
          <span className=" text-6xl font-bold text-green-600 max-md:text-3xl">Education</span>{" "}
          for a better world
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.9, delay: 0.4, ease: "easeInOut" },
          }}
          className="  m-6 max-md:text-sm"
        >
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills and experiences needed to excel in the dynamic field
          of education.
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.9, delay: 0.4, ease: "easeInOut" },
          }}
          className="btns  items-center justify-center inline-flex gap-2"
        >
          Explore More <FaArrowRight size={16} color=" green" />
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
