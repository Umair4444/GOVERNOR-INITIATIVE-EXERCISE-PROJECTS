import React from "react";

const LoginPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center  ">
        <div className="text-center mb-5">
          <h1>LoginPage</h1>
        </div>

        <div className="grid grid-cols-1 gap-2 items-center justify-center">
        <input className="inputbox w-80 xsm:w-auto mb-3" type="text" placeholder="Enter Your Email" />
          <input className="inputbox w-80 xsm:w-auto" type="password" placeholder="Enter Your password" />
          <button className="btn flex justify-center items-center mt-3">Login Now!</button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
