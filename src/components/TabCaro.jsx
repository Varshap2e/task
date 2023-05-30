import React, { useState } from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Banner = ({ props, numberOfSLides }) => {
  const [slidNumber, setSlidNumber] = useState(numberOfSLides);

  return (
    <div className="px-6 py-6 ">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          640: {
            slidesPerView: slidNumber,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: slidNumber,
            spaceBetween: 10,
          },
          800: {
            slidesPerView: slidNumber,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: slidNumber,
            spaceBetween: 10,
          },
        }}
      >
        {props.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="relative rounded overflow-hidden h-full w-full px-2" // Added mx-2 class for horizontal gap
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
                  className="h-12 w-12 rounded-md border-4 border-inherit"
                  alt={`Slide ${slide.id}`}
                />
                <h2 className="text-2xl font-bold">{slide.title}</h2>
                <p className="text-lg">{slide.by}</p>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
