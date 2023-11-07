const triggers = document.querySelectorAll(".trigger-chat");
const chatbox = document.querySelector("#supChatBox");

triggers.forEach(function (trigger) {
  trigger.addEventListener("click", function () {
    if (chatbox.classList.contains("hidden")) {
      chatbox.classList.remove("hidden");
    }
    chatbox.scrollIntoView({ behavior: "smooth", block: "end" });
  });
});
