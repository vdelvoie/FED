

//like en unlike een verhaal
var likebutton = document.querySelectorAll('.like');

for (var i = 0; i < likebutton.length; i++) {
    likebutton[i].addEventListener("click", function changeLikebutton() {
        this.classList.toggle('liked');
    });
}


// Download icoon
var downloadIcoon = document.querySelectorAll('.download');

var popUp = document.querySelector('.popup');

var downloadNotieficatie = document.querySelector('header nav ul li:nth-of-type(2) a p'); //var pakken van DOM

var downloadNummer = parseInt(downloadNotieficatie.innerText); //text in de p omzetten naar een nummer


for (i = 0; i < downloadIcoon.length; i++) {
    downloadIcoon[i].addEventListener("click", function () {
        this.classList.toggle('downloaded'); //button krijgt vinkjke
        popUp.classList.toggle('popup-clicked'); //even popup tonen na de klik op button

        if (this.classList.contains('downloaded')) {
            downloadNummer++; //voeg een nummer toe aan de p
            downloadNotieficatie.textContent = downloadNummer; // zet de nieuwe nummer in de p
        } else {
            downloadNummer = downloadNummer - 1; // trek een nummer van de p af
            downloadNotieficatie.textContent = downloadNummer; // zet de nieuwe nummer in de p
        }

    });
}

// Popup wordt weggehaald
function removePopup() {
    popUp.classList.remove('popup-clicked');
}
popUp.addEventListener('click', removePopup);
