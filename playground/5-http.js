const https = require('https');

const url = `https://api.weatherstack.com/current?access_key=${process.env.WEATHER_API}&query=45,-75&units=f`;

const req = https.request(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk.toString();
    });

    res.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    });
});

req.on('error', (err) => {
    console.log(err);
});

req.end();
