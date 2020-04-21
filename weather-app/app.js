const request = require('request');
require('dotenv').config();

const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API}&query=37.8267,-122.4233&units=f`;

request({ url, json: true }, (err, res) => {
    const result = res.body.current;
    console.log(
        `It is currently ${result.temperature}F degrees out. There is a ${result.precip}% chance of precip`
    );
});

const geourl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${process.env.MAPBOX_API}&limit=1`;

request({ url: geourl, json: true }, (err, res) => {
    const lat = res.body.features[0].center[1];
    const lng = res.body.features[0].center[0];
    console.log(lat, lng);
});
