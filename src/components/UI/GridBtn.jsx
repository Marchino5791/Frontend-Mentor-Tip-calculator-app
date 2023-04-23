import React from "react";

export default function GridBtn(props) {
    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {props.children}
        </div>
    )
}