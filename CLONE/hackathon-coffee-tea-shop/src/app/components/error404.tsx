"use client";
import React from "react";
import Button from "./Button";
import TopCard from "./TopCard";
import { useRouter } from "next/navigation";

const Error404 = () => {
  const router = useRouter();
  return (
    <div className="">
      <TopCard title="404 Error" />
      <div className="bg-white text-black px-14 p-20">
        <div className="flex flex-col items-center justify-center  gap-6 ">
          <h1 className="text-8xl font-bold text-[#FF9F0D]">404</h1>
          <h4 className="text-[32px] font-bold text-center">
            Oops! Look likes something going wrong
          </h4>
          <p className="text-lg text-center">
            Page Cannot be found! we’ll have it figured out in no time.
            Menwhile, cheek out these fresh ideas:
          </p>
          <Button
            title="Go To Home"
            rounded="rounded-md"
            xpadding="px-10"
            ypadding="py-2"
            onclick={() => {
              console.log("click");
              router.push("/");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Error404;
