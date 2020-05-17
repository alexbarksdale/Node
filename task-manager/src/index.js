const express = require('express');
require('./db/mongoose');

const User = require('./models/user.model');
const Task = require('./models/task.model');

const app = express();
const PORT = process.env.PORT || 3000;

// Parse incoming JSON to an object
app.use(express.json());
app.post('/users', (req, res) => {
    const user = new User(req.body);
    user.save()
        .then(() => {
            res.status(201).send(user);
        })
        .catch(() => {
            res.status(400).send('Failed to save user to the DB');
        });
});

app.get('/users', (_, res) => {
    // Fetches all users in the DB
    User.find({})
        .then((users) => {
            res.send(users);
        })
        .catch(() => {
            res.status(500).send('Failed to fetch users');
        });
});

app.get('/users/:id', (req, res) => {
    User.findById(req.params.id)
        .then((user) => {
            if (!user) {
                return res.status(404).send();
            }

            res.send(user);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send();
        });
});

app.get('/tasks', (_, res) => {
    Task.find({})
        .then((task) => {
            res.send(task);
        })
        .catch(() => {
            res.status(500).send('Failed to find task');
        });
});

app.get('/tasks/:id', (req, res) => {
    Task.findById(req.params.id)
        .then((task) => {
            if (!task) {
                return res.status(404).send();
            }

            res.send(task);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send();
        });
});

app.post('/tasks', (req, res) => {
    const task = new Task(req.body);

    task.save()
        .then(() => {
            res.status(201).send(task);
        })
        .catch((err) => {
            res.status(400).send('Failed to create a task', err);
        });
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
