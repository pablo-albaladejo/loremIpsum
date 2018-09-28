import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import game from '../../../lib/core-game';

import './style.css';

class Game extends PureComponent {
  state = {
    balance: 200,
    username: 'Ismael'
  };

  onPlayPress = () => {
    console.log(game(0, 50));
  };

  onLogOut = () => {
    //TODO log out :clown_face:
  };

  renderHeader() {
    const { balance, username } = this.state;

    if (!username) return null;
    return (
      <div className="header">
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

  renderGame() {}

  render() {
    return (
      <div>
        <h1 />
        <button onClick={this.onPlayPress} />
      </div>
    );
  }
}

Game.propTypes = {};

Game.defaultProps = {};

export default Game;
