// CHF düğmesine tıklanırsa, amount input'unun ilk karakterini ₣ ile güncelle
document.getElementById("chfButton").addEventListener("click", function () {
  document.getElementById("amount").value = "₣";
  updateSelectedButton(this);
});

// EUR düğmesine tıklanırsa, amount input'unun ilk karakterini € ile güncelle
document.getElementById("eurButton").addEventListener("click", function () {
  document.getElementById("amount").value = "€";
  updateSelectedButton(this);
});

// TRY düğmesine tıklanırsa, amount input'unun ilk karakterini ₺ ile güncelle
document.getElementById("tryButton").addEventListener("click", function () {
  document.getElementById("amount").value = "₺";
  updateSelectedButton(this);
});

function ibanButtonFunc() {
  document
    .getElementById("ibanButton")
    .removeEventListener("click", ibanButtonClickHandler);
  document
    .getElementById("ibanButton")
    .addEventListener("click", ibanButtonClickHandler);
}

function ibanButtonFunc() {
  document.getElementById("iban").classList.remove("hidden");
  document.getElementById("bankCard").classList.add("hidden");
}

function bankCardButtonFunc() {
  document.getElementById("iban").classList.add("hidden");
  document.getElementById("bankCard").classList.remove("hidden");
}
