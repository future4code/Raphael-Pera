import React, { useState } from 'react';
import './App.css';
import 'fontsource-roboto';
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/Router'
import {LoginPage} from './pages/LoginPage/LoginPage'
import { MainAppBar } from './components/MainAppBar';
// import { styled } from '@material-ui/core';


function App() {
  const token = localStorage.getItem('token')
  const [buttonName, setButtonName] = useState(token ? 'Logout' : 'Login')
  return (
    <div className="App">
      <BrowserRouter>
        <MainAppBar buttonName={buttonName} setButtonName={setButtonName} />
        <Router setButtonName={setButtonName} />
      </BrowserRouter>
    </div>
  );
}

export default App;
