import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const { number } = PropTypes;

class Card extends Component {
  render() {
    return (
      <div>
        <h1>Card</h1>
      </div>
    );
  }
}

Card.propTypes = {
  balance: number
};

Card.defaultProps = {
  balance: 0
};

export default Card;
