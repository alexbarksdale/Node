const fs = require('fs');
const utils = require('./utils');

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json'); // Returns a buffer
        const dataJSON = dataBuffer.toString(); // Converts to string

        return JSON.parse(dataJSON); // Parsed JSON data to JS Object
    } catch (err) {
        return [];
    }
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes); // Converts to JSON object
    fs.writeFileSync('notes.json', dataJSON);
};

const addNote = (title, body) => {
    const notes = loadNotes(); // Array
    const duplicateNote = notes.find((note) => note.title === title);

    // If there was a duplicate, the array now has 1, so it will fail
    if (!duplicateNote) {
        notes.push({
            title,
            body
        });

        saveNotes(notes);
        console.log(utils.success, 'New note added');
    } else {
        console.log(utils.error, 'Note title taken');
    }
};

const removeNote = (title) => {
    const notes = loadNotes();

    // Saves the notes not equal to the title
    const notesToKeep = notes.filter((note) => note.title !== title);

    // If the lengths are different, then something was removed
    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep);
        console.log(utils.success, 'Note removed!');
    } else {
        console.log(utils.error, 'No note found!');
    }
};

const listNotes = () => {
    const notes = loadNotes();

    console.log('Your Notes:');

    notes.forEach((note) => console.log(note.title));
};

const readNote = (title) => {
    const notes = loadNotes();

    const read = notes.find((note) => note.title === title);

    if (read) {
        const noteContent = `${read.title} \n${read.body}`;
        console.log(noteContent);
    } else {
        console.log(utils.error, 'Note not found');
    }
};

module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
};
