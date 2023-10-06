const currency = document.getElementById("currencySelector");
const chfDetails = document.getElementById("chfDetails");
const eurDetails = document.getElementById("eurDetails");
const tryDetails = document.getElementById("tryDetails");
currency.addEventListener("change", () => {
  if (currency.value === "chf") {
    chfDetails.style.display = "block";
    eurDetails.style.display = "none";
    tryDetails.style.display = "none";
  } else if (currency.value === "eur") {
    chfDetails.style.display = "none";
    eurDetails.style.display = "block";
    tryDetails.style.display = "none";
  } else {
    chfDetails.style.display = "none";
    eurDetails.style.display = "none";
    tryDetails.style.display = "block";
  }
});

function openTab(tabName, elmnt) {
  // Tüm tab içeriklerini gizleyin
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Tüm tab bağlantılarını pasifleştirin
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Gösterilecek tab'ı aktif hale getirin
  document.getElementById(tabName).style.display = "block";
  elmnt.classList.add("active");
}

document.getElementById("inputCard").addEventListener("input", function () {
  document.getElementById("outputCard").textContent = this.value;
});

document.getElementById("inputExpDate").addEventListener("input", function () {
  document.getElementById("outputExpDate").textContent = this.value;
});

document
  .getElementById("inputFirstName")
  .addEventListener("input", function () {
    document.getElementById("outputFirstName").textContent =
      this.value.toUpperCase();
  });

document.getElementById("inputLastName").addEventListener("input", function () {
  document.getElementById("outputLastName").textContent =
    this.value.toUpperCase();
});

function insertSpaces() {
  const inputElem = document.getElementById("inputCard");
  let value = inputElem.value.replace(/ /g, ""); // Mevcut boşlukları temizle
  let outputValue = "";

  for (let i = 0; i < value.length; i++) {
    outputValue += value[i];

    if ((i + 1) % 4 === 0 && i !== value.length - 1) {
      outputValue += " "; // Her 4 karakterde bir boşluk ekler
    }
  }

  // Formatted value'yi input'a geri atalım
  inputElem.value = outputValue;

  const cardValue = document.getElementById("inputCard").value;
  const visaContent = document.getElementById("visa");
  const masterCardContent = document.getElementById("masterCard");

  // Öncelikle her iki içeriği de gizleyelim
  visaContent.style.display = "none";
  masterCardContent.style.display = "none";

  // Eğer input değeri 4 ile başlıyorsa Visa'yı, 5 ile başlıyorsa MasterCard'ı gösterelim
  if (cardValue.startsWith("4")) {
    visaContent.style.display = "block";
  } else if (cardValue.startsWith("5")) {
    masterCardContent.style.display = "block";
  }
}

function insertSlash() {
  const inputElem = document.getElementById("inputExpDate");
  let value = inputElem.value.replace(/\//g, ""); // Mevcut "/" karakterlerini temizle
  let outputValue = "";

  for (let i = 0; i < value.length; i++) {
    outputValue += value[i];

    if ((i + 1) % 2 === 0 && i !== value.length - 1) {
      outputValue += "/"; // Her 2 karakterde bir "/" ekler
    }
  }

  inputElem.value = outputValue;
}
