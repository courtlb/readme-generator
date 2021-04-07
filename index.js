// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your github username?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your username!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'project',
        message: "What is your project's name?",
        validate: projectInput => {
          if (projectInput) {
            return true;
          } else {
            console.log("Please enter your project's name!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'desc',
        message: 'Please write a short description of your project.',
        validate: descInput => {
          if (descInput) {
            return true;
          } else {
            console.log('Please enter a description!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmInstall',
        message: 'Would you like to include information about installation?',
        default: true
      },
      {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies?',
        when: ({confirmInstall}) => confirmInstall
      },
      {
        type: 'confirm',
        name: 'confirmUsage',
        message: 'Would you like to include information about usage?',
        default: true
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
        when: ({confirmUsage}) => confirmUsage
      },
      {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Would you like to specify a license for your project?',
        default: false
      },
      {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['Apache 2.0', 'Boost 1.0','Eclipse 1.0','GNU GPL v3','MIT'],
        when: ({confirmLicense}) => confirmLicense
      },
      {
        type: 'confirm',
        name: 'confirmContribute',
        message: 'Would you like to include information about contributing to the repo?',
        default: true
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'What does the user need to know about contributing to the repo?',
        when: ({confirmContribute}) => confirmContribute
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
    //.then(generateMarkdown and writeToFile
    
}

// Function call to initialize app
init();
