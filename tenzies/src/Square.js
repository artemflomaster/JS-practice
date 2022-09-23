import React from "react";

export default function Square(props) {
    const currentClass = "square " + (props.isHeld ? "isHeld" : "");

    return (
        <div className={currentClass} onClick={() => props.holdHandler(props.id)}>
            {props.value}

        </div>


    )
}