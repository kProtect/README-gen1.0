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
    const markdown = generateMarkdown(data)

    fs.writeFile(fileName, markdown, function (error){
        if (error) throw error
        console.log("Good")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(function(data) {
        writeToFile(fileName.data)
    })
}

// Function call to initialize app
init();
