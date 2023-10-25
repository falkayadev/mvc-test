// Konu başlığına basarak içeriklere ulaşmak
const solvedContainer = document.getElementById("solvedContainer");
const newContainer = document.getElementById("newContainer");
const currentContainer = document.getElementById("currentContainer");
const firstTopic = document.getElementById("firstTopic");
const firstCurTopic = document.getElementById("firstCurTopic");
const firstDetail = document.getElementById("firstDetail");
const firstCurDetail = document.getElementById("firstCurDetail");
const secondTopic = document.getElementById("secondTopic");
const secondCurTopic = document.getElementById("secondCurTopic");
const secondDetail = document.getElementById("secondDetail");
const secondCurDetail = document.getElementById("secondCurDetail");
const thirdTopic = document.getElementById("thirdTopic");
const thirdCurTopic = document.getElementById("thirdCurTopic");
const thirdDetail = document.getElementById("thirdDetail");
const thirdCurDetail = document.getElementById("thirdCurDetail");


solvedContainer.addEventListener("click", (e) => {
    if (e.target.id === "firstTopic") {
        firstDetail.classList.toggle("hidden");
    } else if (e.target.id === "secondTopic") {
        secondDetail.classList.toggle("hidden");
    } else if (e.target.id === "thirdTopic") {
        thirdDetail.classList.toggle("hidden");
    }
})

currentContainer.addEventListener("click", (e) => {
    if (e.target.id === "firstCurTopic") {
        firstCurDetail.classList.toggle("hidden");
    } else if (e.target.id === "secondCurTopic") {
        secondCurDetail.classList.toggle("hidden");
    } else if (e.target.id === "thirdCurTopic") {
        thirdCurDetail.classList.toggle("hidden");
    }
})


//Tablar arası gezmek
const solvedTab = document.getElementById("solved-request");
const newTab = document.getElementById("new-request");
const currentTab = document.getElementById("current-request");
function solvedSection() {
    currentTab.classList.remove("bg-yellow-400");
    currentTab.classList.add("bg-gray-400");
    newTab.classList.remove("bg-yellow-400");
    newTab.classList.add("bg-gray-400");
    solvedTab.classList.add("bg-yellow-400");
    solvedContainer.classList.remove("hidden");
    newContainer.classList.add("hidden");
    currentContainer.classList.add("hidden");
  
};

function newSection() {
    currentTab.classList.remove("bg-yellow-400");
    currentTab.classList.add("bg-gray-400");
    solvedTab.classList.remove("bg-yellow-400");
    solvedTab.classList.add("bg-gray-400");
    newTab.classList.add("bg-yellow-400");
    newContainer.classList.remove("hidden");
    solvedContainer.classList.add("hidden");
    currentContainer.classList.add("hidden");
   
};

function currentSection() {
    solvedTab.classList.remove("bg-yellow-400");
    solvedTab.classList.add("bg-gray-400");
    newTab.classList.remove("bg-yellow-400");
    newTab.classList.add("bg-gray-400");
    currentTab.classList.add("bg-yellow-400");
    currentContainer.classList.remove("hidden");
    newContainer.classList.add("hidden");
    solvedContainer.classList.add("hidden");
};

// CHATBOX TRIGGER

function chatBoxOpen() {
    const chatContainer = document.getElementById('chatContainer');
    chatContainer.classList.remove('hidden');
}

function chatBoxClose() {
    const chatContainer = document.getElementById('chatContainer');
    chatContainer.classList.add('hidden');
}


const triggers = document.querySelectorAll('.trigger');
triggers.forEach((trigger) => {
    trigger.addEventListener('click', function (event) {
        event.stopPropagation();
        chatBoxOpen();
    });
});




document.addEventListener('click', function (event) {
    const chatContainer = document.getElementById('chatContainer');
    
    if (event.target !== chatContainer) {
        // Tıklanan öğe chatContainer veya trigger değilse, chatBox'ı kapat
        chatBoxClose();
    }
});

chatContainer.addEventListener('click', function (event) {
    event.stopPropagation();
});




