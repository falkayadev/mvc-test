// Textarea'nın yazdıkça büyümesi için
let textarea = document.getElementById("autoGrowingTextarea");

textarea.addEventListener("input", function () {
  this.style.height = "auto"; // İlk olarak yüksekliği otomatik olarak ayarla
  this.style.height = this.scrollHeight + "px"; // Sonra scroll yüksekliğini kullanarak yüksekliği ayarla
});

// Başlangıçta metin alanını doğru yükseklikte başlat
textarea.style.height = textarea.scrollHeight + "px";
