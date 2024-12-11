import React from "react";
import Link from "next/link";
import Image from "next/image";
import mail from "@/app/assets/logo/EnvelopeSimple.png";
import lock from "@/app/assets/logo/Lock.png";
import apple from "@/app/assets/apple.png";
import google from "@/app/assets/Google.png";
import Button from "./Button";
import TopCard from "./TopCard";

const LoginCard = () => {
  return (
   
      <div className="bg-[#EDEAE3] text-black  flex justify-center py-20">
        <div className="shadow-md shadow-slate-500 bg-white w-4/6">
          <form action="" className="flex flex-col my-10">
            <fieldset className="flex flex-col justify-start gap-4 p-7">
              <legend className="text-start font-bold text-xl">
                <h1>Sign In</h1>
              </legend>

              <legend className="flex items-center  border-2 gap-2 py-2 px-3">
                <Image src={mail} alt="mail" />
                <input
                  type="text"
                  name="mail"
                  id="mail"
                  placeholder="Email"
                  className="border-none outline-none text-[16px] font-normal text-slate-950"
                />
              </legend>

              <legend className="flex items-center border-2 gap-2 py-2 px-3">
                <Image src={lock} alt="lock" />
                <input
                  type="text"
                  name="lock"
                  id="lock"
                  placeholder="Password"
                  className="border-none outline-none text-[16px] font-normal"
                />
              </legend>

              <legend className="flex items-center px-1">
                <input
                  type="checkbox"
                  name="Remember me"
                  id="Remember me"
                  className="w-5 h-5 checked:text-white checked:bg-yellow-500"
                />{" "}
                <label htmlFor="remember" className="ml-3">
                  Remember Me?
                </label>
              </legend>
              <div className="">
                <Button
                  title="Sign Up"
                  className="rounded-none"
                  width="full"
                  rounded="sm"
                  ypadding="2"
                />
              </div>
              <div className="flex justify-end">
                <Link href={""}>Forget Password?</Link>
              </div>

              <div className="flex w-full items-center ">
                <div className=" border-[1px] w-full h-0"></div>
                <div className="border-2 text-center text-sm p-1">OR</div>
                <div className=" border-[1px] w-full h-0"></div>
              </div>

              <legend className="flex items-center justify-start border-2 gap-24 py-2 px-3">
                <Image src={google} alt="google" />
                <button className="text-justify">Sign Up with Google</button>
              </legend>

              <legend className="flex items-center justify-start border-2 gap-24 py-2 px-3">
                <Image src={apple} alt="apple" />
                <button className="text-justify">Sign Up with Apple</button>
              </legend>
            </fieldset>
          </form>
        </div>
      </div>
  );
};

export default LoginCard;
