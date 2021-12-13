const Employee = require("./Employee.js")

class Engineer extends Employee {
    constructor(name, email, param) {
        super(name, email)
        this.role = "Engineer";
        this.github = param.github;
        this.extraInfoProper = "Github";
        this.icon = '<i class="bi bi-gear"></i>';
    }
    getExtraInfo() {
        //Accepts both a link or simply a username
        var github = this.getGithub();
        if(github.includes('.com')){
            return `<a href="${github}">${github}</a>`
        }
        return `<a href="https://www.github.com/${github}">https://www.github.com/${github}</a>`
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;
