import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-500 py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:place-items-start place-items-center">
          <div>
            <h1 className="text-center md:text-left text-2xl ">
              Stay in the loop
            </h1>
            <p className="text-center md:text-left">
              Join our mailing list to stay in the loop with our newest feature
              releases, NFT drops, and tips and tricks for navigating OpenSea.
            </p>
            <div className="flex justify-center md:justify-start pt-4 pb-4">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
              />
              <button className="bg-blue-500 text-white rounded-r px-4 py-2 ml-1">
                Search
              </button>
            </div>
          </div>
          <div>
            <h1 className="text-2xl pb-4">Join the community</h1>
            <div className="flex items-center">
              <a
                href="#"
                className="text-white bg-[#3B82F6] p-4 rounded-md hover:text-gray-200 mr-4"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-white bg-[#3B82F6] p-4 rounded-md hover:text-gray-200 mr-4"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-white bg-[#3B82F6] p-4 rounded-md hover:text-gray-200 mr-4"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="flex flex-col md:flex-row justify-start w-full h-1 bg-slate-300"></div>
        </div>

        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full sm:w-auto order-1 sm:order-2">
            <ul className="flex flex-wrap justify-center sm:justify-start -mb-4">
              <li className="mb-4 sm:mb-0">
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-400 text-sm mr-4"
                >
                  About
                </a>
              </li>
              <li className="mb-4 sm:mb-0">
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-400 text-sm mr-4"
                >
                  Careers
                </a>
              </li>
              <li className="mb-4 sm:mb-0">
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-400 text-sm mr-4"
                >
                  Blog
                </a>
              </li>
              <li className="mb-4 sm:mb-0">
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-400 text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-auto order-1 sm:order-2">
            <div className="text-center sm:text-right">
              <p className="text-xs">
                &copy; 2023 OpenSea. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
