const request = require('request');

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

require('dotenv').config();

geocode('Dallas', (err, data) => {
    if (!err) {
        console.log(data);
    } else {
        console.log(`Error ${err}`);
    }
});

forecast(-75.7088, 44.1545, (err, data) => {
    console.log(err);
    console.log(data);
});
