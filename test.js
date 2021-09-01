require('dotenv').config();
// on importe le module express
const express = require('express');
// on initialise notre serveur web (express)
const app = express();
 
app.use(express.static('./app/public'));

app.set('view engine', 'ejs');

app.set('views', './app/views');

app.use(express.urlencoded({extended: true}));
 
require('dotenv').config();

const { Client } = require('pg')
const client = new Client({
  host: 'localhost',
  port: 5432,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
});

client.connect(err => {
    if (err) {
      console.error('connection error', err.stack)
    } else {
      console.log('connected')
    };
  });

// app.get('/', (req, res) => {
//     client.query('INSERT INTO inventory VALUES($1, $2, $3, $4)', ['pan_test', 14, 2, '2021-02-01'], (err, data) => {
//         if (err) throw err
//         const result = data;
//         console.log(result.rows);
//         client.end()
//       });
    
//     res.render('index')
// });

app.get('/', (req, res) => {
    let result;
    let testVar = 'hola';
    client.query('SELECT * FROM inventory', (err, data) => {
        if (err) throw err
        result = data.rows[0].product;
        console.log(result);

        client.end()
      });
  
    res.render('index', { testVar });
});

// faire écouter le serveur sur le port 3000
app.listen(process.env.PORT || 3000, () => {
   console.log('Je suis prêt à écouter !')
});