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

// Main Menu

const MAIN_MENU_QUESTIONS = [
    {
        type: "list",
        name: "main_menu_request",
        message: "What would you like to do?",
        choices: ["Add a new employee", "Dummy", "Quit"]
    },
    {
        type: "confirm",
        name: "confirm_quit",
        message: "Are you sure you want to quit?",
        when: (answers) => answers.main_menu_request == "Quit",
    }
]

// Add Questions

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
        message: "What is their Office Number?",
        when: (answers) => answers.role == "Manager"
    }
]

// Add Employee

const addEmployee = async function () {
    const responses = await inquirer.prompt(QUESTIONS)
    const { name, email, role, github, school, officeNumber } = responses
    var employeeObj = new EMPLOYEE_CLASSES[role](name, email, { github, school, officeNumber });
    var htmlCardObj = new Card(employeeObj);
    var htmlCard = htmlCardObj.render()
    writeHTMLFile(htmlCard);
    console.log(`\n${name} has been added!\n`)
    main();
}

// Main Menu

const main = async function () {
    const responses = await inquirer.prompt(MAIN_MENU_QUESTIONS);
    const { main_menu_request, confirm_quit } = responses;
    console.log(main_menu_request);
    if (confirm_quit) {
        return;
    }
    if (main_menu_request == "Dummy") {
        console.log("This is a dummy choice to make the list into 3 entries to overcome a bug in node in windows")
    } else {
        addEmployee();
    }
}



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

main();