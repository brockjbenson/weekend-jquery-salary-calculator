$(function () {
  // Making sure we are in js and jquery
  console.log("In jquery");

  $("#submit").on("click", addEmp); // Adding our first event listener to be on the click of our submit button
});

let employees = []; // Create an array to store the employees

function addEmp() {
  // Function to add employees
  console.log("Adding Employee");
}
