function createThis() {
  newWallet.classList.remove("border-primary-2");
  newWallet.classList.add("border-primary-6", "border-dashed");
  newWallet.setAttribute("data-status", "active");
}

function createFunc() {
  const accountTabs = document.getElementById("accountTabs");
  const newDiv = document.createElement("div");
  const newSpan = document.createElement("span");
  const newSpanTwo = document.createElement("span");
  accountTabs.appendChild(newDiv);
  newDiv.classList.add(
    "w-full",
    "bg-yellow-400",
    "rounded-lg",
    "py-4",
    "px-10",
    "flex",
    "justify-between",
    "items-center",
    "border-2",
    "border-primary-2"
  );
  newDiv.appendChild(newSpan);
  newDiv.appendChild(newSpanTwo);
  newSpan.innerHTML = "TRY Account";
  newSpanTwo.innerHTML = "₺0,00";
}
