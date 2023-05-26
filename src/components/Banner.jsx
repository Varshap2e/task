import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = ({ props, numberOfSLides }) => {
  const [slidNumber, setSlidNumber] = useState(numberOfSLides);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidNumber,
    slidesToScroll: 1,
  };

  return (
    <div className="px-6 py-6 ">
      <Slider {...settings}>
        {props.map((slide) => (
          <div
            key={slide.id}
            className="bg-gray-800 relative  rounded overflow-hidden h-full w-full " // Added mx-2 class for horizontal gap
          >
            <img
              src={slide.image}
              alt={`Card ${slide.id}`}
              className="w-full rounded-md"
            />
            <div className="absolute top-[80%] left-[12%] transform -translate-x-1/2 -translate-y-1/2 text-white text-left">
              <img
                src={slide.image}
                className="h-12 w-12 rounded-md border-4 border-inherit "
              />
              <h2 className="text-2xl font-bold">{slide.title}</h2>
              <p className="text-lg">{slide.by}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
