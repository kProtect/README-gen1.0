// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        messagee:"What is your title?",
        name:"title"
    },
    {
        type:"input",
        messagee:"What is your description?",
        name:"description"
    },
    {
        type:"input",
        messagee:"Explain installation instructions?",
        name:"installation"
    },
    {
        type:"input",
        messagee:"What is your usage information?",
        name:"usage"
    },
    {
        type:"input",
        messagee:"What is your guidelines?",
        name:"guidelines"
    },
    {
        type:"input",
        messagee:"What is your test instructions?",
        name:"test"
    },
    {
        type:"list",
        messagee:"Select a license",
        name:"license",
        choices: [
            "MIT",
            "Apache",
            "ISC",
            "GNU GPLv3"
        ]
    },
    {
        type:"input",
        messagee:"What is your Github username?",
        name:"username"
    },
    {
        type:"input",
        messagee:"What is your E-Mail?",
        name:"email"
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Your markdown file has been created.')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
     .prompt(questions)
     .then(function(data) {
         writeToFile('README.md', generateMarkdown(data))
     })
}

// Function call to initialize app
init();
