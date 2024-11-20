import React from "react";
import Link from "next/link";

const RestoHeader = () => {
  return (
    <>
      <div className="header flex justify-between items-center text-lg m-1 font-bold bg-cyan-600">
        <div className="left">Logo</div>
        <div className="center">
          <ul className="flex gap-6" >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/restaurant">Signup/Login</Link>
            </li>
            <li>
              <Link href="/restaurant">Menu</Link>
            </li>
            <li>
              <Link href="/restaurant">Services</Link>
            </li>
            <li>
              <Link href="/restaurant">ContactUs</Link>
            </li>
          </ul>
        </div>
        <div className="right">
          <button className="p-2 shadow-lg shadow-gray-500 hover:shadow-black hover:text-red-600 hover:bg-slate-900 bg-red-600 text-white">
            Order Now
          </button>
        </div>
      </div>
    </>
  );
};

export default RestoHeader;
