const inquirer = require("inquirer");
const fs = require("fs");

const Card = require("./lib/Card.js");

const EMPLOYEE_CLASSES = {
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
        name: "officeNumner",
        message: "What is their office Number?",
        when: (answers) => answers.role == "Manager"
    }
]


// Main Function

inquirer
    .prompt(QUESTIONS)
    .then((responses) => {
        const { name, email, role, github, school, officeNumber } = responses
        var employeeObj = new EMPLOYEE_CLASSES[role](name, email, { github, school, officeNumber });
        console.log(employeeObj)
        var htmlCardObj = new Card(employeeObj);
        var htmlCard = htmlCardObj.render()
        console.log(htmlCard);
        writeHTMLFile(htmlCard);
    });


function writeHTMLFile(htmlCard) {
    fs.readFile('./dist/index.html', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }

        var result = data
        .replace('<h1 style="color: grey; text-align: center; font-size: 80px;">NO MEMBERS YET</h1>', "")
        .replace("<!--APPEND HERE-->", htmlCard);

        fs.writeFile('./dist/index.html', result, 'utf8', function (err) {
            if (err) return console.log(err);
        });
    });
}
