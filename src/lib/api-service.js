const request = require('request-promise');
const BASE_URL = 'http://hackathon.guidesmiths.com:4000/api';

const registerUser = user => {
  const uriEndpoint = BASE_URL + '/user';
  const body = user;
  const options = {
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    uri: uriEndpoint,
    body,
    json: true,
  };
  return request(options);
};

const submitPlay = play => {
  const uriEndpoint = BASE_URL + '/nav/log';
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


  // return request(options);
  return Promise.resolve({
    "gameId": "rock_scissors_paper",
    "userName": "kunb",
    "bet": 12,
    "change": 12,
    "createdAt": "2018-09-28T10:10:58.524Z",
    "_id": "5badfe328993340010c265cf"
  });
};

const plays = () => {
  const uriEndpoint = BASE_URL + '/nav/log';
  const options = {
    headers: {
      accept: 'application/json',
    },
    method: 'GET',
    uri: uriEndpoint,
    json: true,
  };

  // return request(options);
  return Promise.resolve([
    {
      "_id": "5bacfc9d4443430010230d14",
      "gameId": "even-odd-game",
      "userName": "nochtap",
      "bet": 5,
      "change": 5,
      "createdAt": "2018-09-27T15:51:57.423Z"
    },
    {
      "_id": "5bacfc9f4443430010230d15",
      "gameId": "even-odd-game",
      "userName": "nochtap",
      "bet": 5,
      "change": 5,
      "createdAt": "2018-09-27T15:51:58.976Z"
    }]);
};

module.exports = {
  registerUser, // POST /user
  submitPlay, // POST /nav/log
  plays, // GET /nav/log
};
