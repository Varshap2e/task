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
            className="bg-white p-4 mx-2" // Added mx-2 class for horizontal gap
          >
            <img src={slide.image} alt={`Card ${slide.id}`} />
            <h3 className="text-xl font-bold">{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
