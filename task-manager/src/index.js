require('./db/mongoose');
const express = require('express');

const userRouter = require('./routers/user.router');
const taskRouter = require('./routers/task.router');

const app = express();
const PORT = process.env.PORT || 3000;

// Parse incoming JSON to an object
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

const jwt = require('jsonwebtoken');

const test = async () => {
    const token = jwt.sign(
        {
            _id: '123',
        },
        'test'
    );

    jwt.verify(token, 'test');

    console.log(token);
};

test();

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
