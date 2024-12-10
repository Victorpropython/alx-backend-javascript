// Importing the "Readline"

const readline = require('readline');
// Creating a platform to read from the stdin and the output
const readData = readline.createInterface({
input: process.stdin,
output: process.stdout
});

// PROMPTING THE USER FOR THEIR NAME

readData.question('Welcome to ALX, what is your name?\n',(name) => {
// Displaying the name

console.log(`Your name is: ${name}`);

//Then closing the platform and displaying the message

readData.close();
});

// Handling the close event to display the exit message

readData.on('close',() => {
console.log('This important software is now closing');
});
