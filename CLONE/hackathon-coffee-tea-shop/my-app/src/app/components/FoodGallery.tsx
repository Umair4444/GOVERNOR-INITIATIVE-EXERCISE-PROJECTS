import React from "react";
import GalleryItem from "./GalleryItem";
import fooditem1 from "@/app/assets/fooditems1.png";
import fooditem2 from "@/app/assets/fooditems2.png";
import fooditem3 from "@/app/assets/fooditems3.png";
import fooditem4 from "@/app/assets/fooditems4.png";
import { Great_Vibes } from "next/font/google";

const great_Vibes = Great_Vibes({ weight: "400", subsets: ["latin"] });

const FoodGallery = () => {
    return (
        <div className="flex flex-col items-center gap-6 text-center">
            <div>
                <h3 className={`${great_Vibes.className} text-4xl text-[#FF9F0D] `}>
                    Food Gallery
                </h3>
                <h1 className="text-5xl font-bold"><span className="text-[#FF9F0D] font-helvetica">Ch</span>oose Food Itmes</h1>
            </div>
            <div className="flex gap-2 items-center justify-center">
                <GalleryItem image={fooditem1} />
                <GalleryItem image={fooditem2} />
                <GalleryItem image={fooditem3} />
                <GalleryItem image={fooditem4} />
            </div>
        </div>
    );
};

export default FoodGallery;
