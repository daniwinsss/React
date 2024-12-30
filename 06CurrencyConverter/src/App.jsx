import { useState } from 'react'
import {InputBox} from './components/InputBox'
import useCurrencyinfo from './hooks/useCurrencyinfo'
import './App.css'
function App() {
  const [amount , setAmount] = useState(0);
  const [from , setFrom] = useState("usd");
  const [to , setTo] = useState("inr");
  return (
    <>
      <h1 className='text-3xl bg-orange-500'>currency App</h1>
    </>
  )
}

export default App
