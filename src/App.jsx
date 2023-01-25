import './App.css';
import React from 'react';
import { action, originals, comedy } from './urls';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import Rows from './Components/Rows/Rows';

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Rows url={originals} title='Netflix Originals' />
      <Rows url={action} title='Action' isSmall />
      <Rows url={comedy} title='Horror' isSmall />
    </div>
  );
}

export default App;
