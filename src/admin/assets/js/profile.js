const select = document.getElementById("countryEdit");
const editButton = document.getElementById("country-edit-btn");

editButton.addEventListener("click", function () {
  select.disabled = !select.disabled;
  select.classList.toggle("appearance-none");
  select.classList.toggle("bg-primary-6");
});

const profileStatus = document.getElementById("profileStatus");
function profileFunc() {
  if (profileStatus.getAttribute("data-status") === "active") {
    profileStatus.classList.remove("bg-green-400");
    profileStatus.classList.add("bg-gray-400");
    profileStatus.innerHTML = "Passive";
    profileStatus.setAttribute("data-status", "passive");
  } else {
    profileStatus.classList.remove("bg-gray-400", "bg-red-400");
    profileStatus.classList.add("bg-green-400");
    profileStatus.innerHTML = "Active";
    profileStatus.setAttribute("data-status", "active");
  }
}

function authFunc() {
  profileStatus.classList.remove("bg-green-400", "bg-gray-400");
  profileStatus.classList.add("bg-red-400");
  profileStatus.innerHTML = "Banned";
  profileStatus.setAttribute("data-status", "banned");
}
