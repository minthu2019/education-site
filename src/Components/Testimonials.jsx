import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide, } from "swiper/react";
import "swiper/css";

import Testimonials1 from "../assets/Testimonials1.jpg";
import Testimonials2 from "../assets/Testimonials2.jpg";
import Testimonials3 from "../assets/Testimonials3.jpg";
import Testimonials4 from "../assets/Testimonials4.jpg";
import Testimonials5 from "../assets/Testimonials5.jpg";
import Testimonials6 from "../assets/Testimonials6.jpg";
import SwiperBtn from "./SwiperBtn";

const studentSays = [
  {
    id: "slide1",
    firstImage: Testimonials1,
    firstName: "Willian Jackson",
    firstTitle: "Edusity,USA",
    firstDescription: `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              perspiciatis. Quasi porro veritatis illum architecto quo sequi
              debitis accusantium. Eum consectetur esse laborum quae quisquam
              iste soluta placeat nihil animi?`,
    
  },
  {
    id: "slide2",
    firstImage: Testimonials3,
    firstName: "Jackson Tiger",
    firstTitle: "College ",
    firstDescription: `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              perspiciatis. Quasi porro veritatis illum architecto quo sequi
              debitis accusantium. Eum consectetur esse laborum quae quisquam
              iste soluta placeat nihil animi?`,
  },
  {
    id: "slide3",
    firstImage: Testimonials5,
    firstName: "Harler Madd",
    firstTitle: "Student Add",
    firstDescription: `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              perspiciatis. Quasi porro veritatis illum architecto quo sequi
              debitis accusantium. Eum consectetur esse laborum quae quisquam
              iste soluta placeat nihil animi?`,
    
  },
  {
    id: "slide4",
    firstImage: Testimonials2,
    firstName: "Zaw Paing Htun",
    firstTitle: "Canada",
    firstDescription: `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                        perspiciatis. Quasi porro veritatis illum architecto quo sequi
                        debitis accusantium. Eum consectetur esse laborum quae quisquam
                        iste soluta placeat nihil animi?`,
  },
  {
    id: "slide5",
    firstImage: Testimonials4,
    firstName: "Minthu Khaing",
    firstTitle: "Edusity, Yangon",
    firstDescription: `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                        perspiciatis. Quasi porro veritatis illum architecto quo sequi
                        debitis accusantium. Eum consectetur esse laborum quae quisquam
                        iste soluta placeat nihil animi?`,
  },
  {
    id: "slide6",
    firstImage: Testimonials6,
    firstName: "MinHtet Aung",
    firstTitle: "Edusity,Wekkik",
    firstDescription: `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                        perspiciatis. Quasi porro veritatis illum architecto quo sequi
                        debitis accusantium. Eum consectetur esse laborum quae quisquam
                        iste soluta placeat nihil animi?`,
  }
];


const Testimonials = () => {
  const btnRef = useRef();
  const [leftbtnstyle, setLeftbtnstyle] = useState("btn btn-circle bg-gray-400");
  const [rightbtnstyle, setRightbtnstyle] = useState("btn btn-circle bg-blue-400");

  const [studentSay, setStudentSay] = useState(studentSays[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    if (currentIndex === 0 ){
      setLeftbtnstyle('btn btn-circle bg-gray-400')
    }else{
      setLeftbtnstyle('btn btn-circle bg-blue-400')
    }

    if (currentIndex === 5 ){
      setRightbtnstyle('btn btn-circle bg-gray-400')
    }else{
      setRightbtnstyle("btn btn-circle bg-blue-400")
    }

    setStudentSay(studentSays[currentIndex]);
  };

  return (
    <motion.div 
      name="testimonials"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 0.9, delay: 0.4, ease: "easeIn" },
      }}
      className="testimonials"
    >
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        onSlideChange={handleSlideChange}
        className=" w-full  "
      >
        {/* slide 1 */}
        {studentSays.map((slideArray) => {
          return (
            <SwiperSlide id={slideArray.id} key={slideArray.id}>
              <div className=" flex items-center justify-center  ">
                <div className="card ">
                  <div className="flex gap-3 ">
                    <img src={slideArray.firstImage} className="cardImage" />
                    <div className="cardText">
                      <h1>{slideArray.firstName}</h1>
                      <h3>{slideArray.firstTitle}</h3>
                    </div>
                  </div>

                  <p className="w-full">{slideArray.firstDescription}</p>
                </div>
                {/* <div className="card">
                  <div className="flex gap-3 ">
                    <img src={slideArray.secondImage} className="cardImage" />
                    <div className="cardText">
                      <h1>{slideArray.secondName}</h1>
                      <h3>{slideArray.secondTitle}</h3>
                    </div>
                  </div>

                  <p className="w-full">{slideArray.secondDescription}</p>
                </div> */}
              </div>

              {/* slide button */}
              <SwiperBtn  leftbtnstyle={leftbtnstyle} rightbtnstyle={rightbtnstyle}/>

            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};

export default Testimonials;
