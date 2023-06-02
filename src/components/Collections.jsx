import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SkeletonLoader = () => {
  return (
    <SwiperSlide>
      <div className="bg-white py-4 px-2">
        <div className="flex flex-col w-full max-w-sm bg-white border border-gray-200 rounded-lg drop-shadow-sm dark:bg-gray-800 dark:border-gray-700 overflow-hidden animate-pulse">
          <div className="h-[150px] w-full bg-gray-200"></div>
          <div className="h-[100px] lg:max-h-96 max-w-full overflow-hidden m-2 px-2 pt-2">
            <div className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <h3 className="text-xl font-bold bg-gray-200 h-8 w-3/4 mb-4"></h3>
            </div>
            <h6 className="bg-gray-200 h-5 w-1/2 mb-2"></h6>
            <h6 className="bg-gray-200 h-5 w-1/3 mb-2"></h6>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 bg-gray-200 h-4 w-full"></p>
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
};

const Collections = () => {
  const [carouselData, setCarouselData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/art") // Replace with your API endpoint
      .then((response) => {
        setCarouselData(response.data[0].Trending);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching carousel data:", error);
        setIsLoading(false);
      });
  }, []);

  const handleSwiper = (swiper) => {
    // Enable smooth slide transition on swipe
    swiper.params.effect = "slide";
    swiper.params.fadeEffect = {
      crossFade: true,
    };
    swiper.update();
  };

  return (
    <div className="CollBtn">
      <div className="text-2xl font-bold p-2 my-4">
        Top Collector Buys Today
      </div>
      {isLoading ? (
        <div>
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
        </div>
      ) : (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          cssMode={true}
          spaceBetween={0}
          navigation
          onSwiper={handleSwiper}
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
                      <h3 className="text-xl font-bold h-[65px] capitalize">
                        {slide.title}
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
      )}
    </div>
  );
};

export default Collections;
