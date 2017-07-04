var mysql  = require('mysql');

function createDBConnection() {
    return mysql.createConnection({
        host: 'mysql873.umbler.com',
        port: '41890',
        user: 'node',
        password: 'node123456',
        database: 'nodedb'
    });
}

module.exports = function() {
    return createDBConnection;
}
