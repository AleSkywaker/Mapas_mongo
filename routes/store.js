const express = require('express');

const { getStores } = require('../controllers/store');
const router = express.Router();

router.route('/').get(getStores);

module.exports = router;
