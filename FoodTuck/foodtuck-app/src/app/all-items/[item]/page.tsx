"use client";
import React, { useState } from "react";
import Image from "next/image";
import food from "@/assets/dish/menudish7.png";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/app/Redux-toolkit/feature/cartSlice";
import { AppDispatch } from "@/app/Redux-toolkit/store";

const Page = ({ params }: { params: { item: string } }) => {
  const dispatch: AppDispatch = useDispatch();

  const products = useSelector((state: any) => state.product);
  console.log(products);
  const find = products.find((item: any) => item.id == params.item);
  console.log(find);
  // console.log(dispatch);

  const [cartItem, setCartItem] = useState({
    Product_id: find.id,
    id: find.id,
    title: find.title,
    image: find.image,
    slug: find.slug,
    price: find.price,
    category: find.category,
    description: find.description,
    flavors: find.flavors,
    topping: find.topping,
    quantity: find.quantity,
    discount: find.discount,
    availability: find.availability ? "Available" : "Not Available",
    uuid: find.uuid,
  });

  console.log(cartItem);

  return (
    <div className="bg-white text-black flex py-10">
      <div className="px-3 grid grid-flow-col gap-14 py-3 w-2/3  justify-items-center items-center">
        <div className="w-full grid ">
          <Image src={food} alt="" className="w-full" />
        </div>
        <div className="grid self-start justify-self-start py-4 text-xl gap-4 justify-start">
          <div className="text-2xl font-bold">Name : {find.title}</div>
          <div className="text-lg font-semibold">{find.description}</div>
          <div className="">
            Category :
            <span className="mx-14 px-10 bg-yellow-500 border-2 text-black hover:text-white">
              {find.category}{" "}
            </span>{" "}
          </div>
          <div className="">
            Price :{" "}
            <span className="mx-14 px-10 bg-yellow-500 text-black hover:text-white">
              {find.price}
            </span>
          </div>
          <div className="flex gap-10">
            Extras :
            {find.topping.map((res: any) => (
              <div key={res.id} className="flex w-fit gap-4 border rounded-md">
                <button className="px-3 bg-yellow-500 text-black hover:text-white ">
                  {res}
                </button>
              </div>
            ))}
          </div>
          <div className="flex gap-10">
            Variety :
            {find.flavors &&
              find.flavors.map((res: any) => (
                <div key={res.id} className="flex w-fit gap-4 border rounded-md">
                  <button className="px-3 bg-yellow-500 text-black hover:text-white ">
                    {res}
                  </button>
                </div>
              ))}
          </div>
          <div>
            <div className="grid grid-flow-col w-fit gap-4 self-center justify-self-center py-4">
              <div>
                <button
                  type="button"
                  onClick={() =>
                    setCartItem({ ...cartItem, quantity: --cartItem.quantity })
                  }
                  className="px-4 text-lg bg-slate-400 text-white"
                >
                  -
                </button>
              </div>
              <div>{cartItem.quantity}</div>
              <div>
                <button
                  type="button"
                  onClick={() =>
                    setCartItem({
                      ...cartItem,
                      quantity: cartItem.quantity + 1,
                    })
                  }
                  className="px-4 text-lg bg-slate-400 text-white"
                >
                  +
                </button>
                <button
                  className="px-4 mx-5 border-2 bg-blue-500 text-white"
                  onClick={() => dispatch(addToCart(cartItem))}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "@/app/Redux-toolkit/feature/cartSlice";
// import { RootState } from "@/app/Redux-toolkit/store";
// import { IProduct } from "@/app/utils/Types";

// const Page = ({ params }: { params: { item: string } }) => {
//   const dispatch = useDispatch();

//   // Retrieve products from Redux store
//   const products = useSelector((state: RootState) => state.product);

//   // Find the specific product based on `params.item`
//   const find = products.find((item: any) => item.id == params.item);

//   // If the product is not found, return a message
//   if (!find) return <div>Product not found!</div>;

//   // Initialize the cart item state
//   const [cartItem, setCartItem] = useState({
//     id: find.id,
//     title: find.title,
//     image: find.image,
//     slug: find.slug,
//     price: find.price,
//     category: find.category,
//     description: find.description,
//     flavors: find.flavors,
//     topping: find.topping,
//     quantity: 1,
//     discount: find.discount,
//     // uuid: find.uuid,
//   });

//   const handleAddToCart = () => {
//     dispatch(addToCart(cartItem)); // Dispatch action to add item to cart
//   };

//   return (
//     <div className="bg-white text-black flex py-10">
//       <div className="px-3 grid grid-flow-col gap-14 py-3 w-2/3 justify-items-center items-center">
//         <div className="w-full grid">
//           <Image src={find.image} alt={find.title} className="w-full" />
//         </div>
//         <div className="grid self-start justify-self-start py-4 text-xl gap-4">
//           <div>Name: {find.title}</div>
//           <div>{find.description}</div>
//           <div>Ingredients:</div>
//           <div>Ratings:</div>
//           <div>Reviews:</div>
//         </div>
//         <div className="grid grid-flow-col w-fit gap-4 self-center justify-self-center my-3">
//           <div>
//             <button
//               type="button"
//               onClick={() => setCartItem({ ...cartItem, quantity: Math.max(cartItem.quantity - 1, 1) })}
//               className="px-4 text-lg bg-slate-400 text-white"
//             >
//               -
//             </button>
//           </div>
//           <div>{cartItem.quantity}</div>
//           <div>
//             <button
//               type="button"
//               onClick={() => setCartItem({ ...cartItem, quantity: cartItem.quantity + 1 })}
//               className="px-4 text-lg bg-slate-400 text-white"
//             >
//               +
//             </button>
//             <button
//               className="px-5 py-2 mx-5 border-2 bg-blue-500 text-white"
//               onClick={handleAddToCart}
//             >
//               Add to cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;
