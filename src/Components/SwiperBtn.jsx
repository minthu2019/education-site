import React from "react";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const SwiperBtn = ({leftbtnstyle,rightbtnstyle}) => {
    const swiper = useSwiper();
  return (
    <div className="changebtn">
      <button
        className={leftbtnstyle}
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold className=" text-black" />
      </button>
      <button
        className={rightbtnstyle}
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold className=" text-black" />
      </button>
    </div>
  );
};

export default SwiperBtn;
