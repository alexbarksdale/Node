const request = require('request');

const url = 'https://api.darksky.net/forecast/fcd8eac4778deb13f02d18ea2bbc6cdd/37.8267,-122.4233';

request({ url, json: true }, (err, res) => {
    const darksky = res.body;

    console.log(darksky.currently);
    console.log();
});
