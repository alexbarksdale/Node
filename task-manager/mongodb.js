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
        // db.collection('users').insertOne(
        //     {
        //         name: 'Alex',
        //         age: 20,
        //     },
        //     (err, res) => {
        //         if (err) {
        //             return console.log('Unable to insert user');
        //         }

        //         console.log(res.ops);
        //     }
        // );

        // db.collection('users').insertMany(
        //     [
        //         { name: 'Jen', age: 28 },
        //         {
        //             name: 'Rick',
        //             age: 29,
        //         },
        //     ],
        //     (err, res) => {
        //         if (err) {
        //             return console.log('Unable to insert documents');
        //         }
        //         console.log(res.ops);
        //     }
        // );

        db.collection('tasks').insertMany(
            [
                {
                    description: 'Get some milk',
                    completed: true,
                },
                {
                    description: 'Order pizza',
                    completed: false,
                },
            ],
            (err, res) => {
                if (err) return console.log(err);
                console.log(res.ops);
            }
        );
    }
);
