import React from 'react'
import './App.css';
import Entry from './Entry.js'
import data from './data.js'
import Navbar from './Navbar.js'

function App() {

const Cards = data.map((item =>{
  return <Entry 
        key={item.id}
        {...item}
  />
}))

  return (
    <div className="App">
        <div className="Main-Container">
        <Navbar/>
        {Cards}
        
        </div>
     
    </div>
  );
}

export default App;
