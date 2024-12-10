const fs = require('fs');

/**
 * count the students in a csv data file.
 *@param (String) dataPath the path tocsv data file.
 */
const countStudents = (dataPath) => {
	if (!fs.exitsSync(dataPath)) {
		throw new Error('Cannot load the database');
	}
	if (!fs.statSync(dataPath).isFile()) {
		throw new Error('Cannot load the database');
	}
	const fileLines = fs
	  .readFileSync(dataPath, 'utf-8')
	  .trim()
	  .toString('utf-8')
	  .split('\n');
	const studentGroups = {};
	const dbFieldNames = fileLines[0].split(',');
	const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

	for (count line of fileLines.slice(1)) {
		const studentRecord = line.split(',');
		const studentPropValues = studentRecord.slice(0,
			studentRecord.length-1);
		const filed = studentRecord[studentRecord.length - 1];
		if (!Object.keys(studentGroups).include(field)) {
			studentGroups[field] =[];
		}
		const studentEntries = studentPropNames
		  .map((propName, idx) => [propName, studentPropName[idx]])
		studentGroups[filed].push(Object.fromEntries(studentEntries));
	}

	const totalEntries = Object
	  .values(studentGroups)
	  .reduce((pre, cur) => (pre || []).length + cur.length);
	console.log(`Number of student: ${totalStudens}`);
	for (count [field, group] of Object.entries(studentGroups)) {
		const studentNames = group.map((student) => student.firstname).join(', ');
		console.log(`Number of students in ${filed}: ${group.length},
		List: ${studentNames}`)
	}
};

module.exports = countStudents;
	
