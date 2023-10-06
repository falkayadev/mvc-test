const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", (event) => {
  mobileMenu.classList.toggle("hidden");
});

document.addEventListener("click", (event) => {
  // Eğer tıklama mobil menü ya da menü butonu üzerinde değilse menüyü kapat
  if (
    !mobileMenu.contains(event.target) &&
    !menuButton.contains(event.target)
  ) {
    mobileMenu.classList.add("hidden");
  }

  window.onclick = function (event) {
    console.log("pencereye tıklandı");
    if (event.target == modal) {
      console.log("pencere dışına tıklandı");
      modal.style.display = "none";
    }
  };
});

function checkScreenSizeAndCloseMenu() {
  const mobileMenu = document.getElementById("mobileMenu");

  // Eğer ekran boyutu 768px (md breakpoint) veya daha büyükse menüyü kapat
  if (window.innerWidth >= 768) {
    mobileMenu.classList.add("hidden");
  }
}
//FAQ Section
// Sayfa yüklendiğinde ve pencere boyutlandırıldığında kontrolü gerçekleştir
window.addEventListener("resize", checkScreenSizeAndCloseMenu);

document.addEventListener("DOMContentLoaded", function () {
  // Tüm aç/kapa butonlarını seç
  let toggles = document.querySelectorAll('button[aria-controls^="faq-"]');

  toggles.forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      // İlgili cevabı (dd) seç
      let content = document.getElementById(
        toggle.getAttribute("aria-controls")
      );

      if (toggle.getAttribute("aria-expanded") === "false") {
        // Eğer içerik kapalıysa aç
        content.style.display = "block";
        toggle.setAttribute("aria-expanded", "true");
        toggle.querySelector("svg:not(.hidden)").classList.add("hidden");
        toggle.querySelector("svg.hidden").classList.remove("hidden");
      } else {
        // Eğer içerik açıksa kapat
        content.style.display = "none";
        toggle.setAttribute("aria-expanded", "false");
        toggle.querySelector("svg:not(.hidden)").classList.add("hidden");
        toggle.querySelector("svg.hidden").classList.remove("hidden");
      }
    });
  });
});

//Modal Login
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const openModalBtn = document.getElementById("openModal");
  const openModalFooter = document.getElementById("openModalFooter");
  const closeBtn = document.getElementById("close-btn");
  const loginTextBtn = document.getElementById("loginText");

  openModalBtn.onclick = function () {
    modal.style.display = "block";
  };

  openModalFooter.onclick = function () {
    modal.style.display = "block";
  };

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };
});
//Modal Login Error

function checkCredentials() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email === "banned@email.com") {
    document.getElementById("error-message2").style.display = "block";
  } else if (email === "email@email.com" && password === "1234") {
    window.location.href = "./personal/dashboard.html";
  } else {
    document.getElementById("error-message1").style.display = "block";
    document.getElementById("error-message2").style.display = "none";
  }
}

function checkCredentialsRegister() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email === "banned@email.com") {
    document.getElementById("error-message2").style.display = "block";
  } else if (email === "email@email.com" && password === "1234") {
    window.location.href = "../personal/dashboard.html";
  } else {
    document.getElementById("error-message1").style.display = "block";
    document.getElementById("error-message2").style.display = "none";
  }
}

document.getElementById("myForm").addEventListener("submit", function (e) {
  const password1 = document.getElementById("password1").value;
  const password2 = document.getElementById("password2").value;
  const errorMessage = document.querySelector("#error-messagePass");

  if (password1 !== password2) {
    e.preventDefault(); // Form gönderimini engeller
    errorMessage.classList.remove("hidden"); // Hata mesajını gösterir
  } else {
    errorMessage.classList.add("hidden"); // Hata mesajını gizler
    // Şifreler uyuşuyorsa form gönderilecektir.
  }
});

// Textarea'nın yazdıkça büyümesi için
let textarea = document.getElementById("autoGrowingTextarea");

textarea.addEventListener("input", function () {
  this.style.height = "auto"; // İlk olarak yüksekliği otomatik olarak ayarla
  this.style.height = this.scrollHeight + "px"; // Sonra scroll yüksekliğini kullanarak yüksekliği ayarla
});

// Başlangıçta metin alanını doğru yükseklikte başlat
textarea.style.height = textarea.scrollHeight + "px";

function feeChange() {
  const feeTab = document.getElementById("feeTab");
  const limitTab = document.getElementById("limitTab");
  feeTab.classList.remove("bg-primary-3");
  feeTab.classList.add("bg-primary-4");
  limitTab.classList.remove("bg-primary-4");
  limitTab.classList.add("bg-primary-3");
}

function limitChange() {
  const feeTab = document.getElementById("feeTab");
  const limitTab = document.getElementById("limitTab");
  limitTab.classList.remove("bg-primary-3");
  limitTab.classList.add("bg-primary-4");
  feeTab.classList.remove("bg-primary-4");
  feeTab.classList.add("bg-primary-3");
}
