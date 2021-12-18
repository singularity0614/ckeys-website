const exitButton = document.querySelector(".close");
const saleDiv = document.querySelector(".top-sale");

function closeDiv() {
    saleDiv.remove();
}

exitButton.onclick = closeDiv;

const searchButton = document.querySelector(".search");
const iconList = document.querySelector(".icon-group");
const rightIconList = document.querySelector(".right-icon-group");

searchButton.onclick = function() {
    iconList.classList.add("searchstart");
    rightIconList.className += " hidden";
}