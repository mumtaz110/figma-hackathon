import React from "react";

const NewsLater = () => {
  return (
    <div className="bg-black w-full md:w-[1240px] h-auto md:h-[180px] px-4 py-6 md:px-[64px] rounded-md flex flex-col md:flex-row justify-between items-center mx-auto">
      {/* Text Section */}
      <div className="text-center md:text-left md:w-[60%] mb-4 md:mb-0">
        <h1 className="text-xl md:text-3xl font-extrabold text-white">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>
      </div>

      {/* Input and Button Section */}
      <div className="flex flex-col md:flex-row gap-4 items-center md:items-start md:w-[40%]">
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full md:w-auto md:flex-1 h-12 px-4 rounded-full text-sm border-none focus:outline-none"
        />
        <button className="w-full md:w-auto h-12 px-6 bg-white rounded-full font-medium text-black hover:bg-cyan-700 transition-all">
          Subscribe to Newsletter
        </button>
      </div>
    </div>
  );
};

export default NewsLater;
