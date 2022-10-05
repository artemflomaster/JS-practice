import React from "react";
import Question from "./Question";
import { nanoid } from "nanoid";
import { decode } from "he";


export default function MainPage() {


    //state of the Data loading    
    const [data, setData] = React.useState({
        isLoaded: false,
        errorMessage: 'loading',
        data: null
    });
    //state of the content
    const [contentArray, setContent] = React.useState([])


    //fetching the Data and updating the Data state
    React.useEffect(() => {

        async function getData() {
            try {
                console.log('Fetching');
                const url = 'https://opentdb.com/api.php?amount=5';
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Failed. Server response ${response.status}`)
                }
                const json = await response.json();

                if (json.response_code === 1) {
                    throw new Error(`Failed. Wrong API request. No results`)
                } else if (json.response_code === 2) {
                    throw new Error(`Failed. Wrong API parameters. No results`)
                }
                console.log('it should update data now')
                console.log(json.results)
                setData({
                    isLoaded: true,
                    errorMessage: '',
                    data: json.results
                });

            }
            catch (err) {
                console.error(err);
                setData({
                    isLoaded: false,
                    errorMessage: 'Somethin went wrong. Please Try Again!',
                    data: null
                });
            }

        }

        getData();

    }, [])

    //generating the initial content Array

    function initialContent() {

        if (data.isLoaded) {
            const initialArray = data.data.map(item => {
                //making answers object 
                const numberOfAnswers = item.incorrect_answers.length + 1;
                const randomVal = Math.floor(Math.random() * numberOfAnswers);
                const answersArray = item.incorrect_answers;
                answersArray.splice(randomVal, 0, item.correct_answer);
                const answersObject = [];
                for (let i = 0; i < answersArray.length; i++) {
                    answersObject.push(
                        {
                            key: i,
                            value: decode(answersArray[i]),
                            isCorrect: i === randomVal ? true : false,
                            isChosen: false,
                            id: nanoid()
                        })
                }

                return ({
                    question: decode(item.question),
                    id: nanoid(),
                    answers: answersObject
                }



                )
            })

            setContent(initialArray)
            console.log('content was set')

            // clearing the data state to prevent updating the initial content state
            setData({
                isLoaded: false,
                errorMessage: 'loading',
                data: null
            })
            console.log('data was cleaned')

        }
    }
    initialContent();


    let contentToShow = 'Data is loading'
    if (contentArray.length > 0) {
        contentToShow = contentArray.map(item => {
            return (
                < Question key={nanoid()} id={item.id} question={item.question} answers={item.answers} chooseHandler={chooseAnswer} />
            )
        }
        )
    }
    //mark chosen answer
    function chooseAnswer(id, questionID) {
        console.log(questionID);
        setContent(oldContent => oldContent.map(item => {


            //if choose another answer it automatically deselect another one
            const objectToReturn = item.id === questionID ? {
                ...item,
                answers: item.answers.map(answer => {
                    return (answer.id === id ? { ...answer, isChosen: !answer.isChosen } : { ...answer, isChosen: false })
                }
                )
            } : item


            return (objectToReturn)
        })
        )
    }
    //state of results
    const [answerCheackingText, setAnswersText] = React.useState('');
    function checkResults() {

        //calculating correct answers
        let checkingInt = 0;
        contentArray.forEach(element => {
            element.answers.forEach(answer => {
                if (answer.isChosen && answer.isCorrect) { checkingInt++ }
            })
        });
        //resetting the content with different colors of answers
        setContent(prev => prev.map(item => {

            return ({
                ...item,
                answers: item.answers.map(answer => {
                    if (answer.isChosen && answer.isCorrect) {
                        return ({
                            ...answer,
                            isChosen: 'correct'
                        })
                    } else if (answer.isChosen) {
                        return ({
                            ...answer,
                            isChosen: 'incorrect'
                        })
                    } else {
                        return answer;
                    }

                })
            })
        }));
        setAnswersText('You scored ' + checkingInt + '/5 correct answers');
    }

    return (
        <div className='main-page-wrapper'>
            {contentToShow}
            <div className="control-footer">
                <div className="message"><h1>{answerCheackingText}</h1></div>
                <button onClick={checkResults}>Check results</button>

            </div>
        </div>
    )
}