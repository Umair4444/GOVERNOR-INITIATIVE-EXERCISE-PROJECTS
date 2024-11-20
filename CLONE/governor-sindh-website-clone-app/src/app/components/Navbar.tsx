import React from "react";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "./dropmenu";

const Navbar = () => {
  return (
    <header className="h-20 w-full bg-sky-700 flex gap-3 items-center justify-around sticky top-0 z-10">
      <Image
        src="/sindhlogo.png"
        width={90}
        height={80}
        alt="logo"
        className=" relative top-10 left-10"
      />
      <div className="text-2xl font-black text-sky-200 ml-5 hidden xl:block sm:hidden">
        Tuition Free Education Program on Latest Technologies
      </div>
      <nav className=" text-center">
        <ul className="flex gap-10 text-white mr-10 flex-row xsm:scale-75 md:scale-90 lg:scale-100 ">
          <li> <Link href={"/"}>Home </Link></li>
          <li> <Link href={"/"}>Apply </Link></li>
          <li> <Link href={"/"}>Jobs </Link></li>
          <li> <Link href={"/"}>Result </Link></li>
          <li>
            <span className="mr-2 cursor-pointer">Course</span>
            <select name="course" id="" value="Core" className="bg-sky-700 w-3 cursor-pointer">
              <option value="">Core Courses</option>
              <option value="">Programming Fundamentals</option>
              <option value="">Web2 Using NextJs</option>
              <option value="">Earn As You Learn</option>
              <option value="">Advanced Courses</option>
              <option value="">Web 3 and Metaverse</option>
              <option value="">Cloud-Native Computing</option>
              <option value="">
                Artifical Intelligence(AI) and Deep Learning
              </option>
              <option value="">Ambient Computing and IoT</option>
              <option value="">Geonomics and Bioinformatics</option>
              <option value="">Network Programmability and Automation</option>
            </select>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;