"use client"
import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { PiShoppingCartSimpleBold } from "react-icons/pi";


const Navbar = () => {
  //  mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white">
      {/* Top Black Line */}
      <div className="text-center py-2 text-sm">
        Sign up and get 20% off on your first order.{" "}
        <a href="#" className="underline">
          Sign Up Now
        </a>
      </div>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
        {/* Left Section - Hamburger Icon and Logo */}
        <div className="flex items-center">
          {/* Hamburger Icon */}
          <button
            className="text-black md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* Replace this icon with your preferred library */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <div className="text-4xl font-bold ml-4 text-black">SHOP.CO</div>
        </div>

        {/*Links */}
        <div className="hidden md:flex space-x-8 text-gray-700">
          <a href="#" className="hover:text-black">
            Shop
          </a>
          <a href="#" className="hover:text-black">
            On Sale
          </a>
          <a href="#" className="hover:text-black">
            New Arrivals
          </a>
          <a href="#" className="hover:text-black">
            Brands
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
         
          <div className="hidden md:block ">
            <input
              type="text"
              placeholder="Search for products..."
              className="border border-gray-300 rounded-full w-[577px] h-[48px] px-4 py-2 gap-2"
            />
          </div>
          {/* Icons */}
          <div className="flex space-x-4 text-gray-700">
            <button className="md:hidden">
            <IoSearchSharp className="w-[24px] h-[24px]" />
            </button>
          <button>
              <PiShoppingCartSimpleBold className="w-[24px] h-[24px] hover:text-red-600" />
            </button>
            <button>
              <FaRegUserCircle className="w-[24px] h-[24px] hover:text-red-600"/>

            </button>
            
          </div>
        </div>
      </nav>

      
      {isMenuOpen && (
        <div className="md:hidden bg-white text-black">
          <ul className="space-y-4 p-4">
            <li>
              <a href="#" className="block hover:text-gray-700">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-gray-700">
                On Sale
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-gray-700">
              New Arrivals
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-gray-700">
                Brands
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
