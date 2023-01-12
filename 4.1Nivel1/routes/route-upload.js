const express = require('express');
const { sendFile, upload } = require('../controllers/controller-multer');

const router = express.Router();

router.route('/').post(upload.single('image'), sendFile);

module.exports = router;
