import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(4)
  const [number,setNumber]=useState(false);
  const[character,setCharacter]=useState(true);
  const[password,setPassword]=useState("");
  return (
    <>
      <h1 className='text-4xl text-center text-white'>PASSWORD GENERATOR</h1>
      <button style={{backgroundColor:'white'}}>GENERATE</button>
    </>
  )
}

export default App
