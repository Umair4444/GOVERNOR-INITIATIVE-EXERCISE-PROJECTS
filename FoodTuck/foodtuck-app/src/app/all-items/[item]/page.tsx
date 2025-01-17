import React from "react";
import Image from "next/image";
import food from "@/assets/dish/menudish7.png";
import { useSelector } from "react-redux";

const page = ({ params }: { params: { itmes: string } }) => {
  // const products = useSelector((items: any) => items.product);

  return (
    <div className="bg-white text-black flex py-10">
      <div className="px-3 grid grid-flow-col gap-14 py-3 w-2/3  justify-items-center items-center">
        <div className="w-full grid ">
          <Image src={food} alt="" className="w-full" />
        </div>
        <div className="grid self-start justify-self-start py-4 text-xl gap-4">
          <div className="">Name : Lorem ipsum dolor sit.</div>
          <div>
            Receipe : Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Officiis, quidem reprehenderit quod distinctio suscipit mollitia.
            Sequi veritatis dolor, quia quod non eos hic quas tenetur in, facere
            pariatur excepturi repellat.{" "}
          </div>
          <div>Ingredients : </div>
          <div>Ratings : </div>
          <div>Reviews : </div>
        </div>
      </div>
    </div>
  );
};

export default page;
