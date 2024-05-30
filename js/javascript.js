
//constante
const h2 = document.querySelector("h2");
const btnnaam = document.getElementById("naam");
const btnachtergrond = document.getElementById("veranderAchtergrond");
const btnAap = document.getElementById("btnAap");
const aapje = document.querySelector("#HangAap");
const btnmuziek = document.getElementById("btnMuziek");
const audio = new Audio("audio/Littletricks().mp3");
const achtergrond = ["/images/achtergrond_bloessombos.png", "/images/achtergrond_donkergroenbos.png", "/images/achtergrond_groenbos.png" ];
const achtergrondPlaatje = document.querySelector("#achtergrond");
const VerschilApen = ["/images/hangende_aap", "/images/opznkop_aap", "/rechthangende_aap"];

//max lets
let Voedsel = 100;
let Energie = 100;
let Plezier = 100;

function SpeelMuziek() {
    audio.play(); // deze tag heb ik gevonden op de site stackoverflow.com
}

function veranderAap () {
    const getal = Math.floor(Math.random() * 3);
    if(getal == 0) {
        aapje.src = "./images/hangende_aap.png"
    } else if(getal == 1) {
        aapje.src = "./images/opznkop_aap.png"
    }  else{
        aapje.src = "./images/rechthangend_aap.png"
    }  
}   

//verander de naam
function naam () {
    h2.textContent = "jan";
}

function veranderAchtergrond () {
    const getal = Math.floor(Math.random() * 3);
    if(getal == 0) {
        achtergrondPlaatje.src = "./images/achtergrond_donkergroenbos.png"
    } else if(getal == 1) {
        achtergrondPlaatje.src = "./images/achtergrond_groenbos.png"
    }  else{
        achtergrondPlaatje.src = "./images/achtergrond_bloessombos.png"
    }
    
}

btnmuziek.addEventListener('click', SpeelMuziek);
btnnaam.addEventListener("click", naam);
btnAap.addEventListener("click", veranderAap);
btnachtergrond.addEventListener("click", veranderAchtergrond);
