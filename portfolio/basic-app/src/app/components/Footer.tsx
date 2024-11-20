import React from "react";
import Link from "next/link";
import Image from "next/image";
import facebook from "@/app/images/facebook.png";
import youtube from "@/app/images/youtube.png";
import twitter from "@/app/images/twitter.png";
import whatsapp from "@/app/images/whatsapp.png";
import instagram from "@/app/images/instagram.png";

const Footer = () => {
  return (
    <div className="max-w-full min-h-96 bg-slate-500 flex flex-row items-start justify-between mt-6 p-20 pr-52  ">
      <div className="flex flex-col gap-2 items-stretch max-lg:hidden">
        <h1 className="text-2xl font-semibold mb-5 ">My Projects</h1>
        <div>
          <Link href={"/"}>My Project 1</Link>
        </div>
        <div>
          <Link href={"/"}>My Project 1</Link>
        </div>
        <div>
          <Link href={"/"}>My Project 1</Link>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-stretch max-lg:hidden ">
        <h1 className="text-2xl font-semibold mb-5">My Services</h1>
        <div>
          <Link href={"/"}>Html-Css</Link>
        </div>
        <div>
          <Link href={"/"}>Typescript</Link>
        </div>
        <div>
          <Link href={"/"}>Nextjs</Link>
        </div>
        <div>
          <Link href={"/"}>MongoDb</Link>
        </div>
        <div>
          <Link href={"/"}>TailwindCSS</Link>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-semibold ">Social Links</h1>
        <div className="flex flex-row cursor-pointer">
          <Image src={facebook} alt={"facebook"} width={40}></Image>
          <Image src={youtube} alt={"youtube"} width={40}></Image>
          <Image src={twitter} alt={"twitter"} width={40}></Image>
          <Image src={instagram} alt={"instagram"} width={40}></Image>
          <Image src={whatsapp} alt={"wahatsapp"} width={40}></Image>
        </div>
        <h4 className=" underline cursor-pointer">contactme@gmail.com</h4>
      </div>
    </div>
  );
};

export default Footer;
