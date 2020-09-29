import React from 'react';
import './App.css';
import 'fontsource-roboto';
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/Router'
import {LoginPage} from './pages/LoginPage/LoginPage'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
