const exitButton = document.querySelector(".close");
const saleDiv = document.querySelector(".top-sale");

function closeDiv() {
    saleDiv.remove();
}

exitButton.onclick = closeDiv;