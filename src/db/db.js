const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'ecommerce'
});

connection.connect( (error) => {
    if(error){
        throw error;
    } else {
        console.log('Connected to database');
    }
});

module.exports = connection;