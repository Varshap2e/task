import React, { useState } from "react";

const TrendingBar = () => {
  const [activeButton, setActiveButton] = useState("trending");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  return (
    <div className="flex flex-col">
      <div className="flex justify-between py-8">
        <div>
          <button
            className={`text-2xl py-5 font-bold text-blue-500 hover:text-blue-700  ${
              activeButton === "trending" ? "border-b-4 border-slate-950" : ""
            }`}
            onClick={() => handleButtonClick("trending")}
          >
            Trending
          </button>
          <span> | </span>
          <button
            className={`text-2xl py-5 font-bold text-blue-500 hover:text-blue-700  ${
              activeButton === "top" ? " border-b-4 border-slate-950" : ""
            }`}
            onClick={() => handleButtonClick("top")}
          >
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
          <div className="block appearance-none bg-white border border-gray-300 rounded-lg py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <button>view all</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingBar;
