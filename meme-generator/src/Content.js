import React from "react";
// import memeData from "./memeData";

export default function Content() {
    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then((res) => res.json())
            .then(res => updateAllMemes(res))

        console.log("fetched")

    }, [])

    const [allMemes, updateAllMemes] = React.useState({});


    function getMeme() {
        const memesArray = allMemes.data.memes;
        const randomValue = Math.floor(memesArray.length * Math.random());
        const memeUrl = memesArray[randomValue].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: memeUrl


        }))
    }

    const [memedata, setMeme] = React.useState({
        randomImage: "https://i.imgflip.com/1ur9b0.jpg",
        topText: "One does not simply",
        bottomText: "Walk into Mordor"
    });
    function formHandler(event) {
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [event.target.name]: event.target.value
            }
        })


    }

    return (
        <div className="content">

            <div className="form">
                <input
                    type="text"
                    placeholder="top text"
                    name="topText"
                    onChange={formHandler}
                    value={memedata.topText}

                />
                <input
                    type="text"
                    placeholder="bottom text"
                    name="bottomText"
                    onChange={formHandler}
                    value={memedata.bottomText}

                />
                <button onClick={getMeme}>Get a new meme image  🖼</button>
            </div>
            <div className="image">
                <h2 className="meme--text top">{memedata.topText}</h2>
                <h2 className="meme--text bottom">{memedata.bottomText}</h2>
                <img src={memedata.randomImage} alt="meme" className="meme--image" />
            </div>
        </div>
    )
}