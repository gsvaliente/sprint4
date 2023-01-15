const express = require('express');
const pokemon = require('./routes/route-pokemon');

const app = express();

app.use(express.json());

app.use('/pokemon', pokemon);

const PORT = 3000;
app.listen(PORT, console.log(`listening on port ${PORT}`));
