import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import jwt_decode from 'jwt-decode';
//import setAuthToken from './setAuthToken';
//import { setCurrentUser, loginUser} from "./actions/auth";
//import   Login from '.components/login';





class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
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
            Learn Reacta
          </a>
        </header>
      </div>
    );
  }
}

export default App;
