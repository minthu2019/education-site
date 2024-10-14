import React from "react";
import campus1 from "../assets/campus1.jpg";
import campus2 from "../assets/campus2.jpg";
import campus3 from "../assets/campus3.jpg";
import campus4 from "../assets/campus4.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

const Campus = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 0.9, delay: 0.4, ease: "easeInOut" },
      }}
      name="campus"
      className="campus"
    >
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.9, delay: 0.4, ease: "easeInOut" },
        }}
        className="gallery"
      >
        <img src={campus1} alt="campus1" />
        <img src={campus2} alt="campus2" />
        <img src={campus3} alt="campus3" />
        <img src={campus4} alt="campus4" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.9, delay: 0.4, ease: "easeInOut" },
        }}
        className="btn campusBtn"
      >
        <p className="text-white">See more here</p>
        <FaArrowRight size={12} color=" white" />
      </motion.div>
    </motion.div>
  );
};

export default Campus;
