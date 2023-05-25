import React from "react";
import Logo from "../assets/op.svg";
import { FaBeer } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="bg-black-800 w-full text-white overflow-auto top-0 left-0 right-0 nm ">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex justify-evenly gap-2">
            <img src={Logo} className="h-10 w-10 " />
            <span className="mt-2"> | </span>
            <div className="mr-4 mt-2 text-xl font-bold">Logo</div>
          </div>

          <ul className="flex space-x-4 mt-2">
            <li className="text-black-300">Menu 1</li>
            <li className="text-black-300">Menu 2</li>
            <li className="text-black-300">Menu 3</li>
          </ul>
        </div>
        <div className="flex items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:bg-gray-600"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
              {/* Search Icon */}
            </button>
          </div>
          <div className="ml-4 relative">
            <button className="focus:outline-none">
              {/* Profile Icon */} bur
              <FaBeer />
            </button>
            <ul className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg hidden">
              <li className="py-2 px-4 hover:bg-white-100">Profile</li>
              <li className="py-2 px-4 hover:bg-white-100">Settings</li>
              <li className="py-2 px-4 hover:bg-white-100">Logout</li>
            </ul>
          </div>
          <div className="ml-4">
            <button className="focus:outline-none">{/* Cart Icon */}</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
