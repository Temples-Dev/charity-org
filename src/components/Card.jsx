import React from "react";

const Card = (props) => {
  return (
    <div className="bg-orange-600 p-16 text-white h-[3.8/6] rounded-2xl flex flex-col items-center text-center justify-between">
      <span className="text-5xl text-gray-300" >{props.icon}</span>
      <h2 className="font-semibold text-2xl ">{props.heading}</h2>
      <p className="text-sm leading-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus
        vestib ulum mauris quis aliquam.
      </p>
    </div>
  );
};

export default Card;
