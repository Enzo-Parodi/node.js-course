const request = require('request');

const forecast = (longitude, latitude, callback) => {
  const url =
    'https://api.darksky.net/forecast/996aab7438b40786a2c1d91b14f00706/' +
    latitude +
    ',' +
    longitude +
    '?units=ca';

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to location services!', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(undefined, {
        temperature: body.currently.temperature,
        precipProbability: body.currently.precipProbability,
        summary: body.daily.data[0].summary
      });
    }
  });
};

module.exports = forecast;
