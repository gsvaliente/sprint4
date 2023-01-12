const express = require('express');
const getUser = require('../controllers/controller-user');

const router = express.Router();

router.route('/').get(getUser);

module.exports = router;
