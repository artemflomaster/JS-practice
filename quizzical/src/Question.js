import React from "react";
import Answer from "./Answer";
import {he} from 'he'

export default function Question(props) {
let answersToShow = '';
    if (props){
        console.log('props are pushed')
        answersToShow = props.answers.map(item => {
            return (
                <Answer value={item.value} key={item.key} isCorrect={item.isCorrect}/>
            )
        })
    }

    return (
        <div className="question-object" >
            <span className="question"><h1>{props.question}</h1></span>
            <div className="answers">
                {answersToShow}
            </div>
            <hr></hr>
        </div >



    )
}