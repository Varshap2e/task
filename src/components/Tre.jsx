import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Tre = () => {
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

  return (
    <div className="CollBtn">
      <div className="text-2xl font-bold p-2 my-4">
        Asian American & Pacific Islander Heritage Month Spotlight
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          800: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
      >
        {carouselData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="bg-white py-4 px-2">
              <div className="flex flex-col w-full max-w-sm bg-white border border-gray-200 rounded-lg drop-shadow-sm dark:bg-gray-800 dark:border-gray-700 overflow-hidden hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 hover:cursor-pointer">
                <img
                  src={slide.image}
                  alt={`Card ${slide.id}`}
                  className="rounded-t-lg h-[150px] w-full object-cover"
                />
                <div className="h-[100px] lg:max-h-96 max-w-full overflow-hidden m-2 px-2 pt-2">
                  <div className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <h3 className="text-2xl font-bold capitalize">
                      {slide.title}
                    </h3>
                  </div>
                  <h6>{slide.floor}</h6>
                  <h6>{slide.volume}</h6>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Tre;
