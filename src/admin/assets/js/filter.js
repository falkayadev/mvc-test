// Input elementini seç
var filtreInput = document.getElementById("filterInput");

// Tabloyu seç
var tablo = document.getElementById("myTable");

// Input alanına herhangi bir tuş basıldığında filtreleme işlemi yap
filtreInput.addEventListener("keyup", function () {
  var filtre = filtreInput.value.toUpperCase(); // Filtreleme dizesini büyük harfe dönüştür

  // Tablodaki her satırı döngü ile kontrol et
  var satırlar = tablo.getElementsByTagName("tr");
  for (var i = 0; i < satırlar.length; i++) {
    var hücreler = satırlar[i].getElementsByTagName("td");
    for (var j = 0; j < hücreler.length; j++) {
      var hücre = hücreler[j];
      if (hücre) {
        var metin = hücre.textContent || hücre.innerText;
        if (metin.toUpperCase().indexOf(filtre) > -1) {
          satırlar[i].style.display = ""; // Eşleşme bulundu, satırı göster
          break; // Başka hücreleri kontrol etmeye gerek yok
        } else {
          satırlar[i].style.display = "none"; // Eşleşme yok, satırı gizle
        }
      }
    }
  }
});
