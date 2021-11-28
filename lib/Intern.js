const Employee = require("./Employee.js")

class Intern extends Employee {
    constructor(name, email, param) {
        super(name, email);
        this.role = "Intern";
        this.school = param.school;
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;
