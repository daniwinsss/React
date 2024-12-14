import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter=5;
  let [counter,setCounter]=useState(5);
  function Addvalue(){
    counter++;
    counter=counter<=20?counter:20;
    setCounter(counter);
  }
  function Decreasevalue(){
    counter--;
    counter=Math.max(counter,0);
    setCounter(counter);
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h3>Count is {counter}</h3>
      <button onClick={Addvalue}>Add value</button>
      <br />
      <button onClick={Decreasevalue}>Decrease value</button>
    </>
  )
}

export default App
