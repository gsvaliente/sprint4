const express = require('express');
const user = require('./routes/route-user');
const upload = require('./routes/route-upload');

const app = express();
const PORT = 3000;

// ROUTING
app.use('/user', user);
app.use('/upload', upload);

//endpoint for page not found
app.all('*', (req, res) => {
  res.status(404).send('PAGE DOES NOT EXIST');
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}....`);
});
