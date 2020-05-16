const mongoose = require('mongoose');
const validator = require('validator');

const DB_URL = 'mongodb://127.0.0.1:27017/task-manager-api';
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid');
            }
        },
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot be password!');
            }
        },
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number');
            }
        },
    },
});

const StoredUser = new User({
    name: '   Alex',
    email: 'alex@gmail.com     ',
    password: '123456',
});

StoredUser.save()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => console.log(err));

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

const task = new Task({
    description: 'Buy some milk',
});

task.save()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
