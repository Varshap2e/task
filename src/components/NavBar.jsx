import React, { useState, useEffect } from "react";
import Logo from "../assets/op.svg";
import {
  FaRegUserCircle,
  FaBars,
  FaTimes,
  FaShoppingCart,
  FaSearch,
  FaWallet,
} from "react-icons/fa";
import Bg from "../assets/banner1.jpg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpend, setIsDropdownOpend] = useState(false);
  const [isDropdownOpens, setIsDropdownOpens] = useState(false);
  const [isCardOpend, setisCardOpend] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleCard = () => {
    setisCardOpend(!isCardOpend);
  };

  const toggleProfileMenu = () => {
    setIsDropdownOpend(!isDropdownOpend);
  };

  const toggleProfileMenus = () => {
    setIsDropdownOpens(!isDropdownOpens);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setIsOpen(false); // Close the mobile menu when switching to desktop view
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial screen size

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav
        className={`${
          isScrolled ? "bg-white" : "bg-blue-100"
        } w-full text-black nm sticky top-0 z-50`}
      >
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center justify-evenly gap-3">
            <div className="flex flex-row mr-3 gap-2">
              {isMobile && ( // Only render the hamburger menu button on mobile
                <div className="flex items-center">
                  <button
                    className="focus:outline-none"
                    onClick={toggleMenu}
                    onMouseEnter={toggleMenu}
                    onBlur={() => setIsDropdownOpend(false)}
                  >
                    {isOpen ? <FaTimes /> : <FaBars />}
                  </button>
                </div>
              )}
              <img src={Logo} className="h-10 w-10" alt="Logo" />
              <div className="mr-3 mt-2 text-xl font-bold">Logo</div>
              <span className="mt-2 mr-5 h-[10px] hidden md:inline"> | </span>
            </div>

            <div className="relative inline-block hidden lg:block">
              <button
                className="bg-transparent text-black-300 font-semibold pt-2 px-4 focus:outline-none"
                onClick={toggleDropdown}
                onBlur={() => setIsDropdownOpen(false)}
                onMouseEnter={toggleDropdown}
              >
                Menu
              </button>
              {isDropdownOpen && (
                <div className="absolute z-10 mt-2 bg-white rounded-md shadow-lg">
                  <ul className="py-2">
                    <li className="text-black-300 px-4 py-2" src="#">
                      Menu 1
                    </li>
                    <li className="text-black-300 px-4 py-2" src="#">
                      Menu 2
                    </li>
                    <li className="text-black-300 px-4 py-2" src="#">
                      Menu 3
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="relative inline-block hidden lg:block">
              <button
                className="bg-transparent text-black-300 font-semibold pt-2 px-4 focus:outline-none"
                onClick={toggleCard}
                onBlur={() => setisCardOpend(false)}
                onMouseEnter={toggleCard}
              >
                Cards
              </button>
              {isCardOpend && (
                <div className="absolute z-10 mt-2 bg-white rounded-md shadow-lg">
                  <ul className="py-2">
                    <li className="text-black-300 px-4 py-2" src="#">
                      Menu 1
                    </li>
                    <li className="text-black-300 px-4 py-2" src="#">
                      Menu 2
                    </li>
                    <li className="text-black-300 px-4 py-2" src="#">
                      Menu 3
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="px-4 py-2 w-[30px] sm:w-[380px] md:w-[485px] lg:w-[488px] xl:w-[748px] 2xl:[800px] rounded-lg bg-gray-700 text-white focus:outline-none focus:bg-gray-600"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                {/* Search Icon */}
                <FaSearch />
              </button>
            </div>

            <div className="flex flex-row px-2 lg:border-2 rounded-lg">
              <div className="flex flex-row py-2 gap-2 hidden lg:block">
                <div className="text-basic font-medium w-[130px]">
                  Connect Wallet
                </div>
              </div>
              <div className="ml-1 pl-1 relative lg:border-l-2">
                <button
                  className="focus:outline-none my-auto h-full w-auto"
                  onClick={toggleProfileMenu}
                  onBlur={() => setIsDropdownOpend(false)}
                  onMouseEnter={toggleProfileMenu}
                >
                  <div className="h-8 w-8 flex items-center justify-around scale-150">
                    <FaRegUserCircle />
                  </div>
                </button>
                {isDropdownOpend && (
                  <div className="absolute z-10 mt-2 bg-white rounded-lg shadow-lg">
                    <ul className="py-2">
                      <li className="text-black-300 px-4 py-2" src="#">
                        Profile
                      </li>
                      <li className="text-black-300 px-4 py-2" src="#">
                        Settings
                      </li>
                      <li className="text-black-300 px-4 py-2" src="#">
                        Logout
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div>
              {/* cart button */}
              <div className="ml-1 pl-1 relative lg:border-l-2">
                <button
                  className="focus:outline-none my-auto h-full w-auto"
                  onClick={toggleProfileMenus}
                  // onBlur={() => setIsDropdownOpens(false)}
                  onMouseEnter={toggleProfileMenus}
                >
                  <div className="focus:outline-none h-8 w-8 flex items-center justify-around scale-150">
                    <FaShoppingCart />
                  </div>
                </button>
                {isDropdownOpens && (
                  <div>
                    {/* cart button */}
                    <div className="ml-1 pl-1 relative lg:border-l-2">
                      <button
                        className="focus:outline-none my-auto h-full w-auto"
                        onClick={toggleProfileMenus}
                        // onBlur={() => setIsDropdownOpens(false)}
                        // onMouseEnter={toggleProfileMenus}
                      >
                        <div className="focus:outline-none h-8 w-8 flex items-center justify-around scale-150">
                          <FaShoppingCart />
                        </div>
                      </button>
                      {isDropdownOpens && (
                        <div className="fixed right-0 top-0 bottom-0 z-10 w-64 bg-white rounded-l-lg shadow-lg">
                          <div className="p-6">
                            <h5 className="flex flex-row justify-between mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                              ADD Items{" "}
                              <div onClick={toggleProfileMenus}>
                                <FaTimes />
                              </div>
                            </h5>
                          </div>

                          <div className="flex flex-col m-auto pb-4 font-normal text-center text-gray-700 dark:text-gray-400">
                            items
                            <button
                              className="p-4  bg-blue-500  text-white rounded-b-lg hover:bg-blue-600"
                              onClick={toggleProfileMenus} // Add onClick event to close the sidebar
                            >
                              complete purches
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
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
