import React from 'react'
import Image from 'next/image'
import { FaStar, FaStarHalf } from "react-icons/fa";

const TopSelling = () => {
  return (
    <div className='container px-5 py-24 mx-auto'>
        <div className='border-[1px] border-gray-500 w-full '></div>
        
        <div className="flex justify-center items-center font-extrabold mt-[80px] sm:mb-[20px] ">
        <h1 className="text-4xl font-extrabold text-black shadow-sm ">
          Top Selling
        </h1>
      </div>
        
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:mt-[100px] mt-9">
        {/* Card 1 */}
        <div className="bg-[#F0EEED] w-full rounded-md mx-auto p-4">
          <Image
            src="/images/Frame 33.png"
            alt="T-Shirt"
            objectFit="cover"
            width={300}
            height={300}
            className="rounded-md mx-auto"
          />
          <div className="text-center mt-3">
            <h3 className="text-black font-semibold text-lg md:text-xl cursor-pointer hover:text-gray-600">
            VERTICAL STRIPED SHIRT
            </h3>
            <div className="flex justify-center gap-1 mt-1">
              <FaStar className="text-yellow-600" />
              <FaStar className="text-yellow-600" />
              <FaStar className="text-yellow-600" />
              <FaStar className="text-yellow-600" />
              <FaStarHalf className="text-yellow-600" />
              <span className="text-sm">4.5/5</span>
            </div>
            <h3 className="font-semibold text-black text-lg md:text-2xl">
              $212
            </h3>
          </div>
        </div>
        {/* Card end */}
        {/* Card 2 */}
        <div className="bg-[#F0EEED] w-full rounded-md mx-auto p-4">
          <Image
            src="/images/Frame 34.png"
            alt="T-Shirt"
            objectFit="cover"
            width={300}
            height={300}
            className="rounded-md mx-auto"
          />
          <div className="text-center mt-3">
            <h3 className="text-black font-semibold text-lg md:text-xl cursor-pointer hover:text-gray-600">
            COURAGE GRAPHIC T-SHIRT
            </h3>
            <div className="flex justify-center gap-1 mt-1">
              <FaStar className="text-yellow-600" />
              <FaStar className="text-yellow-600" />
              <FaStar className="text-yellow-600" />
              <FaStar className="text-yellow-600" />
              <FaStarHalf className="text-yellow-600" />
              <span className="text-sm">4.5/5</span>
            </div>
            <h3 className="font-semibold text-black text-lg md:text-2xl">
              $145
            </h3>
          </div>
        </div>
        {/* Card end */}
        {/* Card 3 */}
        <div className="bg-[#F0EEED] w-full rounded-md mx-auto p-4">
          <Image
            src="/images/Frame 35.png"
            alt="T-Shirt"
            objectFit="cover"
            width={300}
            height={300}
            className="rounded-md mx-auto"
          />
          <div className="text-center mt-3">
            <h3 className="text-black font-semibold text-lg md:text-xl cursor-pointer hover:text-gray-600">
            LOOSE FIT BERMUDA SHORTS
            </h3>
            <div className="flex justify-center gap-1 mt-1">
              <FaStar className="text-yellow-600" />
              <FaStar className="text-yellow-600" />
              <FaStar className="text-yellow-600" />
              <FaStar className="text-yellow-600" />
              <FaStarHalf className="text-yellow-600" />
              <span className="text-sm">4.5/5</span>
            </div>
            <h3 className="font-semibold text-black text-lg md:text-2xl">
              $80
            </h3>
          </div>
        </div>
        {/* Card end */}
        {/* Card 4 */}
        <div className="hidden md:block bg-[#F0EEED] w-full rounded-md mx-auto p-4">
          <Image
            src="/images/Frame 36.png"
            alt="Jeans"
            objectFit="cover"
            width={300}
            height={300}
            className="rounded-md mx-auto"
          />
          <div className="text-center mt-3">
            <h3 className="text-black font-semibold text-lg md:text-xl cursor-pointer hover:text-gray-600">
            FADED SKINNY JEANS
            </h3>
            <div className="flex justify-center gap-1 mt-1">
              <FaStar className="text-yellow-600" />
              <FaStar className="text-yellow-600" />
              <FaStar className="text-yellow-600" />
              <FaStar className="text-yellow-600" />
              <FaStarHalf className="text-yellow-600" />
              <span className="text-sm">4.5/5</span>
            </div>
            <h3 className="font-semibold text-black text-lg md:text-2xl">
              $210
            </h3>
          </div>
        </div>
      </div>{" "}
      {/* Card end */}
      <div className="flex justify-center mt-8">
        <button className="bg-white text-black border border-black px-[54px] py-[16px] rounded-full hover:bg-gray-100">
          View All
        </button>
    </div>
    </div>
  )
}

export default TopSelling
