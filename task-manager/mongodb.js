const MongoClient = require('mongodb').MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const dbName = 'task-manager';

MongoClient.connect(
    connectionURL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
        if (err) {
            return console.log('Unable to connect Mongo');
        }

        const db = client.db(dbName);
        db.collection('users').insertOne({
            name: 'Alex',
            age: 20,
        });
    }
);
