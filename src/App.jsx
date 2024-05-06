import React,{useState} from 'react'

import './App.css'
import { Login } from './components/Login'
import { Register } from './components/Register'


function App() {
  const [currForm, setCurrentForm] = useState('login');

  return (
    <div className="App">
      {
       currForm=="login"? <Login/>:<Register/>
      }
    </div>
  )
}

export default App
