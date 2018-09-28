import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import game from '../../../lib/core-game';

import './style.css';

class Game extends PureComponent {
  state = {
    balance: 200,
    username: 'Ismael',
    selected: '',
    bet: '',
  };

  onPlayPress = () => {
    console.log('Start game');
  };

  onLogOut = () => {
    //TODO log out :clown_face:
  };

  renderHeader() {
    const { balance, username } = this.state;
    if (!username) return null;
    return (
      <div className="card-header">
        <span>{username}</span>
        <span>{balance}</span>
        <div className="logOut">
          <img
            onClick={this.onLogOut}
            src={require('../../../assets/logout-2.svg')}
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
        <button onClick={this.onPlayPress()}>Play</button>
      </div>
    );
  }

  render() {
    return (
      <div className="game-container">
        {this.renderHeader()}
        {this.renderCards()}
        {this.renderBottom()}
      </div>
    );
  }
}

Game.propTypes = {};

Game.defaultProps = {};

export default Game;
