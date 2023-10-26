const button = document.getElementById("currencyAdder");
let newCur = document.getElementById("newCur").value;
const list = document.getElementById("supportedCurrencyList");
console.log(newCur);

button.addEventListener("click", function () {
  const newDiv = document.createElement("div");
  const newSpan = document.createElement("span");
  const newButton = document.createElement("button");
  const newIcon = document.createElement("i");

  list.appendChild(newDiv);
  newDiv.classList.add(
    "w-full",
    "h-full",
    "bg-yellow-400",
    "md:col-span-2",
    "col-span-6",
    "rounded-lg",
    "flex",
    "justify-between",
    "items-center",
    "px-10",
  );
  newDiv.appendChild(newSpan);
  newSpan.classList.add("font-semibold", "text-xl");
  newSpan.innerHTML = newCur.toUpperCase();
  newDiv.appendChild(newButton);
  newButton.appendChild(newIcon);
  newIcon.classList.add("fa-solid", "fa-trash");
});
