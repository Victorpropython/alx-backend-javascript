const fs = require('fs')
/**
 * Function to read a file asynchronously
 * 
 * @param {string} fileName, Name of the file to be read
 */

const countStudents = () => {
  const filePath = `${fileName}`;

  //checking if the file exists
  if (!fs.existsSync(filePath)){
    throw new Error('Cannot load the database')
  }
  if (!fs.statSync(filePath)) {
    throw new Error('Cannot load the database')
  }
  

}
