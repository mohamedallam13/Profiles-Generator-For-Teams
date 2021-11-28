const Employee = require("./Employee.js")

class Manager extends Employee {
    constructor(name, email, param) {
        super(name, email);
        this.officeNumber = param.officeNumber;
        this.role = "Manager";
    }
}

module.exports = Manager;
