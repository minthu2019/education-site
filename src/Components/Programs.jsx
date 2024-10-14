import React from "react";
import programPhoto1 from "../assets/programPhoto1.jpg";
import programPhoto2 from "../assets/programPhoto2.jpg";
import programPhoto3 from "../assets/programPhoto3.jpg";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const programsArrays = [
  {
    id: 1,
    title: "School Library",
    image: programPhoto1,
  },
  {
    id: 2,
    title: "Master Degree",
    image: programPhoto2,
  },
  {
    id: 3,
    title: "Gradulation",
    image: programPhoto3,
  },
];

const Programs = () => {
  return (
    <div className="w-full pl-[15%] pr-[15%] mx-auto my-10 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.9, delay: 0.4, ease: "easeInOut" },
        }}
        name="program"
        className="program"
      >
        {programsArrays.map((programsArray) => {
          return (
            <motion.div
              key={programsArray.id}
              initial={{ x: 200 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.4, delay: 0.3, ease: "easeInOut" },
              }}
              className="  max-md:w-[200px]  "
            >
              <div className="programs ">
                <img
                  src={programsArray.image}
                  className="h-[350px] w-full rounded-xl bg-center bg-cover max-md:w-[200px]"
                  alt={programsArray.title}
                />
                <div className="caption">
                  <h2 className="text-3xl max-md:text-2xl font-bold">
                    {programsArray.title}
                  </h2>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Programs;
