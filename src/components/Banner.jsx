import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Banner = ({ props, numberOfSLides }) => {
  const [slidNumber, setSlidNumber] = useState(numberOfSLides);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidNumber,
    slidesToScroll: 1,
    prevArrow: <FaChevronLeft />,
    nextArrow: <FaChevronRight />,
  };

  return (
    <div className="px-6 py-6 ">
      <Slider {...settings}>
        {props.map((slide) => (
          <div
            key={slide.id}
            className=" relative  rounded overflow-x-auto md:overflow-hidden h-full w-full px-2" // Added mx-2 class for horizontal gap
          >
            <div className="w-full rounded-md h-full w-[90%]">
              <video
                src={slide.video}
                alt={`Card ${slide.id}`}
                className="w-full h-80 object-cover rounded-lg"
                autoPlay
                loop
                muted
              />
            </div>
            {slidNumber === 1 && (
              <div className="absolute top-[80%] left-[12%] transform -translate-x-1/2 -translate-y-1/2 text-white text-left">
                <img
                  src={slide.image}
                  className="h-12 w-12 rounded-md border-4 border-inherit "
                />
                <h2 className="text-2xl font-bold">{slide.title}</h2>
                <p className="text-lg">{slide.by}</p>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
