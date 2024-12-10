import React from "react";
import Image from "next/image";
import mail from "@/app/assets/logo/EnvelopeSimple.png";
import lock from "@/app/assets/logo/Lock.png";
import Button from "./Button";

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
              {/* <Image src={lock} alt="lock" /> */}
              <input
                type="checkbox"
                name="Remember me"
                id="Remember me"
                className=""
              />
            </legend>
            <Button className="w-full"/>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default LoginCard;
