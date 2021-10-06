const connection = require('./connection')


class DB {
        constructor(connection) {
            this.connection = connection
        }
        findallepmloyees() {
            return this.connection.promise().query(
                'select employee.id from employee'
            )
        }




}

module.exports = new DB(connection)