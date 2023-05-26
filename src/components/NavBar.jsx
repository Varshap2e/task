import React from "react";
import Logo from "../assets/op.svg";
import { FaRegUserCircle, FaBars, FaTimes } from "react-icons/fa";
import Bg from "../assets/banner1.jpg";

import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-transparent w-full text-black nm">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex justify-evenly gap-2">
              <img src={Logo} className="h-10 w-10 " alt="Logo" />
              <span className="mt-2"> | </span>
              <div className="mr-4 mt-2 text-xl font-bold">Logo</div>
            </div>

            <ul className="hidden md:flex space-x-4 mt-2">
              <li className="text-black-300">Menu 1</li>
              <li className="text-black-300">Menu 2</li>
              <li className="text-black-300">Menu 3</li>
            </ul>
          </div>

          <div className="flex items-center">
            <div className="relative md:hidden">
              <button className="focus:outline-none" onClick={toggleDropdown}>
                {isOpen ? (
                  /* Close Icon */
                  <FaTimes />
                ) : (
                  /* Hamburger Menu Icon */
                  <FaBars />
                )}
              </button>
            </div>

            <div className="hidden md:flex items-center ml-4">
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
                <button className="focus:outline-none" onClick={toggleDropdown}>
                  {/* Profile Icon */}
                  <FaRegUserCircle />
                </button>
              </div>

              <div className="ml-4">
                <button className="focus:outline-none">
                  {/* Cart Icon */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="absolute md:hidden top-[60px] right-0 left-0">
          <ul className="w-full bg-red-200 rounded-lg shadow-lg">
            <li className="py-2 px-4 hover:bg-black">Profile</li>
            <li className="py-2 px-4 hover:bg-black">Settings</li>
            <li className="py-2 px-4 hover:bg-black">Logout</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
