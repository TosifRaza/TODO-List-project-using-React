import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppName from './components/AppName';
import Header from './components/Header';
import Item1 from './components/Item1';
import Item2 from './components/Item2';

function App() {

  return <center class="TODO Container">
    <AppName/>
    <div class="container text-center">
      <Header/>
      <Item1/>
      <Item2/>  
    </div>

</center>

}

export default App
