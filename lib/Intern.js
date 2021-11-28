const Employee = require("./Employee.js")

class Intern extends Employee {
    constructor(name, email, param) {
        super(name, email);
        this.role = "Intern";
        this.school = param.school;
        this.extraInfoProper = "School";
        this.icon = '<i class="bi bi-mortarboard-fill"></i>';
    }
    getExtraInfo(){
        return this.getSchool();
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;
