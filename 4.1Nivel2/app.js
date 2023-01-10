const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

const noCache = (req, res, next) => {
  res.header('Cache-control', 'no-cache');
  next();
};

app.post('/time', noCache, (req, res) => {
  res.status(200).json({
    today: new Date(),
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});
