import './App.css';
import Square from './Square';
import React from 'react';
import {nanoid} from 'nanoid'

export default function App() {
  function allNewDice() {
    const randomVals = [];

    for (let i = 0; i < 10; i++) {
      let randomValue = 10;
      while (randomValue > 6) {
        randomValue = Math.round(Math.random() * 10 + 1)

      }
      randomVals.push({value:randomValue, isHeld:false, id:nanoid()});
    }

    return randomVals;
  }
  const [dice, setDice] = React.useState(allNewDice());
  
  const squaresArray = [];
  for (let i = 0; i < 10; i++) {
    squaresArray.push(<Square key={dice[i].id} value={dice[i].value} isHeld={dice[i].isHeld} />);
  }

function updateDice(){
  setDice(allNewDice())
}

  return (
    <main>
      <div className="App">

        <h1>Tenzies</h1>
        <span>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</span>
        <div className='buttons-wrapper'>
          {squaresArray}

        </div>
        <button onClick={updateDice}>Roll</button>


      </div>
    </main>
  );
}

