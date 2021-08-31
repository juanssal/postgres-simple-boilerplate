const { Router } = require('express');
const express = require('express');

const mainController = require('./controller');

const router = express.Router();

router.get('/', mainController.homePage);

module.exports = router;