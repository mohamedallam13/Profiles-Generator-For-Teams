const Employee = require("./Employee.js")

class Manager extends Employee {
    constructor(name, email, param) {
        super(name, email);
        this.role = "Manager";
        this.officeNumber = param.officeNumber;
        this.extraInfoProper = "Office Number";
        this.icon = '<i class="bi bi-cup"></i>'
    }
    getExtraInfo() {
        return this.getOfficeNumber();
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;
