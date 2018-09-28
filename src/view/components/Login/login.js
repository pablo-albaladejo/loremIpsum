import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.css';


import { registerUser } from '../../../lib/api-service';
class Login extends PureComponent {
  state = {
    username: '',
    show: true,
  };

  signIn = () => {
    this.props.getLoggedUser();

    //this.setState(show => ({ show: !show }));
    registerUser({
      name: this.state.username,
    }).then(userData => {
      localStorage.setItem('userData', JSON.stringify(userData));
      this.setState(show => ({ show: !show }));
    }).catch(err => {
      console.log(err);
    });
  };

  onChange = (key, value) => {
    this.setState(
      {
        [key]: value,
      },
      //() => console.log(this.state.username)
    );
  };

  renderLogin() {
    const { show } = this.state;
    if (!show) return null;
    return <div className="container">
      <div className="container-child">
        <img src={require("../../../assets/7083c3658678335b0333e24bc3e-01.svg")} />
        <input onChange={evt => this.onChange("username", evt.target.value)} className="input" placeholder="User Name" />
        <button className="login" onClick={this.signIn}>
          Login
                </button>
      </div>
    </div>;
  }

  render() {
    return <div>{this.renderLogin()}</div>;
  }
}

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
