import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppName from './components/AppName';
import Header from './components/Header';
import Item1 from './components/Item1';
import Item2 from './components/Item2';
import './App.css';

function App() {

  return <center class="TODO Container">
      <AppName/>
      <div className="content">
        <Header/>
        <div className='Items'>
          <Item1/>
          <Item2/> 
        </div> 
      </div>

</center>

}

export default App
