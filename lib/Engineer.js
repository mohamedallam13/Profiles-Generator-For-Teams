const Employee = require("./Employee.js")

class Engineer extends Employee {
    constructor(name, email, param) {
        super(name, email)
        this.role = "Engineer";
        this.github = param.github;
        this.extraInfoProper = "Github";
    }
    getExtraInfo() {
        var github = this.getGithub();
        return `<a href="${github}">github</a>`
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;
