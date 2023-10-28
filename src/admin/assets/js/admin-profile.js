function showPass() {
  const passInput = document.querySelector("#currentPass");
  console.log(passInput);
  if (passInput.type === "text") {
    passInput.setAttribute("type", "password");
  } else {
    passInput.setAttribute("type", "text");
  }
}

function cssFunc() {
  const thumb = document.querySelector("#switchThumb");
  const admin = document.querySelector("#adminSide");
  const employee = document.querySelector("#employeeSide");
  if (thumb.classList.contains("left-1")) {
    thumb.classList.remove("left-1");
    thumb.classList.add("right-1");
    employee.classList.add("opacity-30");
    admin.classList.remove("opacity-30");
  } else {
    thumb.classList.remove("right-1");
    thumb.classList.add("left-1");
    employee.classList.remove("opacity-30");
    admin.classList.add("opacity-30");
  }
}
