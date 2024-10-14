import React from "react";
import { motion } from "framer-motion";

const Title = ({ subtitle, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 1, delay: 0.5, ease: "easeInOut" },
      }}
      className=" flex items-center justify-center flex-col gap-2 my-10"
    >
      <p className="text-sm uppercase font-normal">{subtitle}</p>
      <p className=" capitalize text-4xl max-md:text-3xl text-green-500 font-bold">{title}</p>
    </motion.div>
  );
};

export default Title;
