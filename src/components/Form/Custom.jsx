import React from "react";

export default function Custom(props) {
    return (
        <>
            <label htmlFor={props.id} className="hidden" />
            <input
                type="text"
                name="tip"
                value={props.value}
                id={props.id}
                className="bg-Very_light_grayish_cyan cursor-pointer text-Very_dark_cyan pr-4 rounded-md text-2xl text-right placeholder:text-Dark_grayish_cyan border-2 border-Very_light_grayish_cyan hover:border-Strong_cyan"
                placeholder="Custom"
                onChange={props.onChange}
            >
            </input>
        </>
    );
}
