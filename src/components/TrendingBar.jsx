import React, { useState } from "react";

const TrendingBar = () => {
  const [activeButton, setActiveButton] = useState("trending");
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState("1h");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  return (
    <div className="flex flex-col">
      <div className="flex justify-between py-6">
        {/* trending and top button */}
        <div>
          <button
            className={`text-2xl font-bold text-blue-500 hover:text-blue-700  ${
              activeButton === "trending" ? "border-b-4 border-slate-950" : ""
            }`}
            onClick={() => handleButtonClick("trending")}
          >
            Trending
          </button>
          <span> | </span>
          <button
            className={`text-2xl font-bold text-blue-500 hover:text-blue-700  ${
              activeButton === "top" ? " border-b-4 border-slate-950" : ""
            }`}
            onClick={() => handleButtonClick("top")}
          >
            Top
          </button>
        </div>

        <div className="flex md:flex-row">
          {/* hr and options */}
          <div className="flex flex-col md:flex-row  gap-3 ">
            <div className="relative inline-block">
              {isDropdownOpen ? (
                <div className="block appearance-none bg-white border border-gray-300 rounded-lg py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 absolute z-10 w-32">
                  <button
                    className="block w-full text-left hover:bg-gray-100 py-1 px-2"
                    onClick={() => handleOptionSelect("1h")}
                  >
                    1h
                  </button>
                  <button
                    className="block w-full text-left hover:bg-gray-100 py-1 px-2"
                    onClick={() => handleOptionSelect("2h")}
                  >
                    2h
                  </button>
                  <button
                    className="block w-full text-left hover:bg-gray-100 py-1 px-2"
                    onClick={() => handleOptionSelect("3h")}
                  >
                    3h
                  </button>
                  <button
                    className="block w-full text-left hover:bg-gray-100 py-1 px-2"
                    onClick={() => handleOptionSelect("4h")}
                  >
                    4h
                  </button>
                </div>
              ) : (
                <div className="block appearance-none bg-white border border-gray-300 rounded-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 flex gap-2">
                  <button onClick={toggleDropdown}>{selectedOption}</button>
                  <div className="border-r border-gray-300 h-6"></div>
                  <button onClick={toggleDropdown}>
                    <svg
                      className="fill-current text-gray-600 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M10 14l6-6H4l6 6z" />
                    </svg>
                  </button>
                </div>
              )}
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
          </div>
          <div className=" block appearance-none bg-white border border-gray-300 rounded-lg py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <button>view all</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingBar;
