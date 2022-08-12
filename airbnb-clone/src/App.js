import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import propsData from './components/data';

export default function App() {
  const cardData = propsData.map(data =>{
    return <Card 
    key={data.id}
    {...data}
    />
  })
  
  
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className='cardsList'>
      {cardData}
      </div>
    </div>
  );
}


