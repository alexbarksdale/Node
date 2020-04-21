const request = require('request');

const forecast = (lat, lng, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API}&query=${lat},${lng}&units=f`;

    request({ url, json: true }, (err, res) => {
        if (err) {
            callback('Unable to connect to service', undefined);
        } else if (res.body.error) {
            callback('Unable to find location', undefined);
        } else {
            const result = res.body.current;
            callback(
                undefined,
                `It is currently ${result.temperature}F degrees out. There is a ${result.precip}% chance of precip`
            );
        }
    });
};

module.exports = forecast;
