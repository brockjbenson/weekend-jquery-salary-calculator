$(function () {
  // Making sure we are in js and jquery
  console.log("In jquery");

  $("#submit").on("click", handleSubmit); // Adding our first event listener to be on the click of our submit button
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
      <td>${element.annualSalary}</td>
      </tr>
      `);
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
