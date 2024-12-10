import React from "react";
import Button from "./Button";
import TopCard from "./TopCard";

const Error404 = () => {
  return (
    <div>
      <TopCard title="404 Error" />
      <div className="bg-white text-black p-14">
        <div className="flex flex-col items-center justify-center w- gap-3 border-2">
          <h1 className="text-8xl font-bold text-[#FF9F0D]">404</h1>
          <h4 className="text-[32px] font-bold text-start">
            Oops! Look likes something going wrong
          </h4>
          <p className="text-lg text-center">
            Page Cannot be found! we’ll have it figured out in no time.
            Menwhile, cheek out these fresh ideas:
          </p>
          <Button title="Go To Home" rounded="md" xpadding="10" ypadding="2" />
        </div>
      </div>
    </div>
  );
};

export default Error404;
