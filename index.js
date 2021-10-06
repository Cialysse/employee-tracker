const inquirer = require('inquirer')
const db = require('./db')
require('console.table')

mainMenu()

function mainMenu(){
    loadmainprompts()
}

function loadmainprompts(){
    prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: [
                {
                    name: 'view all employees',
                    value: 'view_employees'
                } 
            ]
        }
    ]).then(res => {
        let choice = res.choice
        switch (choice) {
            case 'view_employees':
               viewemployee() 
                break;
        
            default:
                break;
        }
    })
}
function viewemployees() {
    db.findallepmloyees() 
    .then(([rows]) => {
        let employees = rows
        console.log('\n')
        console.table(employees)
    })
    .then(() => loadmainprompts())
}