import React from "react";

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Child = ({ title, description, image }: ChildProps) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 w-auto">
      <img
        src={image}
        alt={title}
        className="rounded-t-lg w-full h-40 object-cover"
      />
      <h2 className="text-lg font-bold mt-2">{title}</h2>
      <p className="text-gray-600 mt-1">{description}</p>
    </div>
  );
};

export default Child;
