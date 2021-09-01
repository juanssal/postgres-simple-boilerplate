const { Router } = require('express');
const express = require('express');

const mainController = require('./controller');

const router = express.Router();

router.get('/', mainController.homePage);

router.get('/add', mainController.addItemPage);

router.post('/addPost', (req, res, next) => {
    console.log(req.body);
    next;
});

module.exports = router;