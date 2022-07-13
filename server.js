const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');


const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);


function promptQuestion() {
  inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "Choose from the following options",
      choices: ["View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
        "Exit"
      ]
    }
  ])

    .then((respose) => {
      switch (response.choice) {
        case "View all departments":
          viewDepartment();
          break;
        case "View all roles":
          viewRoles();
          break;
        case "View all employees":
          viewEmployees();
          break;
        case "Add a department":
          addDepartment();
          break;
        case "Add a role":
          addRole();
          break;
        case "Add an employee":
          addEmployee();
          break;
        case "Update an employee role":
          updateEmployee();
          break;
        case "Exit":
          process.exit();

      }
    })
};

function viewDepartment() {
  db.promise().query()
}












