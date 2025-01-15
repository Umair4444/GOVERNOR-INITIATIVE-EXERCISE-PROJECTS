import Image from "next/image";
import img1 from "@/app/assets/Mask Group.png";
import img2 from "@/app/assets/Mask Group2.png";
import img3 from "@/app/assets/Mask Group3.png";
import Ratings from "./ratings";

const ShoppingCart = (props: any) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Products</h1>
      <h1 className="text-2xl font-bold">Price</h1>
      <h1 className="text-2xl font-bold">Quantity</h1>
      <h1 className="text-2xl font-bold">Total</h1>
      <h1 className="text-2xl font-bold">Remove</h1>

      <div className="bg-white text-black flex items-center justify-around">
        <div className="flex items-center">
          <Image src={img1} alt="cartItem" className="h-full" />
        </div>
        <Ratings rating="4" />

        <div className="text-lg font-bold">
          <h1>{props.price}</h1>
        </div>

        {props.quantity ? (
          <div className="text-lg font-bold border-2 rounded-full ">
            <button type="button" className="px-6 py-2 text-2xl">
              +
            </button>
            {props.quantity}
            <button type="button" className="px-6 py-2 text-2xl">
              -
            </button>
          </div>
        ) : null}

        <div className="text-lg font-bold">
          <h1>{props.quantity}</h1>
        </div>

        <div>
          <button type="button" className="px-6 py-2 text-2xl">
            x
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
