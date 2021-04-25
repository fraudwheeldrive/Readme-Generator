const fs = require('fs');
const inquirer = require ('inquirer');
console.log(inquirer);

//questions to generate readme 

inquirer
.prompt([
    {
        type: 'input',
        name: 'name',
         message: "what is your name?"
    }
])
.then(answers => console.log(answers));