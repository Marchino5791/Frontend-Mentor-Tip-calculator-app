import React from "react";
import Result from "./Result";

export default function Summary(props) {
  return (
    <div className="py-6 px-4 bg-Very_dark_cyan rounded-2xl flex flex-col justify-between lg:py-11 lg:px-9">
      <div>
        <Result name="Tip Amount" amount={props.amountTip} />
        <Result name="Total" amount={props.amountTot} />
      </div>
      <input
        className="w-full bg-Strong_cyan text-Very_dark_cyan py-2 rounded-md text-xl hover:bg-Light_grayish_cyan cursor-pointer active:opacity-10"
        type="reset"
        value="RESET"
        form="form"
        onClick={props.onClick}
      />
    </div>
  );
}
