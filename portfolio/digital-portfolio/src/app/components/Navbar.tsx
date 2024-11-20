import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className=" flex items-center justify-around py-8 pl-5 border-2 outline-none bg-black text-white h-12 rounded-2xl">

        <div className=" w-2/3 flex items-center justify-start gap-5">
          <div className="border-2 rounded-full p-2">Umair's Portfolio</div>
          <div className="flex flex-row border-2 rounded-full py-2 px-3">
            <ul className="flex gap-4 ">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/"}>Services</Link>
              </li>
              <li>
                <Link href={"/"}>My Projects</Link>
              </li>
              <li>
                <Link href={"/"}>Clients Reviews</Link>
              </li>
              <li>
                <Link href={"/"}>About</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/3 flex items-center justify-center gap-3">
          <div className="border-2 rounded-full p-2">
            <button type="button">Get Hired</button>
            <span className="ml-2">logo</span>
          </div>
          <div>logo</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
