"use client";
import { BsCart4 } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { FaSearch, FaHeart } from "react-icons/fa";
import Link from "next/link";
import { Hamburger } from "./Hamburger";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { IWish } from "@/app/utils/Types";

const Navbar = () => {
  const pathname = usePathname();
  const cart = useSelector((state: any) => state.cart);
  const wishlist = useSelector((state: { wish: IWish[] }) => state.wish);

  console.log(wishlist);

  return (
    <>
      {/* now navbar will not be shown in studio */}
      {pathname && !pathname.startsWith("/studio") ? (
        <div className="w-full flex flex-col gap-5 mt-5 mb-8 sm:items-center lg:items-stretch sticky top-0 z-40 bg-black py-4 ">
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
                <li className="hover:text-yellow-600  ">
                  <Link href={"/"} className="">
                    Home
                  </Link>
                </li>
                <li className="hover:text-yellow-600  ">
                  <Link href={"/menu"}>Menu</Link>
                </li>
                <li className="hover:text-yellow-600  ">
                  <Link href={"/blogs"}>Blogs</Link>
                </li>
                <li className="text-nowrap hover:text-yellow-600 ">
                  <Link href={"/all-items"}>All Itmes</Link>
                </li>
                <li className="hover:text-yellow-600  ">
                  <Link href={"/about"}>About</Link>
                </li>
                <li className="hover:text-yellow-600  ">
                  <Link href={"/shop"}>Shop</Link>
                </li>
                <li className="hover:text-yellow-600  ">
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
                <FaSearch className="text-xl mx-2 my-1" />
              </div>
              <div className="relative text-xl">
                <Link href={"/checkout"}>
                  <BsCart4 />

                  {cart.length > 0 && (
                    <span className="absolute top-[-14px] left-3 bg-yellow-400  rounded-full text-black font-black w-[20px] h-[20px] flex justify-center items-center p-1 text-sm right-0">
                      {cart.length}
                    </span>
                  )}
                </Link>
              </div>
              <div className="relative text-xl">
                <Link href={"/wishlist"}>
                  <FaHeart />

                  {wishlist.length > 0 && (
                    <span className="absolute top-[-14px] left-3 bg-yellow-400  rounded-full text-black font-black w-[20px] h-[20px] flex justify-center items-center p-1 text-sm right-0">
                      {wishlist.length}
                    </span>
                  )}
                </Link>
              </div>
              <div className="relative text-xl ">
                <Link href={"/login"}>
                  <FaUser />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
