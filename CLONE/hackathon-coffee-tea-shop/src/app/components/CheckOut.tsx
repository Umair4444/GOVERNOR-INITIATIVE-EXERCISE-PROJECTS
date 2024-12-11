import React from "react";
import CheckOutForm from "./CheckOutForm";
import CheckOutCard from "./CheckOutCard";

const CheckOut = () => {
  return (
    <div className="flex bg-white items-start justify-center">
      <div className="w-2/3">
        <CheckOutForm />
      </div>
      <div className="w-1/3">
        <CheckOutCard />
      </div>
    </div>
  );
};

export default CheckOut;
