/* 
   Filename: ComplexCode.js
   Content: Complex JavaScript Code Example
*/

// Define an array of objects to store employee information
const employees = [
  { id: 1, name: "John Doe", age: 30, department: "Engineering" },
  { id: 2, name: "Jane Smith", age: 25, department: "Marketing" },
  { id: 3, name: "Adam Johnson", age: 35, department: "Sales" },
  { id: 4, name: "Emily Brown", age: 28, department: "HR" },
  { id: 5, name: "Michael Davis", age: 32, department: "Finance" },
];

// Function to calculate the average age of employees
function calculateAverageAge() {
  let totalAge = 0;

  employees.forEach((employee) => {
    totalAge += employee.age;
  });

  return totalAge / employees.length;
}

// Utility function to find the employee with the specified ID
function findEmployeeById(id) {
  return employees.find((employee) => employee.id === id);
}

// Class to represent a Department
class Department {
  constructor(name) {
    this.name = name;
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  removeEmployee(employeeId) {
    const index = this.employees.findIndex(
      (employee) => employee.id === employeeId
    );

    if (index !== -1) {
      this.employees.splice(index, 1);
    }
  }

  getEmployeeCount() {
    return this.employees.length;
  }
}

// Create instances of Department
const engineeringDepartment = new Department("Engineering");
const marketingDepartment = new Department("Marketing");

// Add employees to departments
engineeringDepartment.addEmployee(findEmployeeById(1));
engineeringDepartment.addEmployee(findEmployeeById(3));

marketingDepartment.addEmployee(findEmployeeById(2));
marketingDepartment.addEmployee(findEmployeeById(4));
marketingDepartment.addEmployee(findEmployeeById(5));

// Calculate the average age of employees
const averageAge = calculateAverageAge();

// Output the department names and employee count
console.log(`Department: ${engineeringDepartment.name}`);
console.log(`Employee Count: ${engineeringDepartment.getEmployeeCount()}`);

console.log(`Department: ${marketingDepartment.name}`);
console.log(`Employee Count: ${marketingDepartment.getEmployeeCount()}`);

console.log(`Average Age: ${averageAge}`);

// Extra complex code...

// Function to sort employees by age in ascending order
function sortEmployeesByAge() {
  employees.sort((a, b) => a.age - b.age);
}

// Sort employees by age
sortEmployeesByAge();

console.log("Sorted Employees by Age:");
employees.forEach((employee) => console.log(employee.name, employee.age));

// Other complex code...

// Class to represent a Project
class Project {
  constructor(name, department) {
    this.name = name;
    this.department = department;
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  removeEmployee(employeeId) {
    const index = this.employees.findIndex(
      (employee) => employee.id === employeeId
    );

    if (index !== -1) {
      this.employees.splice(index, 1);
    }
  }

  getEmployeeCount() {
    return this.employees.length;
  }
}

// Create an instance of Project
const newProject = new Project("New Project", engineeringDepartment);

// Add employees to project
newProject.addEmployee(findEmployeeById(1));
newProject.addEmployee(findEmployeeById(3));

console.log(`Project: ${newProject.name}`);
console.log(`Department: ${newProject.department.name}`);
console.log(`Employee Count: ${newProject.getEmployeeCount()}`);

// More complex code...

// Function to filter employees by department
function filterEmployeesByDepartment(department) {
  return employees.filter((employee) => employee.department === department);
}

// Filter employees by department "HR"
const hrEmployees = filterEmployeesByDepartment("HR");

console.log("Employees in HR Department:");
hrEmployees.forEach((employee) => console.log(employee.name, employee.department));

// More complex code...

// Function to calculate the total age of employees in a department
function calculateTotalAgeByDepartment(department) {
  const departmentEmployees = filterEmployeesByDepartment(department);
  let totalAge = 0;

  departmentEmployees.forEach((employee) => {
    totalAge += employee.age;
  });

  return totalAge;
}

// Calculate the total age of employees in department "Engineering"
const engineeringTotalAge = calculateTotalAgeByDepartment("Engineering");

console.log(`Total Age in Engineering Department: ${engineeringTotalAge}`);

// More complex code...

// Class to represent a Project Manager
class ProjectManager {
  constructor(name, project) {
    this.name = name;
    this.project = project;
  }

  changeProject(newProject) {
    this.project.removeEmployee(findEmployeeById(this.name));
    this.project = newProject;
    this.project.addEmployee(findEmployeeById(this.name));
  }
}

// Create an instance of Project Manager
const projectManager = new ProjectManager("John Doe", newProject);

console.log("Project Manager Details:");
console.log(`Name: ${projectManager.name}`);
console.log(`Project: ${projectManager.project.name}`);

// More complex code...

// Function to find the oldest employee
function findOldestEmployee() {
  return employees.reduce((oldest, current) => {
    return current.age > oldest.age ? current : oldest;
  });
}

// Find the oldest employee
const oldestEmployee = findOldestEmployee();

console.log("Oldest Employee:");
console.log(`Name: ${oldestEmployee.name}`);
console.log(`Age: ${oldestEmployee.age}`); 

// More complex code...

// Function to check if an employee is in a project
function isEmployeeInProject(employeeId, project) {
  return project.employees.some((employee) => employee.id === employeeId);
}

// Check if employee with ID 1 is in the new project
const isEmployeeInNewProject = isEmployeeInProject(1, newProject);

console.log(`Is Employee in New Project: ${isEmployeeInNewProject}`); 

// More complex code...

// Function to retrieve department name from employee ID
function getDepartmentName(employeeId) {
  const employee = findEmployeeById(employeeId);

  if (employee) {
    return employee.department;
  }

  return "Employee not found";
}

// Retrieve department name for employee with ID 3
const departmentNameForEmployee3 = getDepartmentName(3);

console.log(`Department Name for Employee with ID 3: ${departmentNameForEmployee3}`);