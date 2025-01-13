/**
 * Function to create an Http server
 * 
 * And display HEllo Alx!
 */
const http = require('http')
const hostname = 'localhost'
const port = 1245

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader ('content type', 'text/plain');
  res.end('Hello ALX!')
});
app.listen (port, hostname, () => {
  console.log (`server running at http://${hostname} : port ${port}`)
});

module.exports = app;