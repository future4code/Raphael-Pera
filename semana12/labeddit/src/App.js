import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppContainer } from './components/AppContainer';
import 'fontsource-roboto';
import SignIn from './components/LoginMUI';
import { LoginTeste } from './components/LoginTeste';
import { Login } from './components/Login';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <AppContainer/> */}
      {/* <SignIn></SignIn> */}
      {/* <LoginTeste/> */}
      <Login></Login>
    </div>
  );
}

export default App;
