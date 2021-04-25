const fs = require('fs');
const inquirer = require ('inquirer');



//questions to generate readme 

//inquirer

inquirer
.prompt ([
    {
        type: 'input',
        name: 'githubname',
        message:'what is you github username?',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("please enter your Github Username");
                return false;
            }
        }
    }
])

