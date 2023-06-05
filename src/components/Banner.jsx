import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

const Banner = ({ props, numberOfSlides, color }) => {
  const autoplay = {
    delay: 3000, // Delay between slides in milliseconds
    disableOnInteraction: false, // Enable/disable autoplay on user interaction
  };

  return (
    <div className="px-6 py-6 bg-transparent">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        cssMode={true}
        navigation={true}
        slidesPerView={numberOfSlides}
        spaceBetween={10}
        loop
        autoplay={autoplay}
        className="BannerBtn relative"
      >
        {props.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative drop-shadow-xl rounded-lg overflow-x-auto md:overflow-hidden h-full w-full px-2">
              <div className="w-full h-full w-[90%]">
                {slide.video ? (
                  <video
                    src={slide.video}
                    alt={`Card ${slide.id}`}
                    className="w-full h-[500px] object-cover rounded-lg"
                    autoPlay
                    loop
                    muted
                  />
                ) : (
                  <img
                    src={slide.image}
                    alt={`Card ${slide.id}`}
                    className="w-full h-[500px] object-cover rounded-lg"
                  />
                )}
                <div className="absolute top-[60%] left-[5%] p-4 text-white">
                  <img
                    src={slide.image}
                    className="h-12 w-12 drop-shadow-xl rounded-lg border-4 border-inherit"
                    alt={`Card ${slide.id}`}
                  />
                  <h2 className="flex flex-row text-2xl font-bold">
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
                  </h2>
                  <p className="text-lg">{slide.by}</p>
                </div>
                <div>
                  <button className="absolute top-[80%] right-[5%] py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    view all
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
