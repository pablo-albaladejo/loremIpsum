import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const { number } = PropTypes;

class Bet extends Component {
  render() {
    return (
      <div>
        <h1>Bet</h1>
      </div>
    );
  }
}

Bet.propTypes = {
  balance: number
};

Bet.defaultProps = {
  balance: 0
};

export default Bet;
