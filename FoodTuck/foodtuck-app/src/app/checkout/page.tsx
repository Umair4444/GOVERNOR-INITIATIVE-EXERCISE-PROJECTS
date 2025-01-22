import React from "react";
import CheckOut from "@/components/Cart/CheckOut";
import { useSelector } from "react-redux";

const checkoutPage = () => {
  return (
    <div>
      <div>
        <CheckOut />
      </div>
    </div>
  );
};

export default checkoutPage;
