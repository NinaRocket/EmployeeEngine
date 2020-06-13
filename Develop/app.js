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
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

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
        else {
            console.log("No employee added.");
        }

    })
};

function newEngineer() {
    return inquirer.prompt([

        {
            type: "input",
            name: "name",
            message: "Please enter the name of your engineer?"
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the engineer's ID number"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the engineer's email address."
        },
        {
            type: "input",
            name: "github",
            message: "Please enter the engineer's github username."
        }
    ]).then(data => {
        console.log("An engineer was added.");
        let engineer = new Engineer(data.name, data.id, data.email, data.github);
        employeeArr.push(engineer);
        addEmployee();
    })
};

function newIntern() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the name of your intern?"
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the intern's ID number"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the intern's email address."
        },
        {
            type: "input",
            name: "school",
            message: "Please enter the intern's school name."
        }
    ]).then(data => {
        console.log("An intern was added.");
        let intern = new Intern(data.name, data.id, data.email, data.school);
        employeeArr.push(intern);
        addEmployee();
    })
};

function newManager() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the Manager's name."
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the Manager's ID number"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the Manager's email address."
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please enter the manager's office number."
        }
    ]).then(data => {
        console.log("A manager was added.");
        let manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        employeeArr.push(manager);
        addEmployee();
    })
};

addEmployee();
//console.log(employeeArr);
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
