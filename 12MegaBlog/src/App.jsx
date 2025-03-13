import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux';
import AuthService from './appwrite/auth.js';
import {login,logout} from './store/authSlice.js';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
function App() {
  const [loading,setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(()=> {
    AuthService.getCurrentUser()
    .then((userdata) => {
      if(userdata){
        dispatch(login(userdata));

      }
      else{
        dispatch(logout());
      }
    })
    .finally(() => {
      setLoading(false);
    })
  },[])
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <Footer/>
      </div>
    </div>
  ) : null;
}

export default App
