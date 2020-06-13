// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {

    constructor(officeNumber, name, id, email) {

        super(name, id, email);
        this.officeNumber = officeNumber;
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
};
module.exports = Manager; 