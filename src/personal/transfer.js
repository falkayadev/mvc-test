const accountButtons = document.querySelectorAll(".account-btn");

accountButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Önceden seçilmiş ring efektini kaldır
    accountButtons.forEach((btn) =>
      btn.classList.remove("ring", "ring-blue-500")
    );

    // Yeni tıklanan butona ring efektini ekle
    this.classList.add("ring", "ring-blue-600");
  });
});

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

// a etiketi tıklandığında içeriği hedefInput alanına yazdırmak için bir olay dinleyici ekleyin.
document
  .getElementById("balanceTag")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Sayfanın yeniden yüklenmesini engellemek için kullanılır.
    // a etiketinin içeriğini alın ve hedefInput alanına yazın.
    var aEtiketiIcerik = this.innerHTML;
    document.getElementById("amount").value = aEtiketiIcerik;
  });
