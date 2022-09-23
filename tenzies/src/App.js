import './App.css';
import Square from './Square';
import React, { useEffect } from 'react';
import { nanoid } from 'nanoid'
import Confetti from "react-confetti";



export default function App() {

  function holdDice(toggledId) {
    setDice(prevDice => prevDice.map(square => {
      return (square.id === toggledId ? { ...square, isHeld: !square.isHeld } : square)

    }
    )
    )
  }


  function allNewDice() {
    const randomVals = [];

    for (let i = 0; i < 10; i++) {
      randomVals.push({ value: getRandom(), isHeld: false, id: nanoid() });
    }
    return randomVals;
  }

  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    //checking isHelds
    let areHeld = 0;
    for (let i = 0; i < dice.length; i++) {
      if (dice[i].isHeld) { areHeld++ } else { break };
    }

    //checking values
    let areValues = 1;
    let theValue = dice[0].value;
    if (areHeld === 10) {
      for (let i = 1; i < dice.length; i++) {
        if (dice[i].value === theValue) { areValues++ } else { break }
      }
    }
    //final check if all is correct
    if (areValues === 10) {
      console.log('YOU WIN!');
      setTenzies(true);
    }

  }, [dice])

  const squaresArray = [];
  for (let i = 0; i < 10; i++) {
    squaresArray.push(<Square key={dice[i].id} value={dice[i].value} isHeld={dice[i].isHeld} id={dice[i].id} holdHandler={holdDice} />);
  }

  function getRandom() {
    return Math.ceil(Math.random() * 6)
  }


  function updateDice() {
    setDice(oldDice => oldDice.map(dice => {
      return (dice.isHeld ? dice : { value: getRandom(), isHeld: false, id: nanoid() })
    }))


  }

  function newGame() {
    setDice(allNewDice());
    setTenzies(false);
  }


  return (
    <main>
      <div className="App">

        <h1>Tenzies</h1>
        <span>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</span>
        <div className='buttons-wrapper'>
          {squaresArray}

        </div>
        <button onClick={tenzies ? newGame : updateDice}>{tenzies ? "New Game" : "Roll"}</button>

        {tenzies && <Confetti />}
      </div>

    </main>
  );
}

