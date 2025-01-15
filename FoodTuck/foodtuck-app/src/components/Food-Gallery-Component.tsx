import { Great_Vibes } from "next/font/google";
import food from "@/assets/dish/fooditems1.png";
import Image from "next/image";

const great_Vibes = Great_Vibes({ weight: "400", subsets: ["latin"] });

const FoodGalleryComponent = () => {
  return (
    <div className="flex flex-col items-center gap-6 text-center mt-5 md:mt-10 lg:mt-20">
      <div>
        <h3 className={`${great_Vibes.className} text-4xl text-[#FF9F0D] `}>
          Food Gallery
        </h3>
        <h1 className="text-5xl font-bold">
          <span className="text-[#FF9F0D] font-helvetica">Ch</span>oose Food
          Itmes
        </h1>
      </div>
      {/* shadcn hover card  */}
      {/* <div className="flex gap-2 items-center justify-center w-full ">
        <Image src={food} alt="food" className="rounded-md py-6 px-2" width={300} height={300}/>
        <Image src={food} alt="food" className="rounded-md py-6 px-2" width={300} height={300}/>
        <Image src={food} alt="food" className="rounded-md py-6 px-2" width={300} height={300}/>
        <Image src={food} alt="food" className="rounded-md py-6 px-2" width={300} height={300}/>
      </div> */}
    </div>
  );
};

export default FoodGalleryComponent;
