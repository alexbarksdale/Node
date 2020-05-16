const request = require('request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        address
    )}.json?access_token=${process.env.MAPBOX_API}&limit=1`;
    request({ url, json: true }, (err, res) => {
        if (err) {
            callback('Unable able to connect to location service', undefined);
        } else if (res.body.features.length === 0) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, {
                lat: res.body.features[0].center[1],
                lng: res.body.features[0].center[0],
                loc: res.body.features[0].place_name,
            });
        }
    });
};

module.exports = geocode;
