
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

module.exports = client;
// // Checking out what's on the database
// client.query('SELECT $1 FROM inventory', ['test'], (err, res) => {
//   if (err) throw err
//   console.log(res)
//   client.end()
// });

// // Inserting data
// client.query('INSERT INTO inventory VALUES($1, $2, $3, $4)', ['pan_test', 14, 2, '2021-02-01'], (err, res) => {
//     if (err) throw err
//     console.log(res)
//     client.end()
//   });


