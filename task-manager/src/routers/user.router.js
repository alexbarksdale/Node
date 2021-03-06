const express = require('express');

const User = require('../models/user.model');

const router = new express.Router();

router.post('/users', async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        res.status(201).send(user);
    } catch (err) {
        console.log(err);
        res.status(400).send('Failed to save user to the DB');
    }
});

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken();
        res.send({ user, token });
    } catch (err) {
        res.status(400).send();
    }
});

router.get('/users', async (_, res) => {
    try {
        // Fetches all users in the DB
        const users = await User.find({});
        res.send(users);
    } catch (err) {
        res.status(500).send('Failed to fetch users');
    }
});

router.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) return res.status(404).send();
        res.send(user);
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
});

router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'password', 'age'];
    const isValid = updates.every((update) => allowedUpdates.includes(update));

    if (!isValid) return res.status(400).send({ error: 'Invalid updates' });

    try {
        const user = await User.findById(req.params.id);

        updates.forEach((update) => (user[update] = req.body[update]));

        await user.save();

        if (!user) return res.status(404).send();
        res.send(user);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
