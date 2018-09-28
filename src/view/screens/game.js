import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import game from '../../lib/core-game';

class Game extends PureComponent {
  state = {
    turn: '',
    players: [],
    options: ['Scissors', 'Spock', 'Paper', 'Lizard', 'Rock']
  };

  onPlayPress = () => {
    console.log(game(0, 50));
  };

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
