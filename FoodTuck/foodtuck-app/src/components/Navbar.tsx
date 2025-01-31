"use client";

import { BsCart4 } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { FaSearch, FaHeart } from "react-icons/fa";
import Link from "next/link";
import { Hamburger } from "./Hamburger";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import type { IWish } from "@/app/utils/Types";

const Navbar = () => {
  const pathname = usePathname();
  const cart = useSelector((state: any) => state.cart);
  const wishlist = useSelector((state: { wish: IWish[] }) => state.wish);

  return (
    <>
      {pathname && !pathname.startsWith("/studio") ? (
        <nav className="sticky top-0 z-40 w-full bg-black py-4">
          <div className=" mx-auto px-4">
            <div className="flex flex-col items-center gap-4">
              {/* Logo */}
              <Link
                href={"/"}
                className="text-3xl font-bold font-helvetica mb-2"
              >
                <h1 className="text-[#FF9F0D]">
                  Food<span className="text-white">tuck</span>
                </h1>
              </Link>

              <div className="w-full flex flex-row gap-4 lg:items-center lg:justify-around">
                {/* Hamburger for mobile */}
                <div className="lg:hidden self-start">
                  <Hamburger />
                </div>

                {/* Navigation Links - Hidden on mobile, visible on larger screens */}
                <div className="hidden lg:block ">
                  <ul className="flex flex-wrap items-center justify-center gap-4 lg:text-lg text-nowrap text-white">
                    {[
                      "Home",
                      "Deals",
                      "Blogs",
                      "Menu",
                      "About",
                      "Shop",
                      "Contact",
                    ].map((item) => (
                      <li key={item} className="hover:text-yellow-600">
                        <Link
                          href={
                            item === "Home" ? "/" : `/${item.toLowerCase()}`
                          }
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Search and Icons */}
                <div className="flex items-center gap-4 w-full lg:w-auto">
                  {/* Search Bar */}
                  <div className="relative flex-grow lg:w-[25rem] ">
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-full rounded-full border-2 border-[#FF9F0D] bg-transparent  py-2 pl-4 pr-10 text-sm text-white placeholder-white outline-none"
                    />
                    <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 transform text-white" />
                  </div>

                  {/* Icons */}
                  <div className="flex items-center gap-3 text-xl text-white">
                    {[
                      { href: "/checkout", Icon: BsCart4, count: cart.length },
                      {
                        href: "/wishlist",
                        Icon: FaHeart,
                        count: wishlist.length,
                      },
                      { href: "/login", Icon: FaUser },
                    ].map(({ href, Icon, count }, index) => (
                      <Link key={index} href={href} className="relative">
                        <Icon />
                        {count > 0 && (
                          <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-black">
                            {count}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      ) : null}
    </>
  );
};

export default Navbar;
