import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Game extends PureComponent {
  state = {
    turn: '',
    players: [],
    options: ['Scissors', 'Spock', 'Paper', 'Lizard', 'Rock']
  };

  render() {
    return (
      <div>
        <h1>Here's the Game</h1>
      </div>
    );
  }
}

Game.propTypes = {};

Game.defaultProps = {};

export default Game;
