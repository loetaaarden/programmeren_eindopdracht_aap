//CONSTANTE

//dit zijn de constante die horen bij de naam veranderen
const naam = document.querySelector("h1");
const namen = ["JAN", "MISTER NIELSON", "KEES", "SJAKIE", "KAREL", "INGMAR", "INGRID", "HANS", "PETER", "VINCENT", "GERDA", "AGNES"];
const btnnaam = document.getElementById("naam");

//dit zijn de constante die horen bij de achtergrond veranderen
const btnachtergrond = document.getElementById("veranderAchtergrond");
const achtergrondPlaatje = document.querySelector("#achtergrond");

//dit zijn de constante voor de muziek
const btnmuziek = document.getElementById("btnMuziek");
const btnStopMuziek = document.getElementById("btnStopMuziek");
const audioHein = new Audio("audio/Littletricks().mp3"); // deze muziek is van hein, die wij mochten gebruiken

//dit zijn de constante voor de aap die beweegt
const btnAap = document.getElementById("btnAap");
const aapje = document.querySelector("#HangAap");
const beweegAudio = new Audio("audio/beweeg_geluid.mp3");// deze audio heeft ingmar voor mij opgenomen en die mocht ik van hem gebruiken.

//dit zijn de constante voor de banaan
const btnBanaan = document.getElementById("btnBanaan");
const eetAudio = new Audio("audio/eet_geluid.mp3"); // deze audio heeft ingmar voor mij opgenomen en die mocht ik van hem gebruiken.

//dit zijn de constante voor het water
const btnWater = document.getElementById("btnWater");
const waterAudio = new Audio("audio/water_geluid.mp3"); // deze audio heeft ingmar voor mij opgenomen en die mocht ik van hem gebruiken.

//dit zijn de constante voor de percentages
const voedselTekst = document.getElementById("voedselProcent");
const energieTekst = document.getElementById("energieProcent");
const plezierTekst = document.getElementById("plezierProcent");

//LET

//dit zijn de lets voor de percentages
let maxVoedsel = 100;
let maxEnergie = 100;
let maxPlezier = 100;

//FUNCTIES

//speel muziek
function SpeelMuziek() {
    audioHein.play(); // deze tag heb ik voor het stukje eigen onderzoek gevonden op de site stackoverflow.com
}

//stop muziek
function StopMuziek() {
    audioHein.pause(); 
    audiocurrentTime = 0; //deze tag heb ik voor het stukje eigen onderzoek op codetogo.io gevonden
}

//verander de naam
function VeranderNaam () {
    const getal = Math.floor(Math.random() * namen.length);
    naam.textContent = "Hallo ik ben " + namen[getal] + " de aap";
}

function VoedselOmlaag() {
    if (maxVoedsel > 0) {
        maxVoedsel -= 1;
    }
    voedselTekst.textContent = maxVoedsel + "%";
}

function EnergieOmlaag() {
    if (maxEnergie > 0) {
        maxEnergie -= 1;
    }
    energieTekst.textContent = maxEnergie + "%";
}

function PlezierOmlaag() {
    if (maxPlezier > 0) {
        maxPlezier -= 1;
    }
    plezierTekst.textContent = maxPlezier + "%";
}

function VoerBanaan() {
    if (maxVoedsel < 95 && maxPlezier < 95) {
        maxVoedsel += 5;
        maxPlezier += 5;
    }
    eetAudio.play();
}

function VeranderAap () {
    if (maxEnergie < 95 && maxPlezier < 95) {
        maxEnergie += 5;
        maxPlezier += 5;
        beweegAudio.play();
        const getal = Math.floor(Math.random() * 3);
        if(getal == 0) {
        aapje.src = "./images/hangende_aap.png"
        } else if(getal == 1) {
        aapje.src = "./images/opznkop_aap.png"
        }  else{
        aapje.src = "./images/rechthangend_aap.png"
        }  
    } 
}  

function VoerWater () {
    if (maxVoedsel < 95 && maxEnergie < 95) {
        maxEnergie += 5;
        maxVoedsel += 5;
    }
    waterAudio.play()
}

function VeranderAchtergrond () {
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
btnStopMuziek.addEventListener("click", StopMuziek);
btnnaam.addEventListener("click", VeranderNaam);
btnAap.addEventListener("click", VeranderAap);
btnachtergrond.addEventListener("click", VeranderAchtergrond);
btnBanaan.addEventListener("click", VoerBanaan);
btnWater.addEventListener("click", VoerWater);

setInterval(VoedselOmlaag, 1000);
setInterval(EnergieOmlaag, 1000);
setInterval(PlezierOmlaag, 1000);