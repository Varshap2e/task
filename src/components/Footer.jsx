import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Logo from "../assets/op.svg";

const Footer = () => {
  return (
    <footer className="bg-[#1868B7] text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col items-center justify-center">
            <div className="text-2xl mb-4">Stay in the loop</div>
            <div className="text-center">
              Join our mailing list to stay in the loop with our newest feature
              releases, NFT drops, and tips and tricks for navigating OpenSea.
            </div>
            <br />
            <div>
              <div className="flex flex-col items-center">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Search"
                    className="p-2 border border-gray-300 rounded-md"
                  />
                  <button
                    type="button"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md"
                  >
                    Search
                  </button>
                </div>
                <div className="flex gap-4 mt-4">
                  <div className="flex flex-col">
                    <div className="text-2xl mb-4">Join the community</div>

                    <div className="flex flex-row gap-3 justify-center">
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#3B82F6] p-4 m-2 rounded-md"
                      >
                        <FaFacebook size={24} />
                      </a>
                      <a
                        href="https://www.twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#3B82F6] p-4 m-2 rounded-md"
                      >
                        <FaTwitter size={24} />
                      </a>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#3B82F6] p-4 m-2 rounded-md"
                      >
                        <FaInstagram size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row lg:flex-col justify-center lg:justify-start pt-4 ">
            <div className="flex flex-row items-center lg:items-start gap-3">
              <img src={Logo} className="h-10 w-10" />
              <span className="mt-2"> | </span>
              <div className="mr-4 mt-2 text-xl font-bold">Logo</div>
            </div>
            <div className="text-center lg:text-left">
              The world’s first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items.
            </div>
          </div>
        </div>
        <div className="p-8">
          <div className="flex flex-col md:flex-row justify-start w-full h-1 bg-slate-300"></div>
        </div>

        <div className="flex flex-row gap-6 text-sm">
          <div>
            <p className="mb-2">Address: 123 Main Street, City, Country</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p>Email: info@example.com</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between pt-4">
          <div className="flex flex-col justify-evenly gap-2">
            <div className="flex flex-row gap-3">
              <img src={Logo} className="h-10 w-10 " />
              <span className="mt-2"> | </span>
              <div className="mr-4 mt-2 text-xl font-bold">Logo</div>
            </div>

            <div className="text-justify">
              The world’s first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items.
            </div>
          </div>
          <div className="text-sm">
            <p className="mb-2">Address: 123 Main Street, City, Country</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p>Email: info@example.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
