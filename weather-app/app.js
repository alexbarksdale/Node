const request = require('request');
require('dotenv').config();

const geocode = require('./utils/geocode');

// const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API}&query=37.8267,-122.4233&units=f`;
// request({ url, json: true }, (err, res) => {
//     if (err) {
//         console.log(err);
//     } else if (res.body.error.type === 'missing_query') {
//         console.log('Unable to find location');
//     } else {
//         const result = res.body.current;
//         console.log(
//             `It is currently ${result.temperature}F degrees out. There is a ${result.precip}% chance of precip`
//         );
//     }
// });

// const geourl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${process.env.MAPBOX_API}&limit=1`;
// request({ url: geourl, json: true }, (err, res) => {
//     if (err) {
//         console.log(err);
//     } else if (res.body.features.length === 0) {
//         console.log('Unable to find location');
//     } else {
//         const lat = res.body.features[0].center[1];
//         const lng = res.body.features[0].center[0];
//         console.log(lat, lng);
//     }
// });

geocode('Dallas', (err, data) => {
    if (!err) {
        console.log(data);
    } else {
        console.log(`Error ${err}`);
    }
});
