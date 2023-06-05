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
        cssMode={true}
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
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
      >
        {carouselData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className=" py-4 px-2">
              <div className="flex flex-col w-full max-w-sm bg-white border border-gray-200 rounded-lg drop-shadow-sm dark:bg-gray-800 dark:border-gray-700 overflow-hidden hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 hover:cursor-pointer">
                <img
                  src={slide.image}
                  alt={`Card ${slide.id}`}
                  className="rounded-t-lg h-[150px] w-full object-cover"
                />
                <div className="h-[100px] lg:max-h-96 max-w-full overflow-hidden m-2 px-2 pt-2">
                  <div className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <h3 className="flex flex-row text-xl font-bold h-[65px] capitalize">
                      {slide.title}
                      {slide.tick ? (
                        <img
                          className="w-[1.5rem] h-[1.5rem]"
                          src={slide.tick}
                          alt=""
                        />
                      ) : (
                        <div className="w-[1.5rem] h-[1.5rem]"></div>
                      )}
                    </h3>
                  </div>
                  <div className="flex flex-row  flex-end justify-between items-stretch">
                    <div className="text-md self-end ">{slide.floor}</div>
                    <div className="text-md self-end">{slide.volume}</div>
                  </div>
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
