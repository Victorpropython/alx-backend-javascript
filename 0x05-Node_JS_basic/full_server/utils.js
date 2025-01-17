import fs from 'fs';

/**
 * Reads the data of students in a CSV data file.
 * @param {String} dataPath
 * @returns {Promise<Object>}
 */
const readDatabase = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
    return;
  }

  fs.readFile(dataPath, (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const fileLines = data.toString('utf-8').trim().split('\n');
    if (fileLines.length < 2) {
      reject(new Error('Database file is empty or malformed'));
      return;
    }

    const studentGroups = {};
    const dbFieldNames = fileLines[0].split(',');
    const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

    for (const line of fileLines.slice(1)) {
      const studentRecord = line.split(',');

      if (studentRecord.length !== dbFieldNames.length) {
        reject(new Error('Malformed row in database file'));
        return;
      }

      const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
      const field = studentRecord[studentRecord.length - 1].trim().toUpperCase(); // Normalize field
      if (!studentGroups[field]) {
        studentGroups[field] = [];
      }

      const studentEntries = studentPropNames.map((propName, idx) => [
        propName.trim(),
        studentPropValues[idx].trim(),
      ]);
      studentGroups[field].push(Object.fromEntries(studentEntries));
    }

    resolve(studentGroups);
  });
});

export default readDatabase;
module.exports = readDatabase;
