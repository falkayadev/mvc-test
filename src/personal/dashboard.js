function toggleCard(element) {
  const card = element.querySelector(".card-transform");
  if (card.style.transform === "rotateY(180deg)") {
    card.style.transform = "rotateY(0deg)";
  } else {
    card.style.transform = "rotateY(180deg)";
  }
}

function showHistory(id) {
  // Önce tüm içerikleri gizle
  document.getElementById("chfHistory").style.display = "none";
  document.getElementById("eurHistory").style.display = "none";
  document.getElementById("tryHistory").style.display = "none";

  // Seçilen içeriği göster
  document.getElementById(id).style.display = "block";
}

function changeDiv() {
  document.getElementById("deactiveEur").style.display = "none";
  document.getElementById("activeEur").style.display = "block";
}
