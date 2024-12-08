import Image from "next/image";
import caretdown from "@/app/assets/logo/CaretDown.png";
import saearch from "@/app/assets/logo/MagnifyingGlass.png";
import handbag from "@/app/assets/logo/Handbag.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full h-[87px] flex flex-col gap-5 mt-5 mb-20 ">
      <div className="flex items-center justify-center text-center text-2xl font-bold font-helvetica ">
        <h1 className="text-[#FF9F0D]">Food</h1>
        <h1 className="">tuck</h1>
      </div>

      <div className=" flex flex-row justify-around items-center">
        <div className="flex ">
          <ul className="flex gap-5 text-lg font-normal ">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/menu"}>Menu</Link>
            </li>
            <li>Blog</li>
            <li>Pages</li>
            <li className="flex gap-1 items-center">
              About
              <span>
                <Image
                  src={caretdown}
                  alt="listmenu"
                  width={15}
                  className=" invert cursor-pointer"
                />
              </span>
            </li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex gap-3 items-center">
          <div className="w-fit flex gap-1 items-center border-[2px] border-[#FF9F0D] py-3 px-6 rounded-full">
            <input
              type="text"
              placeholder="Search"
              className="outline-none rounded-full  bg-transparent text-white text-lg font-normal placeholder:text-white "
            />
            <Image
              src={saearch}
              alt="search"
              className=" invert cursor-pointer  "
            />
          </div>
          <div>
            <Image
              src={handbag}
              alt="handbag"
              className="invert cursor-pointer "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
