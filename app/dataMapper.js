const client = require('./database.js');

exports.getAllData = (callback) => {
    client.query('SELECT * FROM inventory', callback);
};

exports.addItem = (callback) => {
    client.query('INSERT INTO inventory VALUES ($1, $2, $3, $4)', ['bizcocho', 1, 2, '2021-02-01'], callback);
};


// app.get('/', (req, res) => {
//     client.query('INSERT INTO inventory VALUES($1, $2, $3, $4)', ['pan_test', 14, 2, '2021-02-01'], (err, data) => {
//         if (err) throw err
//         const result = data;
//         console.log(result.rows);
//         client.end()
//       });
    
//     res.render('index')
// });