import React, { Component } from 'react';

import './App.css';
import Main from '../src/view/components/Login/login';

class App extends Component {
  state = {
    user: {},
  };

  render() {
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
