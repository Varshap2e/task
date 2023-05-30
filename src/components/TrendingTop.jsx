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
    <div className="items-center m-auto w-full px-2  overflow-x-auto md:overflow-hidden pb-5">
      {/* <div className="flex justify-between py-5">
        <div>
          <button className="text-2xl font-bold text-blue-500 hover:text-blue-700">
            Trending
          </button>
          <span> | </span>
          <button className="text-2xl font-bold text-blue-500 hover:text-blue-700">
            Top
          </button>
        </div>
        <div className="flex flex-row gap-3">
          <div className="relative inline-block">
            <div className="block appearance-none bg-white border border-gray-300 rounded-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 flex gap-2">
              <button>1h</button>
              <div className="border-r border-gray-300 h-6"></div>
              <button>2h</button>
              <div className="border-r border-gray-300 h-6"></div>
              <button>3h</button>
              <div className="border-r border-gray-300 h-6"></div>
              <button>4h</button>
            </div>
          </div>

          <div>
            <div className="relative inline-block">
              <select className="block appearance-none bg-white border border-gray-300 rounded-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M6 8l4 4 4-4" />
                </svg>
              </div>
            </div>
          </div>
          <div className="block appearance-none bg-white border border-gray-300 rounded-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <button>view all</button>
          </div>
        </div>
      </div>

      <div className="pb-8">
        <div className="flex flex-col md:flex-row justify-start w-full h-1 bg-slate-300"></div>
      </div> */}

      {/* <div className="">
        <div className="">
          one
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
        <div>
          two
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
      </div> */}

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
              <div className="text-md  w-[100px] md:w-[132px] capitalize  h-[40px]">
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
