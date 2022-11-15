import React from 'react';
import './App.css';
import Note from './Note';
import { nanoid } from 'nanoid';


export default function App() {
  const [notes, setNotes] = React.useState([
    {
      id: '123',
      header: 'New header',
      content: 'write something'
    }
  ])


  function createNote() {
    setNotes(prev => {
      console.log('add')
      return ([...prev,
      {
        id: nanoid(),
        header: 'New header',
        content: 'write something'
      }
      ]
      )
    }
    )
  }

  function removeNote(id){
setNotes(prev =>{
  const filtered = prev.filter(note => note.id!==id);
return filtered;
})
  }

  const content = notes.map(note => {
    return (
      <Note key={nanoid()} header={note.header} content={note.content} id={note.id} removeHandler={removeNote} />
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


