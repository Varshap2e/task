import React from "react";
import Col1 from "../assets/col1.jpeg";

const TrendingTop = () => {
  return (
    <div>
      <h1>TrendingTop</h1>
      <div className="flex justify-between py-5">
        <div>
          <button>Trending</button>
          <span> | </span>
          <button>Top</button>
        </div>
        <div className="flex flex-row gap-3">
          <div className="relative inline-block">
            <div className="block appearance-none bg-white border border-gray-300 rounded-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <button>1h</button>
              <button>2h</button>
              <button>3h</button>
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
      {/* underline */}
      <div>
        <div className="flex flex-col md:flex-row justify-start"></div>
      </div>
      {/* trending list */}

      <div className="grid grid-rows-6 grid-flow-col gap-4">
        <div className="grid grid-cols-5 grid-flow-col gap-4">
          <div>#</div>
          <div>collection</div>

          <div>floor price</div>
          <div>volume</div>
        </div>
        <div className="grid grid-cols-5 grid-flow-col gap-4">
          <div>01</div>
          <div>
            <img src="#" />
          </div>
          <div>
            {" "}
            <h4>Saved Souls</h4>
            <p>Floor:0.09 ETH</p>
          </div>

          <div>0.09 ETH</div>
        </div>
        <div className="grid grid-cols-5 grid-flow-col gap-4">
          <div>01</div>
          <div>
            <img src="#" />
          </div>
          <div>
            {" "}
            <h4>Saved Souls</h4>
            <p>Floor:0.09 ETH</p>
          </div>

          <div>0.09 ETH</div>
        </div>
        <div className="grid grid-cols-5 grid-flow-col gap-4">
          <div>01</div>
          <div>
            <img src="#" />
          </div>
          <div>
            {" "}
            <h4>Saved Souls</h4>
            <p>Floor:0.09 ETH</p>
          </div>

          <div>0.09 ETH</div>
        </div>
        <div className="grid grid-cols-5 grid-flow-col gap-4">
          <div>01</div>
          <div>
            <img src="#" />
          </div>
          <div>
            {" "}
            <h4>Saved Souls</h4>
            <p>Floor:0.09 ETH</p>
          </div>

          <div>0.09 ETH</div>
        </div>
        <div className="grid grid-cols-5 grid-flow-col gap-4">
          <div>01</div>
          <div>
            <img src="#" />
          </div>
          <div>
            {" "}
            <h4>Saved Souls</h4>
            <p>Floor:0.09 ETH</p>
          </div>

          <div>0.09 ETH</div>
        </div>

        <div className="grid grid-cols-5 grid-flow-col gap-4">
          <div>#</div>
          <div>collection</div>

          <div>floor price</div>
          <div>volume</div>
        </div>
        <div className="grid grid-cols-5 grid-flow-col gap-4">
          <div>01</div>
          <div>
            <img src={Col1} className="h-20 w-20 rounded-md" />
          </div>
          <div>
            {" "}
            <h4>Saved Souls</h4>
            <p>Floor:0.09 ETH</p>
          </div>

          <div>0.09 ETH</div>
        </div>
        <div className="grid grid-cols-5 grid-flow-col gap-4">
          <div>01</div>
          <div>
            <img src="#" />
          </div>
          <div>
            {" "}
            <h4>Saved Souls</h4>
            <p>Floor:0.09 ETH</p>
          </div>

          <div>0.09 ETH</div>
        </div>
        <div className="grid grid-cols-5 grid-flow-col gap-4">
          <div>01</div>
          <div>
            <img src="#" />
          </div>
          <div>
            {" "}
            <h4>Saved Souls</h4>
            <p>Floor:0.09 ETH</p>
          </div>

          <div>0.09 ETH</div>
        </div>
        <div className="grid grid-cols-5 grid-flow-col gap-4">
          <div>01</div>
          <div>
            <img src="#" />
          </div>
          <div>
            {" "}
            <h4>Saved Souls</h4>
            <p>Floor:0.09 ETH</p>
          </div>

          <div>0.09 ETH</div>
        </div>
        <div className="grid grid-cols-5 grid-flow-col gap-4">
          <div>01</div>
          <div>
            <img src="#" />
          </div>
          <div>
            {" "}
            <h4>Saved Souls</h4>
            <p>Floor:0.09 ETH</p>
          </div>

          <div>0.09 ETH</div>
        </div>
      </div>
    </div>
  );
};

export default TrendingTop;
