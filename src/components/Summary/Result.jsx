import React from "react";

export default function Result(props) {
  return (
    <div className="flex justify-between items-center mb-6 lg:mb-14">
      <div>
        <p className="text-white">{props.name}</p>
        <p className="text-Grayish_cyan text-xs">/ person</p>
      </div>
      <p className="text-[2rem] text-Strong_cyan lg:text-5xl">${props.amount}</p>
    </div>
  );
}
