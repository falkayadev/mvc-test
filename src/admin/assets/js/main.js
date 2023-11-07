document.querySelectorAll(".toggleStatus").forEach(function (button) {
  button.addEventListener("click", function () {
    var status = button.getAttribute("data-status");
    var confirmationBox = document.getElementById("customConfirm");
    var confirmYesButton = document.getElementById("confirmYes");
    var confirmNoButton = document.getElementById("confirmNo");
    confirmationBox.classList.remove("hidden");
    confirmYesButton.addEventListener("click", function () {
      if (status === "active") {
        button.setAttribute("data-status", "passive");
        button.textContent = "Passive";
        button.classList.remove(
          "bg-gradient-to-tl",
          "from-green-600",
          "to-lime-400",
        );
        button.classList.add(
          "bg-gradient-to-tl",
          "from-slate-600",
          "to-slate-300",
        );
      } else {
        button.setAttribute("data-status", "active");
        button.textContent = "Active";
        if (!button.classList.contains("from-green-600")) {
          button.classList.add(
            "bg-gradient-to-tl",
            "from-green-600",
            "to-lime-400",
          );
        }
      }
      confirmationBox.classList.add("hidden");
    });
    confirmNoButton.addEventListener("click", function () {
      confirmationBox.classList.add("hidden");
    });
  });
});

function banUser(userId) {
  const statusElement = document.getElementById(`status${userId}`);

  if (statusElement.classList.contains("from-slate-600")) {
    statusElement.classList.remove("from-slate-600", "to-slate-300");
  } else if (statusElement.classList.contains("from-green-600")) {
    statusElement.classList.remove("from-green-600", "to-lime-400");
  }
  statusElement.classList.add("bg-red-400", "to-gray-400");
  statusElement.textContent = "Banned";
  statusElement.setAttribute("data-status", "banned");
}
