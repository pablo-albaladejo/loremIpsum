import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import game from '../../../lib/core-game';
import Card from '../../components/card';

import CONSTANTS from '../../../lib/constants';
import './style.css';

class Game extends PureComponent {
  state = {
    balance: 200,
    username: 'Ismael',
    userSelected: '',
    computerSelected: '',
    username: localStorage.getItem('userData') && JSON.parse(localStorage.getItem('userData')).name,
    balance: localStorage.getItem('userData') && JSON.parse(localStorage.getItem('userData')).coin,
    bet: '',
    result: '',
  };

  onPlayPress = () => {
    const result = game(CONSTANTS.CARDS.ROCK, 100, this.state.balance);

    this.setState({
      balance: result.balance,
    });
    console.log(result);
  };

  onLogOut = () => {
    //TODO log out :clown_face:
  };

  renderUserResult = () => {
    const { userSelected } = this.state;
    return <Card selected={userSelected} />;
  };

  renderComputerResult = () => {
    const { computerSelected } = this.state;
    return <Card selected={computerSelected} />;
  };

  renderTextResult = () => {
    const { result } = this.state;
    return (
      <div>
        <h1>{result}</h1>
      </div>
    );
  };

  renderResult = () => {
    return (
      <div>
        {this.renderUserResult()}
        {this.renderTextResult()}
        {this.renderUserResult()}
      </div>
    );
  };

  renderHeader() {
    const { balance, username } = this.state;
    if (!username) return null;
    return <div className="header">
      <div><span className="user">{username}</span>
        <span className="balance">{balance}</span></div>
            
            <div className="logOut">
                <img onClick={this.onLogOut} src={require("../../../assets/logout.svg")} />
            </div>
        </div>;
  }

  renderCards() {
    return <div className="card-container">
            <div className="card">
                <img src={require("../../../assets/rock.svg")} />
                <p className="card-title">Rock</p>
            </div>

            <div className="card">
                <img src={require("../../../assets/paper.svg")} />
                <p className="card-title">Paper</p>
            </div>

            <div className="card">
                <img src={require("../../../assets/scissors.svg")} />
                 <p className="card-title">Scissors</p>
            </div>

            <div className="card">
                <img src={require("../../../assets/lizard.svg")} />
                <p className="card-title">Lizard</p>
            </div>

            <div className="card">
                <img src={require("../../../assets/spock.svg")} />
                <p className="card-title">Spock</p>
            </div>
        </div>;
  }

  onBetChange = (key, value) => {
    this.setState(
      {
        [key]: value,
      },
      () => console.log(this.state)
    );
  };

  renderBottom() {
    return (
      <div>
        <input
          onChange={evt => this.onBetChange('bet', evt.target.value)}
          placeholder="Bet..."
        />
        <button className="play" onClick={this.onPlayPress}>Play</button>
      </div>
    );
  }

  render() {
    return (
      <div className="game-container">
        {this.renderHeader()}
        {this.result ? this.renderResult() : this.renderCards()}
        {this.renderBottom()}
      </div>
    );
  }
}

Game.propTypes = {};

Game.defaultProps = {};

export default Game;
