const client = require('./database.js');

exports.getAllData = (callback) => {
    client.query('SELECT * FROM inventory', callback);
};