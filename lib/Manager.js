class Manager extends Employee {
    constructor(name, id, email, officeNumner) {
        super(name, id, email);
        this.officeNumner = officeNumner;
        this.role = "Manager";
    }
}

module.exports = Manager;
