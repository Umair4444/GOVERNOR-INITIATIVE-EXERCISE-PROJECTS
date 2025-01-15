import React from "react";
import TopCard from "../components/TopCard";
import ShoppingCart from "../components/ShoppingCart";

const shoppingcart = () => {
  return (
    <div>
      <div>
        <TopCard title="Shopping Cart" />
      </div>

      <div>
        <ShoppingCart item="Burge" rating="2" price="$20" quantity="2" />
      </div>
    </div>
  );
};

export default shoppingcart;
