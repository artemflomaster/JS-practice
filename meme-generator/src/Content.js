import React from "react";

export default function Content() {

    function randomVal() {
        const randomValue = Math.floor(100 * Math.random()) + 1;
        console.log(randomValue);
    }




    return (
        <div className="content">

            <div className="form">
                <input type="text" placeholder="top text" />
                <input type="text" placeholder="bottom text" />
                <button onClick={randomVal}>Get a new meme image  🖼</button>
            </div>
            <div className="image">
                <img src="./images/memeimg.png" alt="meme" />
            </div>
        </div>
    )
}