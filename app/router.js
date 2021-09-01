const { Router } = require('express');
const express = require('express');

const mainController = require('./controller');

const router = express.Router();

router.get('/', mainController.homePage);

router.get('/add', mainController.addItemPage);
router.get('/addPost', mainController.addItemPage);

router.post('/addPost',mainController.addItemPage);

module.exports = router;