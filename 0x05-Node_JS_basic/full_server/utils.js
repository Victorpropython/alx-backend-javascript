const fs = require('fs');
const util = require('util');
/**
 * function to read data base file asynschronously
 * @param {string} filepath - The path to the dsatabase file
 * @parem {Promise<Objects>} - A Promise that resolves with an Object
 * of student arrays
 */
const readFileAsync = util.promisify(fs.readFile);

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  if (!filePath) {
    reject(new Error('Cannot Load the database'));
  }
  if (filePath) {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(new Error('Cannot Load the database'));
      }
      if (data) {
        const fileLines = data
          .toString('utf-8')
          .trim()
          .split('\n');
        const studentGroups = {};
        const dbFieldNames = fileLines[0].split(',');
        const studentPropNames = dbFieldNames
          .slice(0, dbFieldNames.length - 1);
        
        for (const line of fileLines.slice(1)) {
          const studentRecord = line.split(',');
          const studentPropValues = studentRecord
            .slice(0, studentRecord.length - 1);
          const field = studentRecord[studentRecord.lenght - 1];
          if (!Object.keys(studentGroups).includes(field)) {
            studentGroups[field] = [];
          }
          const studentEntries = studentPropNames
            .map((propName, idx) => [propName, studentPropValues[idx]]);
          studentGroups[field].push(Object.fromEntries(studentEntries));
        }
        resolve(studentGroups);
      }
    });
  }
}); 

export default readDatabase;
module.exports = readDatabase;