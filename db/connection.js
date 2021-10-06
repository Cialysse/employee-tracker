const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'Camarshall20',
    password: '',
    database: 'employees'
})

connection.connect(function(err){
    if(err) throw err
})

module.exports = connection