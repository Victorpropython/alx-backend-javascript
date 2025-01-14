const express = require('express');

const app = express();
const PORT = 1245;

app.get('/', (_, res) => {
  res.send('Hello ALX!');
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
