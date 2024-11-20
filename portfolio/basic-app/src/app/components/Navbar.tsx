import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/images/logo4.png"

const Navbar = () => {
    return (
        <nav className="flex flex-row bg-blue-800 w-full h-1/6 fixed z-10 items-center justify-between p-3 text-white max-w-full max-sm:flex-col max-md:overflow-hidden">
            <div className="mx-8 "><Image className=" rounded-xl max-md:hidden " src={logo} width={70} height={20} alt="logo"></Image></div>
            <div className="text-2xl font-bold max-lg:hidden">A Versatile Freelancer Just For You</div>
            <div>
                <ul className="w-full flex flex-row gap-10 mr-10 font-semibold font-xl capitalize max-md:m-0 max-md:gap-0 max-md:scale-90">
                    <li className=" hover:shadow-xl hover:shadow-blue-900 px-3 py-1 rounded-lg hover:scale-110"><Link href={"/"}>Home</Link></li>
                    <li className=" hover:shadow-xl hover:shadow-blue-900 px-3 py-1 rounded-lg hover:scale-110"><Link href={"/services"}>Services</Link></li>
                    <li className=" hover:shadow-xl hover:shadow-blue-900 px-3 py-1 rounded-lg hover:scale-110"><Link href={"/projects"}>Projects</Link></li>
                    <li className=" hover:shadow-xl hover:shadow-blue-900 px-3 py-1 rounded-lg hover:scale-110"><Link href={"/about"}>About</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
