import React, { PureComponent } from 'react';
import './style.css';

import { registerUser } from '../../../lib/api-service';
import Game from '../Game/game';
class Main extends PureComponent {
  state = {
    username: '',
    isLoggedIn: false,
  };

  componentDidMount() {
    if (localStorage.getItem('userData')) {
      this.setState(({ isLoggedIn }) => ({ isLoggedIn: !isLoggedIn }));
    }
  }

  changeLogStatus = () => {
    this.setState(({ isLoggedIn }) => ({ isLoggedIn: !isLoggedIn }));
  };

  signIn = () => {
    registerUser({
      name: this.state.username,
    })
      .then(userData => {
        localStorage.setItem('userData', JSON.stringify(userData));
        this.setState({ isLoggedIn: true });
      })
      .catch(err => {
        console.log(err);
      });
  };

  onChange = (key, value) => {
    this.setState(
      {
        [key]: value,
      }
      //() => console.log(this.state.username)
    );
  };

  renderLogin() {
    const { isLoggedIn } = this.state;
    if (isLoggedIn) return <Game changeLogStatus={this.changeLogStatus} />;
    return (
      <div className="container">
        <div className="container-child">
          <img
            alt={'logo'}
            className="logo"
            src={require('../../../assets/7083c3658678335b0333e24bc3e-01.svg')}
          />
          <input
            onChange={evt => this.onChange('username', evt.target.value)}
            className="input"
            placeholder="User Name"
          />
          <button className="login" onClick={this.signIn}>
            Login
          </button>
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.renderLogin()}</div>;
  }
}

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
