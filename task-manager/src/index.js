const express = require('express');
require('./db/mongoose');

const User = require('./models/user.model');
const Task = require('./models/task.model');

const app = express();
const PORT = process.env.PORT || 3000;

// Parse incoming JSON to an object
app.use(express.json());
app.post('/users', async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        res.status(201).send(user);
    } catch (err) {
        console.log(err);
        res.status(400).send('Failed to save user to the DB');
    }
});

app.get('/users', async (_, res) => {
    try {
        // Fetches all users in the DB
        const users = await User.find({});
        res.send(users);
    } catch (err) {
        res.status(500).send('Failed to fetch users');
    }
});

app.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) return res.status(404).send();
        res.send(user);
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
});

app.get('/tasks', async (_, res) => {
    try {
        const tasks = await Task.find({});
        res.send(tasks);
    } catch (err) {
        res.status(500).send('Failed to find task');
    }
});

app.get('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) return res.status(404).send();
        res.send(task);
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
});

app.post('/tasks', async (req, res) => {
    const task = new Task(req.body);

    try {
        await task.save();

        res.status(201).send(task);
    } catch (err) {
        res.status(400).send('Failed to create a task', err);
    }
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
