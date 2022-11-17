import React from "react";

export default function Note(props) {

    // let hStyle = {};

    // function heightHandler(e) {
    //     console.log(e.target.scrollHeight);
    //     let hStyle = 
    //     {
    //         height: e.target.scrollHeight +'px;'
    //     }
    // }
    // style={hStyle} onKeyUp={(e) => heightHandler(e)}
    // const textArea = document.getElementsByName('content');
    // console.log(textArea);
    // textArea.style.height = textArea.scrollHeight + 'px;';
    // const textArea = document.getElementsByName('content');
    //     console.log(textArea.length);

    //     for (let i = 0; i < textArea.length; i++) {
    //       console.log(textArea[i])
    //       textArea[i].style.height = textArea[i].scrollHeight+100 + 'px;';
    //     }
    console.log(props.color);
    const noteStyle = 'note ' + props.color;
    return (
        <div className={noteStyle}>
            <div className="note-header">
                <input className='input-header' name='header' placeholder='header' type='text' value={props.header} onChange={(e) => props.formHandler(e.target.name, e.target.value, props.id)} />
                <button className="button-header" onClick={() => props.removeHandler(props.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="-0 0 20 20"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" /></svg>
                </button>
            </div>
            <div className="note-content">
                <textarea className='text-content' placeholder="content" name='content' value={props.content} onChange={(e) => props.formHandler(e.target.name, e.target.value, props.id)} />
            </div>

        </div>
    )
}