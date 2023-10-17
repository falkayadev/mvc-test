const select = document.getElementById("countryEdit");
const editButton = document.getElementById("country-edit-btn");

editButton.addEventListener("click", function () {
  select.disabled = !select.disabled;
  select.classList.toggle("appearance-none");
  select.classList.toggle("bg-primary-6");
});
