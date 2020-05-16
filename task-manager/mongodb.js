const mongodb = require('mongodb');

const { MongoClient, ObjectID } = mongodb;
const connectionURL = 'mongodb://127.0.0.1:27017';
const dbName = 'task-manager';

const id = new ObjectID();

MongoClient.connect(
    connectionURL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
        if (err) {
            return console.log('Unable to connect Mongo');
        }

        const db = client.db(dbName);

        // ======= QUERY =======
        // db.collection('users').findOne(
        //     { _id: new ObjectID('5ec0386d86cef7168d640fc9') },
        //     (err, res) => {
        //         if (err) {
        //             return console.log("Couldn't find user");
        //         }
        //         console.log(res);
        //     }
        // );

        // db.collection('users')
        //     .find({ age: 20 })
        //     .toArray((err, res) => {
        //         if (err) {
        //             return console.log("Couldn't find users");
        //         }
        //         console.log(res);
        //     });

        // ======= UPDATE =======
        // db.collection('users')
        //     .updateOne(
        //         {
        //             _id: new ObjectID('5ec0386d86cef7168d640fc9'),
        //         },
        //         {
        //             $set: {
        //                 name: 'Abigal',
        //             },
        //             $inc: {
        //                 age: 1,
        //             },
        //         }
        //     )
        //     .then((res) => {
        //         console.log(res);
        //     })
        //     .catch((err) => console.log(err));

        // ======= DELETE ========
        // db.collection('users')
        //     .deleteMany({
        //         age: 24,
        //     })
        //     .then((res) => {
        //         console.log(res);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });

        // ======= INSERTION ========
        // db.collection('users').insertOne(
        //     {
        //         _id: id,
        //         name: 'Abby',
        //         age: 23,
        //         created: id.getTimestamp(),
        //     },
        //     (err, res) => {
        //         if (err) {
        //             return console.log('Unable to insert user');
        //         }

        //         console.log(res.ops);
        //     }
        // );

        // db.collection('tasks').insertMany(
        //     [
        //         {
        //             description: 'Get some milk',
        //             completed: true,
        //         },
        //         {
        //             description: 'Order pizza',
        //             completed: false,
        //         },
        //     ],
        //     (err, res) => {
        //         if (err) return console.log(err);
        //         console.log(res.ops);
        //     }
        // );
    }
);
