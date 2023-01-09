$(function () {
  // Making sure we are in js and jquery
  console.log("In jquery");

  $("#submit").on("click", handleSubmit); // Adding our first event listener to be on the click of our submit button
  $("#table-body").on("click", ".delete", delEmp); // adding our event listener to delete an employee off of the table by targeting our table-body since it is already on the dom from the html code
}); 

const employees = []; // Create an array to store the employees

function addToEmployees(first, last, id, title, salary) {
  // Creating a function to create a new employee and add to array
  const employee = {
    // create an employee object
    firstName: first, // Add all of the values for the employee and set them to the coresponding argument
    lastName: last,
    idNumber: id,
    jobTitle: title,
    annualSalary: salary,
  };
  employees.push(employee); // Push the object into our array

  counter += Math.round(Number(employee.annualSalary / 12)); // taking our counter var and incrementing it by our employee salary and turning it into a number using Numbber() and diving by 12 to get monthly and also round to nearest dollar
  $("#monthly-counter").text(counter); // targeting our id for the counter on the webpage and updating it with the counter var
}

function removeEmp(emp) {
  // Creating a function to remove the employee from our array of employees
  for (let i = 0; i < employees.length; i++) {
    // Loop over employees array
    for (let j = 0; j < emp.length; j++) {} // loop over the employee objects
  }

  employees.pop(emp); // pop the employee object from the employees array
}

function appendEmp() {
  // Create our appending function to append to the dom
  $("#table-body").empty(); // Use this to clear the children of table-body
  for (let i = 0; i < employees.length; i++) {
    //loop over our array of employees
    const element = employees[i]; // set a constant variable element to be employees at our index

    // create our append event by taking our element or employees at i and then the selector to target which value we want
    $("#table-body").append(` 
      <tr>
      <td>${element.firstName}</td>
      <td>${element.lastName}</td>
      <td>${element.idNumber}</td>
      <td>${element.jobTitle}</td>
      <td class="salary">${element.annualSalary}</td>
      <td><button class="delete">X</button></td> 
      </tr>
      `);
    // added a delete button and appeneded into table-body when a new employee is added
  }

  if (counter > 20000) {
    $("#monthly-counter").css("color", "red"); // create else if statement to change the color of the counter each time we enter a new employee based on our critera
  } else if (counter < 20000) {
    $("#monthly-counter").css("color", "green");
  }
}
let counter = 0; // added a counter var to use for the pages salary counter

function delEmp(event) {
  // Creating our delete event by using the event.target and using the .closest() to go to the next tr that it finds, and then removing it using the .remove()
  $(event.target).closest("tr").remove();
  let count = $(event.target).closest("tr").find(".salary").text(); // Setting up our decrementing by setting a new var count to the closest tr with the class .salary
  counter -= Math.round(Number(count) / 12); // taking our new var count as a number and decrementing it from our counter global var and dividing by 12 to get monthly and round to nearest dollar
  $("#monthly-counter").text(Number(counter)); // updating our counter in the html with our new counter number

  removeEmp($(event.target).closest("tr")); // Call our removeEmp function in delEmp function to delete the employee that we click on from the employees array

  if (counter > 20000) {
    $("#monthly-counter").css("color", "red"); // create if else for the css style of the counter to update as we remove employees
  } else if (counter < 20000) {
    $("#monthly-counter").css("color", "green");
  }
}

function handleSubmit() {
  // Create our submit button function
  const firstVal = $("#first-name").val(); // set a constant var to the values we want and set it equal to our input values from our hmtl
  const lastVal = $("#last-name").val();
  const idVal = $("#id-number").val();
  const titleVal = $("#job-title").val();
  const salaryVal = $("#annual-salary").val();

  addToEmployees(firstVal, lastVal, idVal, titleVal, salaryVal); // take those inputs from the html and use our addToEmployee function to add them to our employees array

  $("#first-name").val(""); // use this to clear our inputs after the submit button is clicked
  $("#last-name").val("");
  $("#id-number").val("");
  $("#job-title").val("");
  $("#annual-salary").val("");

  appendEmp(); // also run our append function when the submit function is clicked
}
