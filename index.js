const inquirer = require("inquirer");
const fs = require("fs");

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Questions list

const QUESTIONS = [
    {
        type: "input",
        name: "name",
        message: "What is the name of the employee?"
    },
    {
        type: "input",
        name: "email",
        message: "What is their email?",
        validate: function (input) {
            if (EMAIL_REGEX.test(input)) return true;
            return "Please enter a valid email!"
        }
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of the Readme?"
    },
    {
        type: "list",
        name: "license",
        message: "Please choose a license:",
        choices: CHOICES
    },
    {
        type: "input",
        name: "description",
        message: "Enter the Readme description:"
    },
    {
        type: "input",
        name: "usage_information",
        message: "Please provide usage information"
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide installation steps, comma separated:"
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide contibution instructions (If left blank, a default response will be provided):",
        default: "Please follow [Contributor Covenant](https://www.contributor-covenant.org/), which is the is an industry standard."
    },
    {
        type: "input",
        name: "testing",
        message: "Please provide testing methods:",
    }
]


// Main Function

inquirer
    .prompt(QUESTIONS)
    .then((responses) => {
        var htmlCard = new CardObj(responses);
        //writeHTMLFile(htmlCard);
    });