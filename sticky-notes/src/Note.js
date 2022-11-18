import React from "react";

export default function Note(props) {


    const noteStyle = 'note ' + props.color;
    return (
        <div className={noteStyle}>
            <div className="note-header">
                <input className='input-header' name='header' placeholder='New header' type='text' value={props.header} onChange={(e) => props.formHandler(e.target.name, e.target.value, props.id)} />
                <svg className="button-header" onClick={() => props.removeHandler(props.id)} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" /></svg>
            </div>
            <div className="note-content">
                <textarea className='text-content' placeholder='write something' name='content' value={props.content} onChange={(e) => props.formHandler(e.target.name, e.target.value, props.id)} />
            </div>

        </div>
    )
}