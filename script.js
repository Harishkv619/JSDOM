let textContent=document.getElementById('quote')
textContent.innerHTML= "Follow Your Dreams and Work Hard"

let infoBoxes = document.getElementsByClassName('info-box');
for (let box of infoBoxes) {
    box.style.backgroundColor = '#00FFFF'; // Example color
}

const listItems = document.querySelectorAll('ul li');
if (listItems.length >= 3) {
    listItems[2].textContent = "Third Task";
}

const footerSpan = document.querySelector('footer span');
if (footerSpan) {
    footerSpan.textContent += " - Have a great day";
}