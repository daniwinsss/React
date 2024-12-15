import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter=5;
  let [counter,setCounter]=useState(5);
  function Addvalue(){
    setCounter(counter=>counter+1);
    setCounter(counter=>counter+1);
    // setCounter(counter+1);
  }
  function Decreasevalue(){
    setCounter(counter-1);
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
