import React, { useState, useEffect } from "react";
import axios from "axios";

const TrendingTop = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/art") // Replace with your API endpoint
      .then((response) => {
        setData(response.data[0].Trending);
        console.log(response.data[0].Trending, "data api");
      })
      .catch((error) => {
        console.error("Error fetching carousel data:", error);
      });
  }, []);

  return (
    <div className="TreadingItems items-center m-auto w-full px-2  overflow-x-auto pb-5">
      <div className="grid grid-rows-5 grid-flow-row grid-flow-col  gap-2">
        {data.map((item) => (
          <div
            className="grid grid-cols grid-flow-col auto-cols-max  gap-4"
            key={item.id}
          >
            <div className="py-6 gap-3 w-3 h-4">{item.id}</div>
            <img
              src={item.image}
              className="w-[70px] h-[70px] rounded-md object-cover"
            />
            <div className="grid grid-cols-3 gap-8 place-items-end font-medium">
              <div className="text-md  w-[100px] md:w-[230px] capitalize  h-[40px]">
                {item.title}
              </div>
              <div className="">{item.floor}</div>
              <div>{item.volume}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingTop;
