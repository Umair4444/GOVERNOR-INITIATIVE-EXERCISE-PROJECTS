import Link from "next/link";
import React from "react";
import Button from "./Button";
const Navbar = () => {
  return (
    <div>
      <header className="py-4 px-2 text-white">
        <nav className="flex justify-between items-center">
          <Link href={"/"}>
            <h1 className="text-3xl font-bold ">
              Port<span className="text-cyan-500">folio</span>
            </h1>
          </Link>
          <ul>
            <li className="flex items-center justify-evenly gap-6 text-lg">
              <Link href={"/"} className="hover:underline decoration-cyan-600">
                Home
              </Link>
              <Link href={"/about"}>About</Link>
              <Link href={"/skills"}>Skills</Link>
              <Link href={"/services"}>Services</Link>
              <Link href={"/portfolio"}>Portfolio</Link>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
          <Button />
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
