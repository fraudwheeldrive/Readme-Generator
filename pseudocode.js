// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require ('inquirer');
const generateMarkdown = require("./utils/generatemarkdown.js");
    

// TODO: Create an array of questions for user input
const questions = [ {
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
        type: 'checkbox',
        name: 'Licsense',
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
name: 'contribtute',
message:'what does the user need to know about contributing the Repo?',
validate: contributeInput => {
    if (contributeInput) {
        return true;
    } else {
        console.log("please let the user know how to use the Repo");
        return false;
    }
}  
},
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
