"use client";
import Image from "next/image";
import saearch from "@/assets/logo/MagnifyingGlass.png";
import handbag from "@/assets/logo/Handbag.png";

import login from "@/assets/logo/User.png";
import Link from "next/link";
import { Hamburger } from "./Hamburger";

const Navbar = () => {
  return (
    <div className="w-full flex flex-col gap-5 mt-5 mb-20 sm:items-center lg:items-stretch ">
      <div className="flex items-center justify-center text-2xl font-bold font-helvetica ">
        <Link href={"/"}>
          <h1 className="text-[#FF9F0D]">
            Food
            <span className="text-white">tuck</span>
          </h1>
        </Link>
      </div>

      <div className=" flex sm:flex-col-reverse lg:flex-row items-center justify-center lg:justify-around  px-5 lg:p-0">
        <div
          className={`flex-col justify-center hidden lg:flex items-center gap-5 mt-5 md:mt-0`}
        >
          <ul className="hidden md:flex items-center gap-5 px-5 lg:text-xl font-normal">
            <li className="hover:text-yellow-600  active:text-yellow-500">
              <Link href={"/"} className="">
                Home
              </Link>
            </li>
            <li>
              <Link href={"/menu"}>Menu</Link>
            </li>
            <li>
              <Link href={"/blog"}>Blog</Link>
            </li>
            <li className="text-nowrap">
              <Link href={"/page"}>More Pages</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/shop"}>Shop</Link>
            </li>
            <li>
              <Link href={"/contact-us"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="lg:hidden">
          <Hamburger />
        </div>
        <div className="flex gap-3 items-center px-4">
          <div className="w-fit flex gap-1 items-center border-[2px] border-[#FF9F0D] py-2 px-2 rounded-full">
            <input
              type="text"
              placeholder="Search"
              className="outline-none rounded-full w-[20rem] md:w-[25rem] px-4 bg-transparent text-white text-lg font-normal placeholder:text-white "
            />
            <Image
              src={saearch}
              alt="search"
              className=" invert cursor-pointer"
            />
          </div>
          <div>
            <Link href={"/checkout"}>
              <Image
                src={handbag}
                alt="handbag"
                className="invert cursor-pointer "
              />
            </Link>
          </div>
          <div>
            <Link href={"/login"}>
              <Image
                src={login}
                alt="login"
                className="invert cursor-pointer "
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
