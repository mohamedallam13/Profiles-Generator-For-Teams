const Employee = require("./Employee.js")

class Engineer extends Employee {
    constructor(name, email, param) {
        super(name, email)
        this.role = "Engineer";
        this.github = param.github;
    }
    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;
