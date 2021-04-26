const fs = require('fs');
const inquirer = require ('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");
const fileName = ('./dist/Readme.md');


//questions to generate readme 
//return inquirer .prompt ([
    const questions =[

/* 0. Greeting 
{ 
    type: 'input',
    name: 'welcome',
    message: 'Welcome to the Readme Generator, please press enter to continue',    
},
*/
// 1.what is you github username?

     {
        type: 'input',
        name: 'githubname',
        message:'what is your github username?',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("please enter your Github Username");
                return false;
            }
        }
    },
// 2.what is your email address?
    {
    type: 'input',
        name: 'email',
        message:'what is your email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("please enter your email");
                return false;
            }
        }
    },
// 3.what is your Projects name?
    {
        type: 'input',
            name: 'projectName',
            message:'what is your Projects name?',
            validate: projectNameInput => {
                if (projectNameInput) {
                    return true;
                } else {
                    console.log("please enter your Projects name");
                    return false;
                }
            }
        },
// 4.please write a short description of your project
        {
            type: 'input',
                name: 'description',
                message:'Please provide a description for the project',
                validate: descriptInput => {
                    if (descriptInput) {
                        return true;
                    } else {
                        console.log("please enter a detailed description of your project");
                        return false;
                    }
                }
            },
// 5.what kind of license should project have? (in future add array to clean up)
// MIT
// GPLv2
// Apache
// Mozilla Public License 2.0 
// The unlicense 
// Other
        {
            type: 'list',
            name: 'license',
            message:'Please select the license your project uses, if no option is selected license will default to MIT',
            choices: [
               'MIT',
               'GPLv2',
               'Apache',
               'Mozilla Public License 2.0',
               'The Unlicense',
               'Other',
           ], 

           default: 'MIT'
    },
// 6. what command should be run to install dependencies?
{
    type: 'input',
    name: 'install',
    message:'What command should be run to install dependancies?',
    validate: installInput => {
        if (installInput) {
            return true;
        } else {
            console.log("please enter the command needed to install dependencies");
            return false;
        }
    }  
},
// 7. what command should be run to run tests? 
{
    type: 'input',
    name: 'tests',
    message:'What command should be run to run tests?',
    validate: testInput => {
        if (testInput) {
            return true;
        } else {
            console.log("please enter the command needed to run tests");
            return false;
        }
    }  
},
// 8. what does the user need to know about using the Repo?
{
    type: 'input',
    name: 'knowledge',
    message:'what does the user need to know about using the Repo?',
    validate: knowledgeInput => {
        if (knowledgeInput) {
            return true;
        } else {
            console.log("please let the user know how to use the Repo");
            return false;
        }
    }  
},
// 9.what does  the user need to know about Contributing to the repo?
{
    type: 'input',
    name: 'contribute',
    message:'what does the user need to know about contributing the Repo?',
    validate: contributeInput => {
        if (contributeInput) {
            return true;
        } else {
            console.log("please let the user know how to use the Repo");
            return false;
        }
    }  
} ,
//10. What Technologies were used to build this project 
{
    type: 'input',
    name: 'tech',
    message:'What Technologies and reference materials were used to build this project?',
    validate: techInput => {
        if (techInput) {
            return true;
        } else {
            console.log("please let the user know how to use the Repo");
            return false;
        }
    }  
  },
];

// TODO: Create a function to write README file
  
 function writeToFile(fileName, createReadme) {
    return new Promise((resolve, reject) => {
      fs.writeFile (fileName, createReadme, err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'Readme File created!'
        });
      });
    });
  };


// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
.then(data => {
    return generateMarkdown(data);
})
.then(createReadme => {
    return writeToFile(fileName, createReadme);
})
.then (writeFile => {
    console.log(writeFile);
})
.catch (err => {
    console.log(err)
});



