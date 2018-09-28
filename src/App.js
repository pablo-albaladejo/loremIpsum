import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Game from '../src/view/components/Game/game';
import Login from '../src/view/components/Login/login';

class App extends Component {
  state = {
    isLoggedIn: true,
    user: {},
  };

  getLoggedUser = () => {
    if (localStorage.getItem('userData')) {
      this.setState(({ isLoggedIn }) => ({ isLoggedIn: !isLoggedIn }));
    }
  }
  render() {
    const { isLoggedIn } = this.state;
    return (
      <div className="App">
        {isLoggedIn ? (
          <Game />
        ) : (
            <div className="child-container">
              <Login getLoggedUser={this.getLoggedUser} />
            </div>
          )}
      </div>
    );
  }
}

export default App;
