import React from 'react';
import './App.css';
import Intro from './Intro';
import MainPage from './MainPage';


export default function App() {
  const [isIntro, updateIntroState] = React.useState(true);

  function introToggle() {
    updateIntroState(prev => !prev)
  }
  const content = isIntro ? <Intro key='intro' introToggle={introToggle} /> : <MainPage />;

  return (
    <div className="App">
      <div className="bg-wrapper">
        {content}
        <img className="blob5" src={require('./blob5.png')} alt="blob" />
        <img className="blob" src={require('./blobs.png')} alt="blob" />
      </div>
    </div >
  );
}

