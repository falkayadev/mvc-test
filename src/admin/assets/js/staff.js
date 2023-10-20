const employeeForm = document.getElementById("employee-form");
console.log(employeeForm);
const cardContainer = document.getElementById("card-container");
console.log(cardContainer);
const createBtn = document.getElementById("create-btn");

createBtn.addEventListener("click", function () {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;

  // Create a new employee card
  const card = document.createElement("div");
  card.classList.add(
    "w-full",
    "h-full",
    "bg-yellow-400",
    "flex",
    "items-center",
    "px-8",
    "rounded-xl",
    "gap-4"
  );

  const img = document.createElement("img");
  img.classList.add(
    "w-16",
    "h-16",
    "rounded-full",
    "border-2",
    "border-primary-3"
  );
  img.src = "https://i.pravatar.cc/300";
  img.alt = "Employee Photo";

  const info = document.createElement("div");
  info.classList.add("flex", "flex-col", "justify-center");
  info.innerHTML = `
        <span class="text-2xl">${firstName} ${lastName}</span>
        <span class="text-sm">${email}</span>
    `;

  cardContainer.appendChild(card);
  card.appendChild(img);
  card.appendChild(info);

  // Clear form inputs
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
});
