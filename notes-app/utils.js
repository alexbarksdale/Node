const chalk = require('chalk');

// --------------- TERMINAL KEYS ---------------
const success = chalk.bold.greenBright.inverse('Success! ');
const error = chalk.bold.redBright.inverse('Error! ');

module.exports = {
    success,
    error
};
