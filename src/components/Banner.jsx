import React from "react";
import Slider from "react-slick";

// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';

const Banner = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="flex justify-center items-center m-0 w-full">
        <h1>banner</h1>
        <div>
          <button>all</button>
          <br />
          <button>all</button>
          <br />
          <button>all</button>
          <br />
          <button>all</button>
          <br />

        </div>
        <div className="bg-green-500 ">
        <h2>Fade</h2>
        <Slider {...settings}>
          <div>
            <img src={img1} />
          </div>
          <div>
            <img src={img2} />
          </div>
          <div>
            <img src={img3} />
          </div>
          <div>
            <img src={img4} />
          </div>
        </Slider>
      </div>
    </div>
);
};
export default Banner;
