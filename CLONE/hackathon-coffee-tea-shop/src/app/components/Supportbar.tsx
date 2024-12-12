import React from "react";

const Supportbar = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-around sm:px-14 md:p-0">
        <div className="flex flex-col lg:gap-3 sm:gap-2 items-start px-4">
          <h2 className="font-bold lg:text-3xl md:text-2xl sm:text-lg">
            <span className="text-yellow-500">St</span>ill You Need Our Support?
          </h2>
          <p className="lg:text-lg text-wrap sm:hidden md:block ">
            Don’t wait make a smart & logical quote here. Its pretty easy.
          </p>
        </div>
        <div className="md:-space-x-2 sm:flex md:block flex-col items-center justify-center gap-1 ">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="bg-[#FF9F0D] text-white placeholder:text-white px-8 py-3 border-0 rounded-[4px]"
          />
          <span>
            <button className="bg-white text-yellow-500 font-semibold px-8 py-3 rounded-[4px] ">
              Subscribe
            </button>
          </span>
        </div>
      </div>
      <div className="border-2 border-yellow-700 mx-36 mt-4"></div>
    </div>
  );
};

export default Supportbar;
