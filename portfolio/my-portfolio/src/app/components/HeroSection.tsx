import Image from "next/image";
import bg from "@/assets/rest creative process.png";
import Umair from "@/assets/Umair.png";
import hero from "@/assets/hero.png";
import twitter from "@/assets/TwitterLogo.png";
import twitch from "@/assets/TwitchLogo.png";
import BgImage from "./BgImage";

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <Image
        src={bg}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="z-0 "
        priority
      />
      <div className="relative z-20 border-2 flex justify-around items-center text-white ">
        <div className="border-2 rounded">
          <Image
            src={hero}
            alt="Profile-Logo"
            className="saturate-100 hover:backdrop-grayscale-0 brightness-150 hover:brightness-100 rounded-lg"
          />
        </div>
        <div className="border-2 w-1/2 flex flex-col gap-2">
          <h1>Hello, I'm</h1>
          <h1 className="text-5xl font-bold">Umair Ali Khan</h1>
          <h2 className="text-lg font-semibold">
            And I'm a <span className="text-cyan-500">Frontend Developer</span>
          </h2>
          <p className="w-[90%] text-wrap text-left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum,
            praesentium! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Velit, deserunt?
          </p>
          <div>
            <Image
              src={twitter}
              alt="twitter"
              layout="intrinsic"
              objectFit="contain"
              className="bg-cyan-500 p-0.5 m-2 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
