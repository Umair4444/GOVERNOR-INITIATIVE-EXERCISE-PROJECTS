import Image from "next/image";
import emptystar from "@/app/assets/emptystar.png";
import fullstar from "@/app/assets/fullstar.png";
import img1 from "@/app/assets/Mask Group.png";
import img2 from "@/app/assets/Mask Group2.png";
import img3 from "@/app/assets/Mask Group3.png";

const ShoppingCart = (props: any) => {

  return (
    <div>
      <h1 className="text-2xl font-bold">Products</h1>
      <h1 className="text-2xl font-bold">Price</h1>
      <h1 className="text-2xl font-bold">Quantity</h1>
      <h1 className="text-2xl font-bold">Total</h1>
      <h1 className="text-2xl font-bold">Remove</h1>

      <div className="bg-white text-black flex items-center justify-around">
        <div className=" flex items-center">
          <div className="flex items-center">
            <Image src={img1} alt="cartItem" className="h-full" />
          </div>

          <div className="flex flex-col items-start gap-2">
            <h1 className="font-bold">{props.item}</h1>
            <div className="flex flex-col items-start">
              <div className="flex gap-2">
                {Array.from({ length: props.maxStars || 5 }).map((_, index) => (
                  <Image
                    key={index}
                    src={index < props.rating || 0 ? fullstar : emptystar} // Choose filled or empty
                    alt={index < props.rating ? "Filled Star" : "Empty Star"}
                    width={20}
                    height={20}
                    className="inline-block"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

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
