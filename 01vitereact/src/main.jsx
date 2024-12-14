import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
function app(){
  return(
    <h1>hello ji</h1>
  )
}
createRoot(document.getElementById('root')).render(
  app() 
)
