const walletContainer = document.getElementById("walletContainer");
const newDiv = document.createElement("div");
const newSpan = document.createElement("span");
const newSpanTwo = document.createElement("span");
const selectedWallet = document.querySelector('[data-status="passive"]');
console.log("selectedWallet");
function createFunc() {
    walletContainer.appendChild(newDiv);
    newDiv.appendChild(newSpan);
    newDiv.appendChild(newSpanTwo);
    newSpan.innerHTML = "TRY Account";
    newSpanTwo.innerHTML = "₺0,00"
    newDiv.classList.add("w-full", "bg-yellow-400", "rounded-lg", "py-4", "px-10", "flex", "justify-between", "items-center", "border-2", "border-primary-2");
}

function selectedFunc() {
    selectedWallet.classList.remove("border-primary-2");
    selectedWallet.classList.add("border-primary-5");
    selectedWallet.classList.add("border-dashed");
}