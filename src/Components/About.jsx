import React from "react";
import AboutImage from "../assets/about.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div name="about" className="about">
      <motion.div
        initial={{ x: -300 }}
        whileInView={{
          x: 0,
          transition: { duration: 0.4, delay: 0.4, ease: "easeIn" },
        }}
        className="about-left"
      >
        <img src={AboutImage} alt="about image" />
      </motion.div>
      
      <motion.div
        initial={{ x: 300 }}
        whileInView={{
          x: 0,
          transition: { duration: 0.4, delay: 0.4, ease: "easeIn" },
        }}
        className="about-right"
      >
        <h3>About University</h3>
        <h2>Nurturing tomorrow's leaders today</h2>
        <p>
          Education is the foundation for personal and societal growth. It
          provides individuals with knowledge, skills, and values that are
          essential for personal development and success. Through education,
          people can explore various fields, develop critical thinking, and
          solve complex problems
        </p>
        <p>
          In addition, education fosters social awareness and understanding . It
          helps individuals learn about different cultures, histories, and
          perspectives, promoting empathy and tolerance in society. An educated
          population can work together to create more inclusive and prosperous
          communities.
        </p>
        <p>
          Ultimately, education is a lifelong journey. It empowers individua ls
          to adapt to changing environments, pursue passions, and contribut e
          positively to the world around them.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
