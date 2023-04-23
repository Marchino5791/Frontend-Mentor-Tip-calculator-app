import React from "react";

export default function Label(props) {
  return <label className="text-Dark_grayish_cyan my-2 inline-block" htmlFor={props.for}>{props.name}</label>;
}
