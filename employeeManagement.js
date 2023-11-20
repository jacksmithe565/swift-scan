/* Sophisticated Code for Employee Management */

// File: employeeManagement.js

// Define Employee class
class Employee {
  constructor(name, age, designation, salary) {
    this.name = name;
    this.age = age;
    this.designation = designation;
    this.salary = salary;
  }

  promote(newDesignation) {
    this.designation = newDesignation;
  }

  increaseSalary(increment) {
    this.salary += increment;
  }
}

// Create Employee objects
const employee1 = new Employee("John Doe", 35, "Manager", 5000);
const employee2 = new Employee("Jane Smith", 28, "Developer", 4000);
const employee3 = new Employee("Mike Johnson", 42, "CTO", 8000);
const employee4 = new Employee("Emily Garcia", 31, "Designer", 4500);
const employee5 = new Employee("Robert Brown", 39, "Developer", 4200);

// Store the employees in an array
const employees = [employee1, employee2, employee3, employee4, employee5];

// Calculate average salary
let totalSalary = 0;
employees.forEach((employee) => {
  totalSalary += employee.salary;
});
const averageSalary = totalSalary / employees.length;

// Find the oldest employee
let oldestEmployee = employees[0];
for (let i = 1; i < employees.length; i++) {
  if (employees[i].age > oldestEmployee.age) {
    oldestEmployee = employees[i];
  }
}

// Generate employee report
console.log("Employee Report:");
console.log("----------------");

employees.forEach((employee) => {
  console.log(`Employee Name: ${employee.name}`);
  console.log(`Age: ${employee.age}`);
  console.log(`Designation: ${employee.designation}`);
  console.log(`Salary: $${employee.salary}`);
  console.log("----------------");
});

console.log(`Average Salary: $${averageSalary}`);
console.log(`Oldest Employee: ${oldestEmployee.name}`);

// Helper function to sort employees by salary (descending order)
function sortBySalary(employees) {
  return employees.sort((a, b) => b.salary - a.salary);
}

// Sort employees by salary
console.log("\nEmployees sorted by salary (high to low):");
console.log("----------------------------------------");

const employeesSortedBySalary = sortBySalary(employees);
employeesSortedBySalary.forEach((employee) => {
  console.log(`Employee Name: ${employee.name}`);
  console.log(`Designation: ${employee.designation}`);
  console.log(`Salary: $${employee.salary}`);
  console.log("----------------");
});

// Helper function to filter employees by designation
function filterByDesignation(employees, designation) {
  return employees.filter((employee) => employee.designation === designation);
}

// Filter employees by designation
const filteredEmployees = filterByDesignation(employees, "Developer");

console.log("\nFiltered Employees (designation: Developer):");
console.log("-------------------------------------------");

filteredEmployees.forEach((employee) => {
  console.log(`Employee Name: ${employee.name}`);
  console.log(`Age: ${employee.age}`);
  console.log(`Salary: $${employee.salary}`);
  console.log("----------------");
});

// Calculate the total salary of the filtered employees
let totalFilteredSalary = 0;
filteredEmployees.forEach((employee) => {
  totalFilteredSalary += employee.salary;
});

console.log(`Total Salary (filtered): $${totalFilteredSalary}`);