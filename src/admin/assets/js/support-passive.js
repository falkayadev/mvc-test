const requestContainer = document.querySelector("#currentContainer");
const deactivators = document.querySelectorAll(".deactivator");
const reactivators = document.querySelectorAll(".reactivator");

deactivators.forEach((deactivator) => {
  deactivator.addEventListener("click", () => {
    const targetId = deactivator.getAttribute("data-target");
    const targetContent = document.getElementById(targetId);
    if (targetContent.classList.contains("bg-yellow-400")) {
      targetContent.classList.remove("bg-yellow-400");
      targetContent.classList.add("bg-gray-600");
    } else {
      return false;
    }
  });
});

reactivators.forEach((reactivator) => {
  reactivator.addEventListener("click", () => {
    const targetId = reactivator.getAttribute("data-target");
    const targetContent = document.getElementById(targetId);
    if (targetContent.classList.contains("bg-gray-600")) {
      targetContent.classList.remove("bg-gray-600");
      targetContent.classList.add("bg-yellow-400");
    } else {
      return false;
    }
  });
});
