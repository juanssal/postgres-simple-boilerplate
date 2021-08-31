require('dotenv').config();

const express = require('express');

const router = require('./app/router');

const PORT = process.env.PORT || 5000;

const app = express();

app.set('view engine', 'ejs');
// on lui renseigne où se situe le dossier "views" (car il n'est pas situé à la racine du projet)
app.set('views', './app/views');

app.use(router);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });