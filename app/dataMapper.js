const client = require('./database.js');

exports.getAllData = (callback) => {
    client.query('SELECT * FROM inventory', callback);
};

exports.addItem = (item, callback) => {
    client.query("INSERT INTO inventory VALUES($1, $2, $3, $4)",[item.product, item.price, item.quantity, item.date], callback)
};

// exports.lookForDuplicates = (item, callback) => {
//     client.query("SELECT * FROM inventory WHERE product=$1", [item.product], callback)
// };