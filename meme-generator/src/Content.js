import React from "react";
import memeData from "./memeData";

export default function Content() {
    const meme = {
        topText: "",
        tottomText: "",
        randomImage: ""
    }



    function getMeme() {
        const memesArray = memeData.data.memes;
        const randomValue = Math.floor(memesArray.length * Math.random());
        const memeUrl = memesArray[randomValue].url;
        console.log(memeUrl);
        setMeme(prevMeme =>({
            ...prevMeme,
        randomImage: <img src={memeUrl} alt="meme image" />


        }))
    }

    const [memedata, setMeme] = React.useState({ lalala: 0 });


    return (
        <div className="content">

            <div className="form">
                <input type="text" placeholder="top text" />
                <input type="text" placeholder="bottom text" />
                <button onClick={getMeme}>Get a new meme image  🖼</button>
            </div>
            <div className="image">
                {memedata.randomImage}
            </div>
        </div>
    )
}