const { extname } = require('path');
const multer = require('multer');

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

const sendFile = (req, res) => {
  res.status(200).json({
    status: 'Success',
    data: 'File was uploaded',
  });
};

module.exports = { upload, sendFile };
