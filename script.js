const exitButton = document.querySelector(".close");
const saleDiv = document.querySelector(".top-sale");

function closeDiv() {
    saleDiv.remove();
}

exitButton.onclick = closeDiv;

const searchButton = document.querySelector(".search");
const iconList = document.querySelector(".icon-group");
const leftIconList = document.querySelector(".left-icon-group");
const rightIconList = document.querySelector(".right-icon-group");
var isSearching = false;
let intViewportWidth = window.innerWidth - 59.5;

searchButton.onclick = function() {
    if (!isSearching) {
        iconList.classList.add("searchstart");
        var p = document.createElement("input");
        p.type = "search";
        p.placeholder = "Search..."
        p.style.padding = "7px";
        p.style.margin = "0 0 0 10px";
        p.style.border = "0";
        p.style.outline = "none";
        p.style.fontFamily = "Bai Jamjuree";
        p.style.fontSize = "16px";
        p.style.left = "50px";
        p.style.width = intViewportWidth + "px";
        leftIconList.style.width = "50vw";
        leftIconList.append(p);
        rightIconList.remove();
        p.focus();
        isSearching = true;
    } else {
        p.remove();
        isSearching = false;
    }
}