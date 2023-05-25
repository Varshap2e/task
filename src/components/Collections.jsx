import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Collections = () => {
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/art") // Replace with your API endpoint
      .then((response) => {
        setCarouselData(response.data[0].Trending);
      })
      .catch((error) => {
        console.error("Error fetching carousel data:", error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      <div className="px-6 carousel my-12 mx-auto">
        <h2 className="text-2xl font-bold">Collection</h2>
        <Slider {...settings}>
          {carouselData.map((slide) => (
            <div
              key={slide.id}
              className="bg-white p-4 mx-2 " // Added mx-2 class for horizontal gap
            >
              <div className="flex flex-col w-fit max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                <img
                  src={slide.image}
                  alt={`Card ${slide.id}`}
                  className="rounded-t-lg h-80 w-full"
                />
                <div className="p-5  h-[137px] lg:max-h-96  max-w-full overflow-hidden">
                  <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <h3 className="text-xl font-bold">{slide.title}</h3>
                  </div>
                  <h6>{slide.floor}</h6>
                  <h6>{slide.volume}</h6>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Collections;
