import Image from "next/image";
import image from "@/app/assets/chooseus.png";

const WhyChooseUs2 = () => {
  return (
    <div className="w-full">
      <div>
        <h1>Why Choose US</h1>
      </div>
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate,
          sint Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="w-full py-10 ">
        <Image src={image} alt="image" className="object-cover w-full" />
      </div>
    </div>
  );
};

export default WhyChooseUs2;
