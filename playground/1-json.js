const fs = require('fs');

// const book = {
//     title: 'Random book',
//     author: 'Alex Barksdale'
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

// const prasedData = JSON.parse(bookJSON); // Converts JSON to JS Object
// console.log(prasedData.author);

// const dataBuffer = fs.readFileSync('1-json.json'); // Returns a buffer (binary data)
// const dataJSON = dataBuffer.toString(); // Converts binary to string
// const data = JSON.parse(dataJSON); // Parsed JSON data to JS Object

// console.log(data.title);

//!  --------------- Challenge ---------------
const dataBuffer = fs.readFileSync('1-json.json'); // Returns a buffer (binary data)
const dataJSON = dataBuffer.toString(); // Converts binary to string
const user = JSON.parse(dataJSON); // Parsed JSON data to JS Object

// Applies new properties to the current JSON
user.name = 'Alex';
user.age = 19;

const userJSON = JSON.stringify(user); // Converts to JSON object

fs.writeFileSync('1-json.json', userJSON); // Writes to file
