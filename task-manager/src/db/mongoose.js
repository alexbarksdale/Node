const mongoose = require('mongoose');

const DB_URL = 'mongodb://127.0.0.1:27017/task-manager-api';
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

