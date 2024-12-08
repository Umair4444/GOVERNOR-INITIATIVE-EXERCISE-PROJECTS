import React from "react";
import Image from "next/image";

const GalleryItem = (props: any) => {
  return (
    <div className="">
      <Image src={props.image} alt="food items " width={300} height={300} className="rounded-md px-2" />
    </div>
  );
};

export default GalleryItem;
