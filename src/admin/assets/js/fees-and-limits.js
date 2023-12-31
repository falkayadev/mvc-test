const triggers = document.querySelectorAll(".section-trigger");
const sections = document.querySelectorAll('[id^="section"]');

triggers.forEach(function (trigger) {
  trigger.addEventListener("click", function (e) {
    const targetId = this.getAttribute("data-target");
    const targetSection = document.getElementById(targetId);

    sections.forEach(function (section) {
      if (section !== targetSection) {
        section.classList.add("hidden");
      } else {
        section.classList.remove("hidden");
      }
    });
  });
});
