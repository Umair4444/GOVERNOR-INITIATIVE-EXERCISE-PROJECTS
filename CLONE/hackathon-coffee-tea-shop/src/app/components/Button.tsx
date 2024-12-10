import React from "react";

const Button = (props: any) => {
  return (
    <div>
      <div className="flex items-center">
        <button
          className={`bg-[#FF9F0D] text-white w-${props.width} text-[16px] rounded-${props.rounded}  px-${props.xpadding} py-${props.ypadding}  `}
        >
          {props.title}
        </button>
      </div>
    </div>
  );
};

export default Button;
