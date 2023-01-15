const express = require('express');
const getPokemon = require('../controllers/cont-pokemon');

const router = express.Router();

router.route('/:id').get(getPokemon);

module.exports = router;
