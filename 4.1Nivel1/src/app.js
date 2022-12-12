const express = require('express');
const database = require('./db/users.json');

const app = express();
const port = 3000;

app.get('/user', (req, res) => {
  res.status(200).json(database);
});

app.all('*', (req, res) => {
  res.status(404).send('PAGE DOES NOT EXIST');
});

app.listen(port, () => {
  console.log(`listening on port ${port}....`);
});
