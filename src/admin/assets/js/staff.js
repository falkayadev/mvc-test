const employeeForm = document.getElementById("employee-form");
console.log(employeeForm);
const staffList = document.getElementById("staff-list");
console.log(staffList);
const createBtn = document.getElementById("create-btn");

createBtn.addEventListener("click", function () {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const dateFormat = year + "-" + month + "-" + day;

  // Create a new employee card
  const row = staffList.insertRow(staffList.rows.length);
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);
  cell1.innerHTML = `${firstName} ${lastName}`;
  cell1.classList.add("text-center", "border-b", "text-sm");
  cell2.innerHTML = `${email}`;
  cell2.classList.add("text-center", "border-b", "text-sm");
  cell3.innerHTML = `${password}`;
  cell3.classList.add("text-center", "border-b", "text-sm");
  cell4.innerHTML = ` ${dateFormat}`;
  cell4.classList.add("text-center", "border-b", "text-sm");
  // Clear form inputs
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
});
