import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "268b66ec-c656-4144-b3d4-f1b056fa16d9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error("You cannot send message");
    }
  };
  return (
    <div name="contact" className="contact">
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.9, delay: 0.4, ease: "easeInOut" },
        }}
        className="contact-col-left"
      >
        <h3>
          Send us a message
          <RiMessage2Fill size={35} color="#22C55E" />
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          fuga est dolor consequuntur ad porro nesciunt unde amet officia cumque
          fuga est dolor consequuntur ad porro nesciunt unde amet officia
          cumque?
        </p>
        <ul>
          <li>
            <IoMdMail color="blue" />
            Contact@MinThu.dev
          </li>
          <li>
            <FaPhoneVolume color="blue" />
            +123 456 789
          </li>
          <li>
            <FaMapMarkerAlt color="blue" />
            Yangon, KungYanGone, Kamalar Villege <br /> Myanmay South, Yangon
          </li>
        </ul>
      </motion.div>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.9, delay: 0.4, ease: "easeInOut" },
        }}
        className="contact-col-right"
      >
        <form onSubmit={onSubmit}>
          <label className="text-sm text-gray-500 font-normal">
            {" "}
            Your name
          </label>
          <input
            type="text"
            className=""
            name="name"
            placeholder="Enter your name"
            required
          />

          <label> Phone Number </label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />

          <label> Write your message here </label>
          <textarea
            name="message"
            role="6"
            placeholder="Enter your message"
            required
          ></textarea>

          <button type="submit" className="btn contactbtn">
            <p className="text-white">Submit</p>
            <FaArrowRight size={12} color=" white" />
          </button>
        </form>
        <div>
          <Toaster position="bottom-right" />
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
