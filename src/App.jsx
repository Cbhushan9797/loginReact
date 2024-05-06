import React, { useState } from 'react';
import './App.css';
import { Login } from './components/Login';
import { Register } from './components/Register';

function App() {
  const [currForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      {currForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Register />}
    </div>
  );
}

export default App;
