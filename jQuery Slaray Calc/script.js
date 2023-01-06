$(function () {
  // Making sure we are in js and jquery
  console.log("In jquery");

  $("#submit").on("click", handleSubmit); // Adding our first event listener to be on the click of our submit button
});

const employees = []; // Create an array to store the employees

function addToEmployees(first, last, id, title, salary) {
  const employee = {
    firstName: first,
    lastName: last,
    idNumber: id,
    jobTitle: title,
    annualSalary: salary,
  };
  employees.push(employee);
}

function appendEmp() {
  // Function to add employees
  $("#table-body").empty();
  for (let i = 0; i < employees.length; i++) {
    const element = employees[i];

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
  const firstVal = $("#first-name").val();
  const lastVal = $("#last-name").val();
  const idVal = $("#id-number").val();
  const titleVal = $("#job-title").val();
  const salaryVal = $("#annual-salary").val();

  addToEmployees(firstVal, lastVal, idVal, titleVal, salaryVal);

  $("#first-name").val("");
  $("#last-name").val("");
  $("#id-number").val("");
  $("#job-title").val("");
  $("#annual-salary").val("");

  appendEmp();
}
