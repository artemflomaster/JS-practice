import React from "react";


export default function Question(props) {
    let answersToShow = [];
    if (props) {
        answersToShow = props.answers.map(item => {
           //adding css if needed
           let theClass = ''
            switch (item.isChosen) {
                case true: { theClass = ' chosen';
            break }
                case 'correct': { theClass = ' correct';
            break }
                case 'incorrect': { theClass = ' incorrect';
            break }
            default: {theClass = ''}
            }

            return (
                <div className={'answer-button' + theClass} id={item.id} key={item.id} onClick={() => props.chooseHandler(item.id, props.id)}>{item.value}</div>
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