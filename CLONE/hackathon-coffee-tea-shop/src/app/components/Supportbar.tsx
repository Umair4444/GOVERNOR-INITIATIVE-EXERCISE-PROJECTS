import React from "react";

const Supportbar = () => {
  return (
    <div className="flex items-center justify-between border-b-2 border-yellow-700 p-4 mx-52">
      <div className="flex flex-col gap-3 items-start">
        <h2 className="font-bold text-3xl">
          <span className="text-yellow-500">St</span>ill You Need Our Support ?
        </h2>
        <p className="text-lg">
          Don’t wait make a smart & logical quote here. Its pretty easy.
        </p>
      </div>
      <div className="-space-x-2">
        <input
          type="text"
          placeholder="Enter Your Email"
          className="bg-[#FF9F0D] text-white placeholder:text-white px-8 py-3 border-0 rounded-[4px]"
        />
        <span>
          <button className="bg-white text-yellow-500 px-8 py-3 rounded-[4px] ">
            Subscribe
          </button>
        </span>
      </div>
    </div>
  );
};

export default Supportbar;
