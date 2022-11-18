import React from 'react';
import './App.css';
import Note from './Note';
import { nanoid } from 'nanoid';


export default function App() {
  const [isLoaded, setLoading] = React.useState(false);

  //initial note. Using at first start and for a new one
  const initialNote = {
    id: nanoid(),
    header: '',
    content: '',
    color: getColor()
  }

  const [notes, setNotes] = React.useState([
    {
      initialNote
    }
  ])

  React.useEffect(() => {
    if (localStorage.getItem('stickynotes') !== null) {
      setNotes(JSON.parse(localStorage.getItem('stickynotes')));
      console.log('loaded from local storage')
    } else {
      setNotes([{
        id: nanoid(),
        header: '',
        content: '',
        color: getColor()
      }]);
      console.log('local saves not found. initial note loaded')
    }

    setLoading(true);

  }, [])



  //save notes to local storage on every state update
  if (isLoaded) {
    localStorage.setItem('stickynotes', JSON.stringify(notes));

  }

  function getColor() {
    const randomIndex = 1 + Math.floor(Math.random() * 5);
    return 'color' + randomIndex;
  }
  //creates new note
  function createNote() {
    setNotes(prev => {
      return ([...prev,
        initialNote
      ]
      )
    }
    )
  }


  //removing note by clickin X on it
  function removeNote(id) {
    setNotes(prev => {
      const filtered = prev.filter(note => note.id !== id);
      return filtered;
    })
  }

  //form handler. controlling form data in state
  function formHandler(targetName, targetValue, id) {

    setNotes(prevNotes => {
      return prevNotes.map(prevNote => {
        let noteToReturn = {}
        // console.log(id)
        //if the id is the same then change value. Else dont change anything
        prevNote.id === id ? noteToReturn = { ...prevNote, [targetName]: targetValue } : noteToReturn = prevNote;
        return noteToReturn
      })
    })

  }




  //mapping the content
  const content = notes.map(note => {
    return (
      <Note key={note.id} header={note.header} content={note.content} color={note.color} id={note.id} removeHandler={removeNote} formHandler={formHandler} />
    )
  }
  )


  return (
    <div className="App">
      <div className='notes-wrapper'>
        {content}
      </div>
      <div className='footer'>
        <button onClick={createNote}>Create new note</button>
      </div>

    </div>
  );
};


