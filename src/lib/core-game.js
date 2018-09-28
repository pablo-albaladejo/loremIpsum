import { submitPlay } from './api-service';

function getComputerOption(max) {
  return Math.floor(Math.random() * (max + 1));
}

function getCurrentBalance(bet, balance) {
  return balance - bet;
}

function canUserPlay(bet, balance) {
  return bet < balance;
}

function game() {
  const result = 0;

  const balance = 100;

  return {
    result,
    balance
  };
}

export default game;
