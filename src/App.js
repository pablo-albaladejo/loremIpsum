import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Game from '../src/view/screens/game';
import Login from '../src/view/components/Login/login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game />
        <div className="child-container">
          <Login />
        </div>
      </div>
    );
  }
}

export default App;
