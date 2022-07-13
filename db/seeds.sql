use employee;

INSERT INTO department
    (name)
VALUES
    ("Finance");
    ("Engineering");
    ("Sales");
    ("Real Estate")

INSERT INTO role(title, salary, department_id)
values 
    ('Accountant', 80000, 1),
    ('Software Engineer', 110000, 2),
    ('Sales Rep', 70000, 3),
    ("Property Manager" 90000, 4)

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("James", "Smith", 1, NULL),
    ("Jessica", "Adams", 2, NULL),
    ("Mark", "Johnson", 3, NULL),
    ("David", "Brown", 4, 1),
