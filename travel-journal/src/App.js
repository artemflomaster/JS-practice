import React from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import data from './components/data'

const propsData = data.map((data) => {
  return (
    <Card
      key={data.id}
      {...data}
    />
  )
})

function App() {

  return (
    <div className="App">
      <Header />
      <div className="content">
        {propsData}
      </div>
    </div>
  );
}

export default App;
