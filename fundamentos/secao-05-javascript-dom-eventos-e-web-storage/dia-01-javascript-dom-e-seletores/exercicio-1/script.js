// Adquirindo os elementos

const body = document.querySelector("#container");
const header = document.querySelector("#header-container");
const emergencyTasks = document.querySelector(".emergency-tasks");
const noEmergencyTasks = document.querySelector(".no-emergency-tasks");
const footer = document.querySelector("#footer-container");
const titles = document.querySelectorAll("h3");

// Mudando cores de background

body.style.backgroundColor = '#F3F3F3';
header.style.backgroundColor = '#00B069';
emergencyTasks.style.backgroundColor = '#FF9F84';
noEmergencyTasks.style.backgroundColor = '#F9DB5E';
footer.style.backgroundColor = '#003533';
for (h3 of titles) {
    h3.style.backgroundColor = h3.innerText.includes('Não-Urgente') ? '#232525' :'#A500F3';
}
