const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

// Yargs version
yargs.version('Alpha 1.1.1');

// Create ADD command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Add a note title',
            type: 'string',
            demandOption: true
        },
        body: {
            describe: 'Content for this note',
            type: 'string',
            demandOption: true
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

// Create REMOVE command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Title of the note to be removed',
            type: 'string',
            demandOption: true
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
});

// Create READ command
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder: {
        title: {
            describe: 'Read a specific note',
            type: 'string',
            demandOption: true
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
});

// Create LIST command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler() {
        notes.listNotes();
    }
});

// Parses the commands
yargs.parse();
