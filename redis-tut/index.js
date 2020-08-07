const fetch = require('node-fetch');
const redis = require('redis');
const express = require('express');

const PORT = process.env.PORT || 3000;
const REDIS_PORT = process.env.REDIS_PORT || 6379;

const client = redis.createClient(REDIS_PORT);

const app = express();

function setResponse(username, repos) {
    return `<h2>${username} has ${repos} GitHub repos</h2>`;
}

async function getRepos(req, res) {
    try {
        console.log('Fetching data...');

        const { username } = req.params;
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();

        const repos = data.public_repos;

        // Set to Redis
        client.setex(username, 3600, repos);

        console.log(data);
        res.send(setResponse(username, repos));
    } catch (err) {
        console.log(err);
        res.status(500);
    }
}

// Cache middleware
function cache(req, res, next) {
    const { username } = req.params;

    client.get(username, (err, data) => {
        if (err) return res.status(500).send({ error: true });

        if (data != null) {
            res.send(setResponse(username, data));
        } else {
            next();
        }
    });
}

app.get('/repos/:username', cache, getRepos);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
