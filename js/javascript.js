
//constante
const h2 = document.querySelector("h2");
const btnnaam = document.querySelector("#naam");
const btnachtergrond = document.querySelector("#veranderachtergrond");
const aapje = document.querySelector("#HangAapNor1");
const btnmuziek = document.getElementById("btnMuziek");
const audio = new Audio("audio/Littletricks().mp3");

let achtergrond = document.querySelector("Achtergrond");

function SpeelMuziek() {
    audio.play(); // deze tag heb ik gevonden op de site stackoverflow.com
}


let lampStatus = false

function AapAnders(){
    if (lampStatus == true){
        aapje.src = "images/opznkop_aap_normaal.png"
        lampStatus = false;
        } else {
        aapje.src = "images/rechthangend_aap_normaal.png"
        lampStatus = true;
    }
}

/*
let aftel = 10

while (aftel>0) {
    console.log(aftel);
    aftel--;
}

for (let i=10; i > 0; i--) {
    console.log(i);
}
*/

//geef eten
function eten(voedsel) {
    console.log("Ik eet nu " + voedsel);
}
eten("banaan");

//verander de naam
function naam () {
    h2.textContent = "jan";
}
/*
function achtergrond () {
    achtergrond.src = "images/achtergrond_groenbos.png";
    console.log("achtergrond"); 
}
*/

btnmuziek.addEventListener('click', SpeelMuziek);
aapje.addEventListener('click', AapAnders);
// btnachtergrond.addEventListener("click", achtergrond);
btnnaam.addEventListener("click", naam);
