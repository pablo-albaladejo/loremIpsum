const request = require('request-promise');

module.exports = () => {

  const
  const registerUser = (user) => {
    const body = querystring.stringify(params);
    const options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      uri: sfEndpointsConfig.token,
      body,
      json: true,
    };
    return request(options);
  }

  return {
    registerUser, // POST /user
    registerGame, // POST /game/reg
    submitPlay, // POST /nav/log

    plays, // GET /nav/log
  }
}
