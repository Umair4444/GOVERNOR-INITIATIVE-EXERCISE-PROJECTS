import React from "react";

const Button = (props: any) => {
  return (
    <div>
      <div className="flex items-center">
        <button
          className={`bg-${props.bgColor || "[#FF9F0D]"} text-${
            props.textColor || "white"
          }    w-${props.width} text-[16px] rounded-${props.rounded}  px-${
            props.xpadding
          } py-${props.ypadding} border-${props.border || "0"}  `}
        >
          {props.title}
        </button>
      </div>
    </div>
  );
};

export default Button;
