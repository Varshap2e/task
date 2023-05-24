import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-black-800 w-full text-white overflow-auto top-0 left-0 right-0 nm ">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-3 text-xl font-bold">Logo</div>
          <ul className="flex space-x-4">
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
            <button className="focus:outline-none">{/* Profile Icon */}</button>
            <ul className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg hidden">
              <li className="py-2 px-4 hover:bg-gray-100">Profile</li>
              <li className="py-2 px-4 hover:bg-gray-100">Settings</li>
              <li className="py-2 px-4 hover:bg-gray-100">Logout</li>
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
