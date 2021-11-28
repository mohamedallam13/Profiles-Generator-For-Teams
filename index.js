const inquirer = require("inquirer");
const fs = require("fs");

const Card = require("./lib/Card.js");

const EMPLOYEE_CARDS = {
    Manager: require("./lib/Manager.js"),
    Engineer: require("./lib/Engineer.js"),
    Intern: require("./lib/Intern.js"),
}


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
        type: "list",
        name: "role",
        message: "Please select their role:",
        choices: ["Manager", "Engineer", "Intern"]
    },
    {
        type: "input",
        name: "github",
        message: "What is their github?",
        when: (answers) => answers.role == "Engineer"
    },
    {
        type: "input",
        name: "school",
        message: "What is their school?",
        when: (answers) => answers.role == "Intern"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is their officeNumber?",
        when: (answers) => answers.role == "Manager"
    }
]


// Main Function

inquirer
    .prompt(QUESTIONS)
    .then((responses) => {
        const { name, email, role, github, school, officeNumber } = responses
        var EmployeeClass = new EMPLOYEE_CARDS[role](name, email,{ github, school, officeNumber});
        console.log(EmployeeClass)
        var htmlCard = new Card(responses);
        //writeHTMLFile(htmlCard);
    });