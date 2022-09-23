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
    const [content, setContent] = React.useState(
        'Data is loading'
    )

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

    //generating the content Array
    function updateContent() {

        if (data.isLoaded) {
            const contentToSet = data.data.map(item => {
                //making answers object to push as prop
                const numberOfAnswers = item.incorrect_answers.length + 1;
                const randomVal = Math.floor(Math.random() * numberOfAnswers);
                const answersArray = item.incorrect_answers;
                answersArray.splice(randomVal, 0, item.correct_answer);
                const answersObject = [];
                for (let i = 0; i < answersArray.length; i++) {
                    answersObject.push(
                        {
                            key: i,
                            value: answersArray[i],
                            isCorrect: i === randomVal ? true : false
                        })
                }
                
                return (
                    <Question key={nanoid()} question={decode(item.question)} answers={answersObject} />


                )
            })

            setContent(contentToSet)
            console.log('content was set')
            setData({
                isLoaded: false,
                errorMessage: 'loading',
                data: null
            })
            console.log('data was cleaned')

        }
    }
    updateContent();


    return (
        <div className='main-page-wrapper'>
            {content}
<div className="control-footer">
<div className="message"><h1>Correct answers 3/5</h1></div>
<button>Check results</button>

</div>
        </div>
    )
}