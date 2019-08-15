const request = require('request');

const url =
  'https://api.darksky.net/forecast/996aab7438b40786a2c1d91b14f00706/50.2005,8.5804?units=ca&slang=es';

const geocodeURL =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZW56by1wYXJvZGkiLCJhIjoiY2p6Y2N3OHBwMDRmYTNnbWcydGhmdGlmbSJ9.pFJo4fFLNaBTcZisSmz0YA&limit=1';

request({ url: url, json: true }, (error, response) => {
  const temperature = response.body.currently.temperature;
  const precipProbability = response.body.currently.precipProbability;

  //   console.log(
  //     `${
  //       response.body.daily.data[0].summary
  //     } It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain`
  //   );
});

request({ url: geocodeURL, json: true }, (error, response) => {
  const longitude = response.body.features[0].center[0];
  const latitude = response.body.features[0].center[1];

  console.log(`latitude: ${latitude}, longitude: ${longitude}`);
});
