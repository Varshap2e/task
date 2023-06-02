import React, { useState, useEffect } from "react";
import axios from "axios";
import Banner from "./Banner";
import TabCaro from "./TabCaro";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    console.log("useffect lopala");
    axios
      .get("http://localhost:8000/art") // Replace with your API endpoint
      .then((response) => {
        console.log("response ", response);
        setCarouselData(response.data[0].video);
        console.log(response.data[0].video, "data api");
      })
      .catch((error) => {
        console.error("Error fetching carousel data:", error);
      });
  }, []);

  // console.log("carouselData", carouselData);
  // const carouselData = [
  //   {
  //     id: 1,
  //     image: "path/to/image1.jpg",
  //     title: "Card 0",
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

  // const carouselData2 = [
  //   {
  //     id: 1,
  //     image: "path/to/image1.jpg",
  //     title: "Card 9",
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

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const shouldEnableScroll = (numberOfSlides) => {
    return numberOfSlides === 4;
  };

  return (
    <div className="w-full bg-transparent">
      <div className="TabsDiv flex  overflow-x-auto md:overflow-hidden justify-start flex-row gap-2 md:gap-0 pl-4 pt-4 container">
        <button
          className={`px-4 py-2 mx-2 rounded ${
            activeTab === "all"
              ? "bg-trasparent text-white"
              : "bg-gray-100 text-gray-600"
          }`}
          onClick={() => handleTabClick("all")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded ${
            activeTab === "arts"
              ? "bg-trasparent text-white"
              : "bg-gray-100 text-gray-600"
          }`}
          onClick={() => handleTabClick("arts")}
        >
          Arts
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded ${
            activeTab === "gaming"
              ? "bg-trasparent text-white"
              : "bg-gray-100 text-gray-600"
          }`}
          onClick={() => handleTabClick("gaming")}
        >
          Gaming
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded ${
            activeTab === "pictures"
              ? "bg-trasparent text-white"
              : "bg-gray-100 text-gray-600"
          }`}
          onClick={() => handleTabClick("pictures")}
        >
          Pictures
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded ${
            activeTab === "maintaining"
              ? "bg-trasparent text-white"
              : "bg-gray-100 text-gray-600"
          }`}
          onClick={() => handleTabClick("maintaining")}
        >
          Maintaining
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded ${
            activeTab === "vectors"
              ? "bg-trasparent text-white"
              : "bg-gray-100 text-gray-600"
          }`}
          onClick={() => handleTabClick("vectors")}
        >
          Vectors
        </button>
      </div>

      <div className="mt-4">
        {activeTab === "all" && (
          <div className="">
            {/* Replace with your Carousel component */}

            <Banner props={carouselData} numberOfSLides={1} />
          </div>
        )}
        {activeTab === "arts" && (
          <div>
            {/* Replace with your Carousel component */}

            <Banner props={carouselData} numberOfSLides={4} />
          </div>
        )}
        {activeTab === "gaming" && (
          <div>
            {/* Replace with your Carousel component */}

            <Banner props={carouselData} numberOfSLides={4} />
          </div>
        )}
        {activeTab === "pictures" && (
          <div>
            {/* Replace with your Carousel component */}

            <Banner props={carouselData} numberOfSLides={2} />
          </div>
        )}
        {activeTab === "maintaining" && (
          <div
            className={`p-4 ${
              shouldEnableScroll(1) ? "overflow-x-scroll" : ""
            }`}
          >
            {/* Replace with your Carousel component */}

            <Banner props={carouselData2} numberOfSLides={4} />
          </div>
        )}
        {activeTab === "vectors" && (
          <div>
            {/* Replace with your Carousel component */}

            <Banner props={carouselData2} numberOfSLides={3} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
