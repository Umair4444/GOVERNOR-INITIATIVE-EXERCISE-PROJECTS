"use client";
import React, { useState } from "react";
import LoginPage from "../_components/loginPage";
import SignupPage from "../_components/signupPage";
import RestoHeader from "../_components/header";
import RestoFooter from "../_components/footer";
import "@/app/globals.css";

const Restaurant = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
      {/* <RestoHeader /> */}
      <div className=" border-4 min-h-[100vh] flex flex-col items-center justify-center ">
        <div className="">
          <h1 className=" text-center text-4xl font-bold xsm:text-xl xsm:w-52">
            Restaurant Login/Signup Page
          </h1>
        </div>

        <div className="text-center m-3 text-2xl">
          {login ? <LoginPage /> : <SignupPage />}
        </div>

        <button
          className="btn px-5 py-3 rounded-lg xsm:p-[6px]"
          onClick={() => setLogin(!login)}
        >
          {login
            ? "Don't have account? SignUp"
            : `Already have account! SignIn`}
        </button>
      </div>
      <RestoFooter />
    </>
  );
};

export default Restaurant;
