import React from "react";

export default function Intro(props) {
    return (
        <div className='intro-content-wrapper'>
            <h1>Quizzical</h1>
            <span>the application that processes data from Trivia API.
                
            </span>
            <button onClick={props.introToggle}>Start quiz</button>
        </div>

    )
}