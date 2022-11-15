import React from "react";

export default function Note(props) {
    return (
        <div className="note">
            <div className="note-header"><input type='text' value={props.header} /><button onClick={() => props.removeHandler(props.id)}>X</button></div>
            <div className="note-content"><textarea>{props.content}</textarea></div>

        </div>
    )
}