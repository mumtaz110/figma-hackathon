import Image from "next/image"; // Import statement should be at the top

const Header = () => {
  return (
    <div className="bg-[#F2F0F1] w-full h-auto md:h-[663px]">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-[1200px] mx-auto px-4 md:px-8 gap-8">
        {/* Left Section */}
        <div className="text-center  md:text-left">
          <h1 className="text-[36px]  w-[315px] ml-8 md:w-[577px] md:ml-0 leading-[36px] mt-[30px]  md:text-[64px] font-[Integral CF] font-extrabold md:leading-[64px] text-black ">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-base text-gray-600 mt-4 md:w-[577px]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="mt-6 px-8 py-3 bg-black text-white text-lg rounded-full hover:bg-gray-800">
            Shop Now
          </button>

          {/* Items */}
          <div className="mt-7 flex flex-wrap justify-center gap-5">
            <div className="flex flex-col items-center">
              <h3 className="text-black font-bold text-3xl sm:text-4xl">
                200+
              </h3>
              <p className="text-black font-medium text-sm sm:text-base">
                International Brands
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-black font-bold text-3xl sm:text-4xl">
                2,000+
              </h3>
              <p className="text-black font-medium text-sm sm:text-base">
                High-Quality Products
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-black font-bold text-3xl sm:text-4xl">
                30,000+
              </h3>
              <p className="text-black font-medium text-sm sm:text-base">
                Happy Customers
              </p>
            </div>
          </div>
        </div>
        
        {/* Right Section */}
        <div className="flex justify-center md:h-[663px] md:justify-end">
          <Image
            src="/images/Model.jpg"
            alt="Fashion model"
            width={500}
            height={500}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="bg-[#000000] h-[146px] md:h-[146px] w-full flex flex-wrap items-center px-4 md:gap-3">
        <div className="flex flex-wrap justify-center md:justify-between gap-4 md:gap-[100px] mx-auto">
          <Image
            src="/images/Vector 3.png"
            alt="Logo 1"
            width={166}
            height={33}
          />
          <Image
            src="/images/Vector 5.png"
            alt="Logo 2"
            width={91}
            height={38}
          />
          <Image
            src="/images/Vector 1.png"
            alt="Logo 3"
            width={166}
            height={33}
          />
          <Image
            src="/images/Vector 4.png"
            alt="Logo 4"
            width={166}
            height={33}
          />
          <Image
            src="/images/Vector 2.png"
            alt="Logo 5"
            width={166}
            height={33}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
