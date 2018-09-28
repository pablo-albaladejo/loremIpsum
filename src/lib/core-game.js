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

function getCurrentBalance(bet, balance) {
  return balance - bet;
}

function canUserPlay(bet, balance) {
  return bet < balance;
}

function updateBalance(balance, bet, gamble) {

  switch (gamble) {
    case CONSTANTS.GAMBLE.LOSE:
      return balance - bet;
    
    case CONSTANTS.GAMBLE.WIN:
      return balance + bet;
    
    default:
      return balance
  }

}

function game(playerOne, bet) {
  const playerTwo = getComputerOption(Object.keys(CONSTANTS.CARDS).length);

  const balance = 100;

  const gamble = play(playerOne, playerTwo);

  return {
    result: {
      status: CONSTANTS.STATUS.SUCCESS,
      gamble,
      playerTwo,
    },
    balance: updateBalance(balance, bet, gamble)
  };
}

export default game;
