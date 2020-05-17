const express = require('express');
require('./db/mongoose');

const userRouter = require('./routers/user.router');
const taskRouter = require('./routers/task.router');

const app = express();
const PORT = process.env.PORT || 3000;

// Parse incoming JSON to an object
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
