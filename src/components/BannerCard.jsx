import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// import { ImageProvider } from "./ImageContext";
// import { useContext } from "react";

const BannerCard = ({ props, color }) => {
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
        slidesPerView={1}
        spaceBetween={10}
        loop
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        autoplay={autoplay}
        className="BannerBtn relative"
      >
        {props.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative drop-shadow-xl rounded-lg overflow-x-auto md:overflow-hidden h-full w-full px-2">
              <div className="w-full h-[90%] w-full rounded-lg overflow-hidden">
                {slide.video ? (
                  <video
                    src={slide.video}
                    alt={`Card ${slide.id}`}
                    className="ImgTrans w-full h-[335px] object-cover rounded-lg "
                    autoPlay
                    loop
                    muted
                  />
                ) : (
                  // <ImageProvider>
                  <img
                    src={slide.image}
                    alt={`Card ${slide.id}`}
                    className="ImgTrans w-full h-[335px] object-cover rounded-lg"
                  />
                  // </ImageProvider>
                )}
                <div className="absolute top-[60%] left-[5%] p-4 text-white hidden lg:block">
                  <h2 className="flex flex-row p-2 text-2xl font-bold">
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
                  <p className="text-lg pl-[10px]">{slide.by}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerCard;
