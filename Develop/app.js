const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//array to push added employees into
const employeeArr = [];
//function to add employee, if/else statements to direct to function of employee role
function addEmployee() {
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Please select the role the employee you are entering holds.",
            choices: ["Manager",
                "Intern",
                "Engineer", "None"],

        }
    ]).then(selectedRole => {
        if (selectedRole.role === "Manager") {
            newManager();
        }
        else if (selectedRole.role === "Engineer") {
            newEngineer();
        }
        else if (selectedRole.role === "Intern") {
            newIntern();
        }
        else if (selectedRole.role === "None") {
            console.log("No employee added.");
            const html = render(employeeArr);
            fs.writeFile(outputPath, html, (err) => err ? console.log(err) : console.log("Success! You've created a team.html file"));
            return;
        }
    })
};
//function to add a new engineer
function newEngineer() {
    return inquirer.prompt([

        {
            type: "input",
            name: "name",
            message: "Please enter the name of your engineer?",
            validate: name => {
                if (!name.length) {
                    console.log("\nPlease enter a name.")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the engineer's ID number",
            validate: id => {
                if (isNaN(parseInt(id))) {
                    console.log("\nEmployee id should be a number");
                    return false;
                }
                else {
                    return true;
                }
            }

        },
        {
            type: "input",
            name: "email",
            message: "Please enter the engineer's email address."
        },
        {
            type: "input",
            name: "github",
            message: "Please enter the engineer's github username.",
            validate: username => {
                if (!username.length) {
                    console.log("\nPlease enter a name");
                    return false;
                }
                else {
                    return true;
                }
            }
        }
    ]).then(data => {
        console.log("An engineer was added.");
        let engineer = new Engineer(data.name, data.id, data.email, data.github);
        employeeArr.push(engineer);
        addEmployee();
    })
};
//function to add new intern
function newIntern() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the name of your intern?",
            validate: name => {
                if (!name.length) {
                    console.log("\nPlease enter a name.")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the intern's ID number",
            validate: id => {
                if (isNaN(parseInt(id))) {
                    console.log("\nEmployee id should be a number");
                    return false;
                }
                else {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the intern's email address.",
            validate: email => {
                const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                if (valid) {
                    return true;
                } else {
                    console.log("\nPlease enter a valid email")
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "school",
            message: "Please enter the intern's school name.",
            validate: school => {
                if (!school.length) {
                    console.log("\nPlease enter a school.");
                    return false;
                }
                else {
                    return true;
                }
            }
        }
    ]).then(data => {
        console.log("An intern was added.");
        let intern = new Intern(data.name, data.id, data.email, data.school);
        employeeArr.push(intern);
        addEmployee();
    })
};
//function to add new manager
function newManager() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the Manager's name.",
            validate: name => {
                if (!name.length) {
                    console.log("\nPlease enter a name.")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the Manager's ID number",
            validate: id => {
                if (isNaN(parseInt(id))) {
                    console.log("\nEmployee id should be a number");
                    return false;
                }
                else {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the Manager's email address.",
            validate: email => {
                const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                if (valid) {
                    return true;
                } else {
                    console.log("\nPlease enter a valid email")
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please enter the manager's office number.",
            validate: num => {
                if (isNaN(parseInt(num))) {
                    console.log("\nEmployee id should be a number");
                    return false;
                }
                else {
                    return true;
                }
            }
        }
    ]).then(data => {
        console.log("A manager was added.");
        let manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        employeeArr.push(manager);
        addEmployee();
    })
};

addEmployee();

