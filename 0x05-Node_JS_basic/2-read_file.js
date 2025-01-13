const fs = require('fs');

/**
 * Counts students in a CSV data file located in the same directory.
 *
 * @param {string} fileName - The name of the CSV data file (e.g., 'database.csv').
 */
const countStudents = (fileName) => {
  const filePath = `./${fileName}`; // Construct path relative to current directory

  // Check if file exists and is a file
  if (!fs.existsSync(filePath)) {
    throw new Error('Cannot load the database. File not found.');
  }

  if (!fs.statSync(filePath).isFile()) {
    throw new Error('Cannot load the database. Path is not a file.');
  }

  try {
    const fileLines = fs.readFileSync(filePath, 'utf-8').trim().split('\n');
    const studentGroups = {};

    const dbFieldNames = fileLines[0].split(',');
    const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

    for (const line of fileLines.slice(1)) {
      const studentRecord = line.split(',');
      const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
      const field = studentRecord[studentRecord.length - 1];

      if (!studentGroups[field]) {
        studentGroups[field] = [];
      }

      const studentEntries = studentPropNames.map(
        (propName, idx) => [propName, studentPropValues[idx]]);
      studentGroups[field].push(Object.fromEntries(studentEntries));
    }

    const totalEntries = Object.values(studentGroups).reduce((pre, cur) => pre + cur.length, 0);
    console.log(`Number of students: ${totalEntries}`);

    for (const [field, group] of Object.entries(studentGroups)) {
      const studentNames = group.map((student) => student.firstname).join(', ');
      console.log(`Number of students in ${field}: ${group.length}, List: ${studentNames}`);
    }
  } catch (error) {
    console.error('Error reading file:', error.message);
  }
};

module.exports = countStudents;
