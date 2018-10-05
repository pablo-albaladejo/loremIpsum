import { submitPlay } from './api-service';

import CONSTANTS from './constants';

function play(playerOne, playerTwo) {
  const table = [
    CONSTANTS.CARDS.SCISSORS = [
      CONSTANTS.CARDS.SCISSORS = CONSTANTS.GAMBLE.TIE,
      CONSTANTS.CARDS.PAPER = CONSTANTS.GAMBLE.WIN,
      CONSTANTS.CARDS.ROCK = CONSTANTS.GAMBLE.LOSE,
      CONSTANTS.CARDS.LIZARD = CONSTANTS.GAMBLE.WIN,
      CONSTANTS.CARDS.SPOCK = CONSTANTS.GAMBLE.LOSE,
    ],

    CONSTANTS.CARDS.PAPER = [
      CONSTANTS.CARDS.SCISSORS = CONSTANTS.GAMBLE.LOSE,
      CONSTANTS.CARDS.PAPER = CONSTANTS.GAMBLE.TIE,
      CONSTANTS.CARDS.ROCK = CONSTANTS.GAMBLE.WIN,
      CONSTANTS.CARDS.LIZARD = CONSTANTS.GAMBLE.LOSE,
      CONSTANTS.CARDS.SPOCK = CONSTANTS.GAMBLE.WIN,
    ],

    CONSTANTS.CARDS.ROCK = [
      CONSTANTS.CARDS.SCISSORS = CONSTANTS.GAMBLE.WIN,
      CONSTANTS.CARDS.PAPER = CONSTANTS.GAMBLE.LOSE,
      CONSTANTS.CARDS.ROCK = CONSTANTS.GAMBLE.TIE,
      CONSTANTS.CARDS.LIZARD = CONSTANTS.GAMBLE.WIN,
      CONSTANTS.CARDS.SPOCK = CONSTANTS.GAMBLE.LOSE,
    ],

    CONSTANTS.CARDS.LIZARD = [
      CONSTANTS.CARDS.SCISSORS = CONSTANTS.GAMBLE.LOSE,
      CONSTANTS.CARDS.PAPER = CONSTANTS.GAMBLE.WIN,
      CONSTANTS.CARDS.ROCK = CONSTANTS.GAMBLE.LOSE,
      CONSTANTS.CARDS.LIZARD = CONSTANTS.GAMBLE.TIE,
      CONSTANTS.CARDS.SPOCK = CONSTANTS.GAMBLE.WIN,
    ],

    CONSTANTS.CARDS.SPOCK = [
      CONSTANTS.CARDS.SCISSORS = CONSTANTS.GAMBLE.WIN,
      CONSTANTS.CARDS.PAPER = CONSTANTS.GAMBLE.LOSE,
      CONSTANTS.CARDS.ROCK = CONSTANTS.GAMBLE.WIN,
      CONSTANTS.CARDS.LIZARD = CONSTANTS.GAMBLE.LOSE,
      CONSTANTS.CARDS.SPOCK = CONSTANTS.GAMBLE.TIE,
    ]
  ];

  return table[playerOne][playerTwo];
}

function getComputerOption(max) {
  return Math.floor(Math.random() * (max + 1));
}

function getChange(bet, gamble) {
  switch (gamble) {
    case CONSTANTS.GAMBLE.LOSE:
      return -bet;

    case CONSTANTS.GAMBLE.WIN:
      return +bet;

    default:
      return 0
  }
}

function game(username, playerOne, bet, balance) {
  return new Promise((resolve, reject) => {
    const playerTwo = getComputerOption(Object.keys(CONSTANTS.CARDS).length - 1);
    const gamble = play(playerOne, playerTwo);

    const req = {
      gameId: 'rock_scissors_paper',
      userName: username,
      bet: bet,
      change: getChange(bet, gamble)
    };

    let res = {
      gamble,
      playerOne,
      playerTwo,
      balance,
    }

    if (gamble !== 2) { // balance changed!!
      submitPlay(req)
        .then(result => {
          res.balance += result.change;
          resolve(res)
        })
        .catch(err => {
          console.log(err);
          reject(err)
        })
    } else {
      resolve(res)
    }


  });
}

export default game;
