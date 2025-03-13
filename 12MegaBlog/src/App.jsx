import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux';
import AuthService from './appwrite/auth.js';
import {login,logout} from './store/authSlice.js';
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
    <div className='min-h-1'>test</div>
  ) : null;
}

export default App
