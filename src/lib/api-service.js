const request = require('request-promise');
const R = require('ramda');

const BASE_URL = 'http://hackathon.guidesmiths.com:4000/api';
const GAME_NAME = 'rock_scissors_paper';

const registerUser = user => {
  const uriEndpoint = BASE_URL + '/user';
  const body = user;
  const options = {
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    uri: uriEndpoint,
    body,
    json: true,
  };
  return request(options);
};

const submitPlay = play => {
  const uriEndpoint = `${BASE_URL}/nav/log`;
  const body = play;
  const options = {
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    uri: uriEndpoint,
    body,
    json: true,
  };

  return request(options);
};

const plays = () => {
  const uriEndpoint = `${BASE_URL}/nav/log`;
  const options = {
    headers: {
      accept: 'application/json',
    },
    method: 'GET',
    uri: uriEndpoint,
    json: true,
  };

  const filtering = (g) => g.gameId === GAME_NAME;
  return request(options)
    .then((data) => R.filter(filtering, data));
};

module.exports = {
  registerUser, // POST /user
  submitPlay, // POST /nav/log
  plays, // GET /nav/log
};
