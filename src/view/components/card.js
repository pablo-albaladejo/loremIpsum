import React, { PureComponent } from 'react';
import CONSTANTS from '../../lib/constants';

class Card extends PureComponent {
  render() {
    let fileName = CONSTANTS.FILENAMES[this.props.selected];
    return <img src={require(`../../assets/${fileName}.svg`)} alt={fileName}/>;
  }
}

export default Card;
