import React from "react";

export default function Input(props) {
    return (
        <div className="relative">
            <input
                className="w-full py-1 px-4 text-2xl rounded-md text-end bg-Very_light_grayish_cyan text-Very_dark_cyan placeholder:text-Grayish_cyan active:border-Strong_cyan border-2 border-Very_light_grayish_cyan hover:border-Strong_cyan cursor-pointer"
                type="number"
                id={props.id}
                name={props.id}
                step={props.step}
                placeholder="0"
                min="0"
                onChange={props.onChange}
            />
            <img alt={props.alt} src={props.img} className="absolute top-1/2 -translate-y-1/2 ml-4"/>
        </div>
    )
}
