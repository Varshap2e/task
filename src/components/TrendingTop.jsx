import React, { useState, useEffect } from "react";
import axios from "axios";

const TrendingTop = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/art") // Replace with your API endpoint
      .then((response) => {
        setData(response.data[0].Trending);
        setIsLoading(false);
        console.log(response.data[0].Trending, "data api");
      })
      .catch((error) => {
        console.error("Error fetching carousel data:", error);
        setIsLoading(false);
      });
  }, []);

  const renderSkeleton = () => {
    // Define the number of skeleton items to display
    const skeletonItemsCount = 5;

    // Create an array of skeleton items
    const skeletonItems = Array.from(Array(skeletonItemsCount).keys());

    return skeletonItems.map((item) => (
      <div
        className="grid grid-cols grid-flow-col auto-cols-max gap-4 animate-pulse"
        key={item}
      >
        <div className="py-6 gap-3 w-3 h-4 bg-gray-300"></div>
        <div className="w-[70px] h-[70px] rounded-md bg-gray-300"></div>
        <div className="grid grid-cols-3 gap-8 place-items-end font-medium">
          <div className="text-md w-[100px] md:w-[230px] capitalize h-[40px] bg-gray-300"></div>
          <div className="bg-gray-300"></div>
          <div className="bg-gray-300"></div>
        </div>
      </div>
    ));
  };

  if (isLoading) {
    return (
      <div className="TreadingItems items-center content-around m-auto w-full overflow-x-auto pb-5">
        {/* Header */}
        <div className="grid grid-flow-row grid-flow-col grid-rows-1 place-items-center">
          <div className="grid grid-cols grid-flow-col auto-cols-max gap-4 ">
            <div className="py-6 gap-3 w-3 h-4 bg-gray-300"></div>
            <div className="w-[70px] h-[70px] rounded-md bg-gray-300"></div>
            <div className="grid grid-cols-3 gap-8 place-items-end font-medium ">
              <div className="text-md w-[100px] md:w-[230px] capitalize h-[40px] bg-gray-300"></div>
              <div className="bg-gray-300"></div>
              <div className="bg-gray-300"></div>
            </div>
          </div>
          <div className="grid grid-cols grid-flow-col auto-cols-max gap-4">
            <div className="py-6 gap-3 w-3 h-4 bg-gray-300"></div>
            <div className="w-[70px] h-[70px] rounded-md bg-gray-300"></div>
            <div className="grid grid-cols-3 gap-8 place-items-end font-medium">
              <div className="text-md w-[100px] md:w-[230px] capitalize h-[40px] bg-gray-300"></div>
              <div className="bg-gray-300"></div>
              <div className="bg-gray-300"></div>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-5 grid-flow-row grid-flow-col gap-2">
          {renderSkeleton()}
        </div>
      </div>
    );
  }

  return (
    <div className="TreadingItems items-center content-around m-auto w-full overflow-x-auto pb-5">
      {/* Header */}
      <div className="grid grid-flow-row grid-flow-col grid-rows-1 place-items-center">
        <div className="grid grid-cols grid-flow-col auto-cols-max gap-4 pr-[28px]">
          <div className="py-6 gap-3 w-3 h-[40px]">#</div>
          <div className="w-[70px] h-[70px] rounded-md object-cover"></div>
          <div className="grid grid-cols-3 gap-8 place-items-end font-medium ">
            <div className="text-md w-[100px] md:w-[230px] capitalize h-[40px]">
              Title
            </div>
            <div className="h-[40px]">Collection</div>
            <div className="h-[40px]">Volume</div>
          </div>
        </div>
        <div className="grid grid-cols grid-flow-col auto-cols-max gap-4">
          <div className="py-6 gap-3 w-3 h-[40px]">#</div>
          <div className="w-[70px] h-[70px] rounded-md object-cover"></div>
          <div className="grid grid-cols-3 gap-8 place-items-end font-medium">
            <div className="text-md w-[100px] md:w-[230px] capitalize h-[40px]">
              Title
            </div>
            <div className="h-[40px]">Collection</div>
            <div className="h-[40px]">Volume</div>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-5 grid-flow-row grid-flow-col gap-2">
        {/* Data Items */}
        {data.map((item) => (
          <div
            className="grid grid-cols grid-flow-col auto-cols-max gap-4"
            key={item.id}
          >
            <div className="py-6 gap-3 w-3 h-[40px]">{item.id}</div>
            <img
              src={item.image}
              className="w-[70px] h-[70px] rounded-md object-cover"
              alt={`Art ${item.id}`}
            />
            <div className="grid grid-cols-3 gap-8 place-items-end font-medium pr-8">
              <div className="text-md w-[100px] md:w-[230px] capitalize h-[40px]">
                {item.title}
              </div>
              <div className="h-[40px]">{item.floor}</div>
              <div className="h-[40px]"> {item.volume}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingTop;
