const request = require('request');

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

require('dotenv').config();

const address = process.argv[2];

if (!address) {
    console.log('Provide an address');
} else {
    geocode(address, (err, data) => {
        if (err) {
            return console.log(`Error ${err}`);
        }

        forecast(data.lat, data.lng, (err, forecastData) => {
            if (err) {
                return console.log(`Error ${err}`);
            }
            console.log(data.loc); // from geocode
            console.log(forecastData); // from forecast
        });
    });
}
