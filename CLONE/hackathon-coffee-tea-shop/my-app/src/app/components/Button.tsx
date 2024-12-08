import React from "react";

const Button = (props : any) => {
  return (
    <div>
      <div className="flex items-center">
        <button className="bg-[#FF9F0D] w-fit text-[16px] rounded-full px-10 py-4">
          {props.title}
        </button>
      </div>
    </div>
  );
};

export default Button;
