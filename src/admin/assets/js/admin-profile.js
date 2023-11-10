function showPass() {
  const passInput = document.querySelector("#currentPass");
  console.log(passInput);
  if (passInput.type === "text") {
    passInput.setAttribute("type", "password");
  } else {
    passInput.setAttribute("type", "text");
  }
}

function cssFunc() {
  const thumb = document.querySelector("#switchThumb");
  const admin = document.querySelector("#adminSide");
  const employee = document.querySelector("#employeeSide");
  if (thumb.classList.contains("left-1")) {
    thumb.classList.remove("left-1");
    thumb.classList.add("right-1");
    employee.classList.add("opacity-30");
    admin.classList.remove("opacity-30");
  } else {
    thumb.classList.remove("right-1");
    thumb.classList.add("left-1");
    employee.classList.remove("opacity-30");
    admin.classList.add("opacity-30");
  }
}

function cssFuncStatus() {
  const thumb = document.querySelector("#switchStatusThumb");
  const admin = document.querySelector("#passiveSide");
  const employee = document.querySelector("#activeSide");
  if (thumb.classList.contains("left-1")) {
    thumb.classList.remove("left-1");
    thumb.classList.add("right-1");
    employee.classList.add("opacity-30");
    admin.classList.remove("opacity-30");
  } else {
    thumb.classList.remove("right-1");
    thumb.classList.add("left-1");
    employee.classList.remove("opacity-30");
    admin.classList.add("opacity-30");
  }
}

const statusContent = document.getElementById(
  "toggleSwitchStatusContainer",
).innerHTML;
const roleContent = document.getElementById("toggleSwitchContainer").innerHTML;

function unauthFunc() {
  const profileStatus = document.getElementById("toggleSwitchStatusContainer");
  const profileRole = document.getElementById("toggleSwitchContainer");
  profileStatus.innerHTML = "UNAUTHORIZED";
  profileRole.innerHTML = "UNAUTHORIZED";
  profileStatus.classList.remove("bg-white");
  profileStatus.classList.add("bg-red-400", "text-white");
  profileRole.classList.remove("bg-white");
  profileRole.classList.add("bg-red-400", "text-white");
}

function permFunc() {
  const profileStatus = document.getElementById("toggleSwitchStatusContainer");
  const profileRole = document.getElementById("toggleSwitchContainer");
  profileStatus.classList.remove("bg-red-400", "text-white");
  profileStatus.classList.add("bg-white");
  profileRole.classList.remove("bg-red-400", "text-white");
  profileRole.classList.add("bg-white");
  profileStatus.innerHTML = statusContent;
  profileRole.innerHTML = roleContent;
}

const log = document.querySelector("#detailLog");
const activity = document.querySelector("#detailActivity");
const logTrigger = document.querySelector("#detailLog-Trigger");
const activityTrigger = document.querySelector("#detailActivity-Trigger");
const home = document.querySelector("#home");

logTrigger.addEventListener("click", detailLog);
activityTrigger.addEventListener("click", detailActivity);

function detailLog() {
  home.classList.add("hidden");
  log.classList.remove("hidden");
  if (activity.classList.contains("hidden") === false) {
    activity.classList.add("hidden");
  }
}

function detailActivity() {
  home.classList.add("hidden");
  activity.classList.remove("hidden");
  if (log.classList.contains("hidden") === false) {
    log.classList.add("hidden");
  }
}
