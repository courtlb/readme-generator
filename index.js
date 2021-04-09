// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

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
        name: 'title',
        message: "What is your project's name?",
        validate: titleInput => {
          if (titleInput) {
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
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
      },

      {
        type: 'input',
        name: 'contribute',
        message: 'What does the user need to know about contributing to the repo?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
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
        choices: ['Apache 2.0', 'Boost 1.0','Eclipse 1.0'],
        when: ({confirmLicense}) => confirmLicense
      },
];



// TODO: Create a function to write README file
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('README.md', data, err => {
            if (err) {
                reject (err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(data => {
            console.log(data)
            return generateMarkdown(data);
        })
        .then(markdownData => {
            console.log(markdownData)
            return writeToFile(markdownData)
        });
    
}

// Function call to initialize app
init();
