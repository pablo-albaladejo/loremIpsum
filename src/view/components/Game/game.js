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
    username:
      localStorage.getItem('userData') &&
      JSON.parse(localStorage.getItem('userData')).name,
    balance:
      localStorage.getItem('userData') &&
      JSON.parse(localStorage.getItem('userData')).coin,
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
    localStorage.removeItem('userData');
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
    return (
      <div className="header">
        <div>
          <span className="user">{username}</span>
          <span className="balance">{balance}</span>
        </div>

        <div className="logOut">
          <img
            onClick={this.onLogOut}
            src={require('../../../assets/logout.svg')}
          />
        </div>
      </div>
    );
  }

  renderCards() {
    return (
      <div className="card-container">
        <img src={require('../../../assets/rock.svg')} />

        <img src={require('../../../assets/paper.svg')} />

        <img src={require('../../../assets/scissors.svg')} />

        <img src={require('../../../assets/lizard.svg')} />

        <img src={require('../../../assets/spock.svg')} />
      </div>
    );
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
        <button onClick={this.onPlayPress}>Play</button>
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
