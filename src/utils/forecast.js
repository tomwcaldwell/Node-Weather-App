const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=5240998f20ebb7dc795bcadb602fb3a1&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '&units=m';

  request({ url, json: true }, (error, {body} = {}) => {

    if(error) {
      callback('Unable to connect to weather service.', undefined);
    } else if (body.error) {
      callback('Unable to find location.', undefined);
    } else {
      callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees and feels like ' + body.current.feelslike + ' degrees. The humidity is currently ' + body.current.humidity + '%.')
      console.log(body.current);
    }
  });
}

module.exports = forecast;