import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const { number } = PropTypes;

class Player extends Component {
  render() {
    return (
      <div>
        <h1>Player</h1>
      </div>
    );
  }
}

Player.propTypes = {
  balance: number
};

Player.defaultProps = {
  balance: 0
};

export default Player;
