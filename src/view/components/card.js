import React, { PureComponent } from 'react';

class Card extends PureComponent {
  render() {
    return <img src={require(`../../assets/${this.props.selected}.svg`)} />;
  }
}

export default Card;
