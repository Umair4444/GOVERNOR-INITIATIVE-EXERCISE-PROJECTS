import Image from "next/image";
import bg from "@/assets/rest creative process.png";

export default function BgImage() {
  return (
    <div className="relative h-screen">
      <Image
        src={bg}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="-z-10"
        priority
      />
      {/* <div className="relative z-10">
        <h1 className="text-white text-center text-4xl pt-20">Welcome</h1>
        </div> */}
        </div>
  );
}
