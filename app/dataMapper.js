const client = require('./database.js');

exports.getAllData = (callback) => {
    client.query('SELECT * FROM inventory', callback);
};

exports.addItem = (item, callback) => {
    //client.query('INSERT INTO inventory VALUES ($1, $2, $3, $4)', [product, 1, 2, '2021-02-01'], callback);
    client.query("INSERT INTO inventory VALUES($1, $2, $3, $4)",[item.product, item.price, item.quantity, item.date], callback)
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