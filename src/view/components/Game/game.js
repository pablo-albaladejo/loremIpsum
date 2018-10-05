import React, { PureComponent } from 'react';
import game from '../../../lib/core-game';
import Card from '../../components/card';

import CONSTANTS from '../../../lib/constants';
import './style.css';

class Game extends PureComponent {
  state = {
    userSelected: 0,
    computerSelected: '',
    username:
      localStorage.getItem('userData') &&
      JSON.parse(localStorage.getItem('userData')).name,
    balance:
      localStorage.getItem('userData') &&
      JSON.parse(localStorage.getItem('userData')).coin,
    bet: 10,
    result: {},
    isLoggedIn: true,
  };

  onPlayPress = () => {
    game(
      this.state.username,
      this.state.userSelected,
      this.state.bet,
      this.state.balance
    )
      .then(result => {
        this.setState({
          balance: result.balance,
          userSelected: result.playerOne,
          computerSelected: result.playerTwo,
          result: result,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  onLogOut = () => {
    localStorage.removeItem('userData');
    this.setState(({ isLoggedIn }) => ({ isLoggedIn: !isLoggedIn }));
    this.props.changeLogStatus();
  };

  renderUserResult = () => {
    const { userSelected } = this.state;
    return <Card selected={userSelected} />;
  };

  renderComputerResult = () => {
    const { computerSelected } = this.state;
    return <Card selected={computerSelected} />;
  };

  resetState = () => {
    this.setState({ result: '' });
  };

  renderResultMessage = () => {
    switch (this.state.result.gamble) {
      case CONSTANTS.GAMBLE.WIN:
        return (<h1 className="win">You win the round</h1>);
      case CONSTANTS.GAMBLE.LOSE:
        return (<h1 className="lose">You lose the round</h1>);
      default:
        return (<h1 className="tie">It's a Tie!</h1>)
    }
  }

  renderResult = () => {
    return (
      <div className="game-result">
        <div className="card">
          {this.renderComputerResult()}
          <p className="card-title">Computer</p>
        </div>
        {this.renderResultMessage()}
        <div className="card">
          {this.renderUserResult()}
          <p className="card-title">You</p>
        </div>
        <button className="play-again" onClick={() => this.resetState()}>
          Play again
        </button>
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
            alt={'logout'}
          />
        </div>
      </div>
    );
  }

  renderCards() {
    return (
      <div>
        <div className="card-container">

          <div
            className={"card" + (this.state.userSelected === CONSTANTS.CARDS.SCISSORS ? " active" : "")}
            onClick={() =>
              this.setState({ userSelected: CONSTANTS.CARDS.SCISSORS })
            }
          >
            <img src={require('../../../assets/scissors.svg')} alt={'scissors'} />
            <p className="card-title">Scissors</p>
          </div>

          <div
            className={"card" + (this.state.userSelected === CONSTANTS.CARDS.PAPER ? " active" : "")}
            onClick={() => this.setState({ userSelected: CONSTANTS.CARDS.PAPER })}
          >
            <img src={require('../../../assets/paper.svg')} alt={'paper'} />
            <p className="card-title">Paper</p>
          </div>

          <div
            className={"card" + (this.state.userSelected === CONSTANTS.CARDS.ROCK ? " active" : "")}
            onClick={() => this.setState({ userSelected: CONSTANTS.CARDS.ROCK })}
          >
            <img src={require('../../../assets/rock.svg')} alt={'rock'} />
            <p className="card-title">Rock</p>
          </div>

          <div
            className={"card" + (this.state.userSelected === CONSTANTS.CARDS.LIZARD ? " active" : "")}
            onClick={() => this.setState({ userSelected: CONSTANTS.CARDS.LIZARD })}
          >
            <img src={require('../../../assets/lizard.svg')} alt={'lizard'} />
            <p className="card-title">Lizard</p>
          </div>

          <div
            className={"card" + (this.state.userSelected === CONSTANTS.CARDS.SPOCK ? " active" : "")}
            onClick={() => this.setState({ userSelected: CONSTANTS.CARDS.SPOCK })}
          >
            <img src={require('../../../assets/spock.svg')} alt={'spock'} />
            <p className="card-title">Spock</p>
          </div>
        </div>
        {this.renderPlayFooter()}
      </div>
    );
  }

  onBetChange = (key, value) => {
    this.setState(
      {
        [key]: parseInt(value, 10),
      },
      () => console.log(this.state)
    );
  };

  renderPlayFooter() {
    return (
      <div className="container-play">
        <input
          defaultValue={this.state.bet}
          onChange={evt => this.onBetChange('bet', evt.target.value)}
          placeholder="Bet..."
        />
        <button className="play" onClick={this.onPlayPress}>
          Play
        </button>
      </div>
    );
  }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <div>
        {isLoggedIn ? (
          <div className="game-container">
            {this.renderHeader()}
            {Object.keys(this.state.result).length > 0
              ? this.renderResult()
              : this.renderCards()}
          </div>
        ) : null}
      </div>
    );
  }
}

Game.propTypes = {};

Game.defaultProps = {};

export default Game;
