const fs = require('fs');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);
/**
 * Function to read a file asynchronously
 * 
 * @param {string} fileName, Name of the file to be read
 * @return {promise} - A promise that return with no Value  or 
 * reject with an error
 */

async function countStudents(path) {
  try {
    const data = await readFileAsync(path, 'utf-8');
    const lines = data.split('\n').filter(line => line !== '');
    const fields = {};

    for (const line of lines.slice(1)) {
      const [fileName, field] = line.split(',');
      if (field) {
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }
    }
    console.log (`Number of students: ${lines.length}`);

    for (const field in fields) {
      console.log(`Number of students in ${field} : ${fields[field].length}. List: ${fields[field].join(', ')}`);
    } 
  }
    catch (error) {
      throw new Error('Cannot load the database');
    }
  }


  module.exports = countStudents;