import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Game from '../src/view/components/Game/game';
import Main from '../src/view/components/Login/login';

class App extends Component {
  state = {
    user: {},
  };

  render() {
    const { isLoggedIn } = this.state;
    return (
      <div className="App">
        <div className="child-container">
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
