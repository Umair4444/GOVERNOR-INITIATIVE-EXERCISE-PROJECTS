import React from "react";
import CheckOutForm from "./CheckOutForm";
import CheckOutCard from "./CheckOutCard";
import TopCard from "./TopCard";

const CheckOut = () => {
  return (
    <div>
      <TopCard title="Checkout Page" />
      <div className="flex flex-col md:flex-row bg-white items-start justify-center">
        <div className="sm:w-full md:w-3/5 lg:w-2/3">
          <CheckOutForm />
        </div>
        <div className="sm:w-full md:w-2/5 lg:w-1/3 mr-4">
          <CheckOutCard />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
