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

  // const carouselData = [
  //   {
  //     id: 1,
  //     image: "path/to/image1.jpg",
  //     title: "Card 1",
  //     description: "This is the description of Card 1.",
  //   },
  //   {
  //     id: 2,
  //     image: "path/to/image2.jpg",
  //     title: "Card 2",
  //     description: "This is the description of Card 2.",
  //   },
  //   {
  //     id: 3,
  //     image: "path/to/image3.jpg",
  //     title: "Card 3",
  //     description: "This is the description of Card 3.",
  //   },
  //   {
  //     id: 4,
  //     image: "path/to/image4.jpg",
  //     title: "Card 4",
  //     description: "This is the description of Card 4.",
  //   },
  //   {
  //     id: 5,
  //     image: "path/to/image5.jpg",
  //     title: "Card 5",
  //     description: "This is the description of Card 5.",
  //   },
  // ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div className="px-6 py-6">
      <Slider {...settings}>
        {carouselData.map((slide) => (
          <div
            key={slide.id}
            className="bg-white p-4 mx-2" // Added mx-2 class for horizontal gap
          >
            <div className="flex flex-col w-fit">
              <img src={slide.image} alt={`Card ${slide.id}`} />
              <div className="flex flex-col w-20 h-10">
                <h3 className="text-xl font-bold">{slide.title}</h3>
                <h6>{slide.floor}</h6>
                <h6>{slide.volume}</h6>
                <p>{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Collections;
