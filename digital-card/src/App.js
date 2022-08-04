import './App.css';
import React from 'react';
import Info from './components/Info';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="App">
      <div className='column-wrapper'>
        <Info />
        <div className='about-interests'>
          <About />
          <Interests />
        </div>
        <Footer />
      </div>
    </div>
  );
}

