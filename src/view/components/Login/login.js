import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Login extends PureComponent {
  state = {
    username: '',
    show: true
  };

  signIn = () => {
    // Call the api
    // this.state.username
    this.setState(show => ({ show: !show }));
  };

  onChange = (key, value) => {
    this.setState(
      {
        [key]: value
      },
      () => console.log(this.state.username)
    );
  };

  renderLogin() {
    const { show } = this.state;
    if (!show) return null;
    return (
      <div className="container">
        <img
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
    );
  }

  render() {
    return <div>{this.renderLogin()}</div>;
  }
}

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
