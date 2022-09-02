import React from "react";

export default function Square(props){
    const currentClass = "square " + (props.isHeld ? "isHeld": "");
    
    
    return(
<div className={currentClass}>
{props.value}

</div>


    )
}