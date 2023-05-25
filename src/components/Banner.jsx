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
    <div className="px-6 py-6 bg-gray-800">
      <Slider {...settings}>
        {props.map((slide) => (
          <div
            key={slide.id}
            className="bg-gray-800 p-4 mx-2  rounded overflow-hidden h-full w-full " // Added mx-2 class for horizontal gap
          >
            <img
              src={slide.image}
              alt={`Card ${slide.id}`}
              className="w-full rounded-md"
            />
            <h3 className="text-xl text-white font-bold">{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
