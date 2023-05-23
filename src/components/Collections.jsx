import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Collections = () => {
  const carouselData = [
    {
      id: 1,
      image: "path/to/image1.jpg",
      title: "Card 1",
      description: "This is the description of Card 1.",
    },
    {
      id: 2,
      image: "path/to/image2.jpg",
      title: "Card 2",
      description: "This is the description of Card 2.",
    },
    {
      id: 3,
      image: "path/to/image3.jpg",
      title: "Card 3",
      description: "This is the description of Card 3.",
    },
    {
      id: 4,
      image: "path/to/image4.jpg",
      title: "Card 4",
      description: "This is the description of Card 4.",
    },
    {
      id: 5,
      image: "path/to/image5.jpg",
      title: "Card 5",
      description: "This is the description of Card 5.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="px-6 py-6 bg-red-200">
      <Slider {...settings}>
        {carouselData.map((slide) => (
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

export default Collections;
