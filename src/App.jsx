import './App.css';
import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import Rows from './Components/Rows/Rows';

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Rows/>
    </div>
  );
}

export default App;
