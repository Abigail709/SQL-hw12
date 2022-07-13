const express = require('express');

const mysql = require('mysql2');


const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',

    user: 'root',

    password: '',
    database: ''
  },
  console.log(`Connected to the employee_db database.`)
);

function promptQuestion() {
  prompt([
    {
      type: "list",
      name: "choice",
      message: "Choose from the following options",
      choices: ["View all departments",
        "View all roles",
        "View all employees",
        "View all managers",
        "Add a role",
        "Add a employee",
        "Add a manager",
        "Update an employee",
        "Delete a employee",
        "Exit"
      ]
    }
  ])

    .then
}














app.use((req, res) => {
  res.status(404).end();
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});