"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import list from "@/assets/logo/List.png";
import close from "@/assets/logo/X.png";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const SHEET_SIDES = ["left"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

export function Hamburger() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild className="invert scale-125 m-3">
            <Image src={list} alt="list-menu-icon" />
            {/* <Button variant="outline">{side}</Button> */}
          </SheetTrigger>

          <SheetContent side={side} className="flex justify-between w-fit">
            <SheetHeader>
              <div>
                <ul className="flex flex-col items-start justify-center px-5 gap-5 text-lg font-normal text-black  ">
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
                  <li>
                    <Link href={"/page"}>More Pages</Link>
                  </li>
                  <li className=" gap-1 items-center">
                    <Link href={"/about"} className="">
                      About
                      {/* use select from shadcn */}
                    </Link>
                  </li>
                  <li>
                    <Link href={"/shop"}>Shop</Link>
                  </li>
                  <li>
                    <Link href={"/contact-us"}>Contact</Link>
                  </li>
                </ul>
              </div>
            </SheetHeader>
            <SheetClose className=" h-fit rounded-md border bg-slate-200">
              <Image src={close} alt="close-icon" />
            </SheetClose>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
