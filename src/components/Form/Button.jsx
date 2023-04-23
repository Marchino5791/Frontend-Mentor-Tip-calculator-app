import React from "react";

export default function Button(props) {
  return (
    <label
      htmlFor={props.id}
      className="relative z-10 text-2xl w-full h-full cursor-pointer text-white text-center py-2 hover:text-Very_dark_cyan"
    >
      {props.value}
      <input
        type="radio"
        name="tip"
        value={props.value}
        id={props.id}
        onClick={props.onClick}
        className="rounded-md bg-Very_dark_cyan border-2 border-Very_dark_cyan hover:bg-Light_grayish_cyan  hover:border-Light_grayish_cyan checked:bg-Strong_cyan checked:border-Strong_cyan focus-within:text-Very_dark_cyan"
      />
    </label>
  );
}
