const { extname } = require('path');
const express = require('express');
const multer = require('multer');

const app = express();
const PORT = 3000;

//* MULTER VARIABLES
const PATH = `${__dirname}/db/uploads/`;
const MIMETYPE = ['image/jpeg', 'image/png', 'image/gif'];

//* MULTER FUNCTION
const upload = multer({
  storage: multer.diskStorage({
    destination: PATH,
    filename: (req, file, callback) => {
      const extension = extname(file.originalname);
      const fileName = file.originalname.split(extension)[0];

      callback(null, `${fileName}-${Date.now()}${extension}`);
    },
  }),
  fileFilter: (req, file, callback) => {
    if (MIMETYPE.includes(file.mimetype)) callback(null, true);
    else callback(new Error(`Only ${MIMETYPE.join(' ')} files are allowed`));
  },
  limits: {
    fieldSize: 10000000,
  },
});

//endpoint for the user page
app.get('/user', (req, res) => {
  res.status(200).json(database);
  res.end();
});

//endpoint for the upload
app.post('/upload', upload.single('image'), (req, res) => {
  res.status(200).json({
    status: 'Success',
    data: 'File was uploaded',
  });
});

app.all('*', (req, res) => {
  res.status(404).send('PAGE DOES NOT EXIST');
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}....`);
});
