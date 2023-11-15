const tabs = document.querySelector(".tabs");
const adminTab = document.querySelector(".admin");
const clientTab = document.querySelector(".client");
const adminTrigger = document.querySelector("#adminTrigger");
const clientTrigger = document.querySelector("#clientTrigger");
const clientData = document.querySelector('[data-target="client"]');
const adminData = document.querySelector('[data-target="admin"]');

tabs.addEventListener("click", function (e) {
  if (e.target === clientTrigger) {
    clientData.classList.remove("hidden");
    adminData.classList.add("hidden");
    adminTrigger.classList.remove("active");
    clientTrigger.classList.add("active");
  } else {
    adminData.classList.remove("hidden");
    clientData.classList.add("hidden");
    clientTrigger.classList.remove("active");
    adminTrigger.classList.add("active");
  }
});

const optLog = document.querySelector("#optLog");
const activity = document.querySelector("#activityTable");
const log = document.querySelector("#loginLogoutTable");

function adminTableChanger() {
  if (optLog.value === "activity") {
    activity.classList.remove("hidden");
    log.classList.add("hidden");
  } else if (optLog.value === "log") {
    log.classList.remove("hidden");
    activity.classList.add("hidden");
  }
}

const optLogClient = document.querySelector("#optLog2");
const clientActivity = document.querySelector("#clientLoginLogoutTable");
const transaction = document.querySelector("#clientTransactionTable");
function clientTableChanger() {
  if (optLogClient.value === "clientActivity") {
    clientActivity.classList.remove("hidden");
    transaction.classList.add("hidden");
  } else if (optLogClient.value === "transaction") {
    transaction.classList.remove("hidden");
    clientActivity.classList.add("hidden");
  }
}
