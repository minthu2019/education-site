import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScorolled, setIsScrolled] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
    console.log(!navbarOpen);
  };

  const handleScrolled = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrolled);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 0.4, ease: "easeIn" },
      }}
      className={` ${
        isScorolled && " bg-blue-500 bg-opacity-80"
      }  navbar max-md:px-[2%] max-md:py-0`}
    >
      <div className="flex gap-2">
        <img className="w-[20px] max-md:h-[30px]" src={logo} alt="logo" />
        <p className="max-md:flex max-md:flex-col max-md:text-sm">
          Education{" "}
          <span className="max-md:text-[10px] max-md:text-gray-300">Site</span>
        </p>
      </div>

      {/* max-md:hidden */}
      <ul className=" flex items-center justify-center gap-4 max-md:hidden">
        <li className=" navlink ">
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li className=" navlink ">
          <Link to="program" smooth={true} offset={-198} duration={500}>
            Program
          </Link>
        </li>
        <li className=" navlink ">
          <Link to="about" smooth={true} offset={-124} duration={500}>
            About us
          </Link>
        </li>
        <li className=" navlink ">
          <Link to="campus" smooth={true} offset={-198} duration={500}>
            Campus
          </Link>
        </li>
        <li className=" navlink ">
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li className=" navlink ">
          <button className="btns">
            <Link to="contact" smooth={true} offset={50} duration={500}>
              Contact us
            </Link>
          </button>
        </li>
      </ul>

      {/* max-md:block */}
      <div className="hidden max-md:block items-center" onClick={handleNavbar}>
        <AiOutlineMenu size={20} />
      </div>

      {/* overlay */}
      {navbarOpen && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.4, delay: 0.4, ease: "easeIn" },
          }}
          className="absolute max-md:block hidden top-0 right-0 w-[50%] h-screen bg-black"
        >
          <div onClick={handleNavbar}>
            <AiOutlineClose size={20} className="absolute top-4 right-4" />
            <div className=" flex items-center justify-center flex-col">
              <ul className="flex items-center justify-center flex-col gap-10 h-screen">
                <li className=" navlink ">
                  <Link to="hero" smooth={true} offset={0} duration={500}>
                    Home
                  </Link>
                </li>
                <li className=" navlink ">
                  <Link to="program" smooth={true} offset={-198} duration={500}>
                    Program
                  </Link>
                </li>
                <li className=" navlink ">
                  <Link to="about" smooth={true} offset={-124} duration={500}>
                    About us
                  </Link>
                </li>
                <li className=" navlink ">
                  <Link to="campus" smooth={true} offset={-198} duration={500}>
                    Campus
                  </Link>
                </li>
                <li className=" navlink ">
                  <Link
                    to="testimonials"
                    smooth={true}
                    offset={-260}
                    duration={500}
                  >
                    Testimonials
                  </Link>
                </li>
                <li className=" navlink ">
                  <button className="btns">
                    <Link to="contact" smooth={true} offset={50} duration={500}>
                      Contact us
                    </Link>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
