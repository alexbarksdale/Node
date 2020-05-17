const express = require('express');

const Task = require('../models/task.model');

const router = express.Router();

router.get('/tasks', async (_, res) => {
    try {
        const tasks = await Task.find({});
        res.send(tasks);
    } catch (err) {
        res.status(500).send('Failed to find task');
    }
});

router.get('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) return res.status(404).send();
        res.send(task);
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
});

router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) return res.status(404).send();
        res.send(user);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.post('/tasks', async (req, res) => {
    const task = new Task(req.body);

    try {
        await task.save();

        res.status(201).send(task);
    } catch (err) {
        res.status(400).send('Failed to create a task', err);
    }
});

router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);

        if (!task) return res.status(404).send();
        res.send(task);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['completed', 'description'];
    const isValid = updates.every((update) => allowedUpdates.includes(update));

    if (!isValid) return res.status(400).send({ error: 'Invalid update' });

    try {
        const task = await Task.findById(req.params.id);

        updates.forEach((update) => (task[update] = req.body[update]));
        await task.save();

        if (!task) return res.status(404).send();
        res.send(task);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
