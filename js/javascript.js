//CONSTANTE

//dit zijn de constante die horen bij de naam veranderen
const naam = document.querySelector("h1");
const namen = ["JAN", "MISTER NIELSON", "KEES", "SJAKIE", "KAREL", "INGMAR", "INGRID", "HANS", "PETER", "VINCENT", "GERDA", "AGNES"];
const btnnaam = document.getElementById("naam");

//dit zijn de constante die horen bij de achtergrond veranderen
const btnachtergrond = document.getElementById("veranderAchtergrond");
const achtergrondPlaatje = document.querySelector("#achtergrond");

//dit zijn de constante voor de muziek
const btnMuziek = document.getElementById("btnMuziek");
const audioHein = new Audio("audio/Littletricks().mp3"); // deze muziek is van hein, die wij mochten gebruiken

//dit zijn de constante voor de aap die beweegt
const btnAap = document.getElementById("btnAap");
const aapje = document.querySelector("#HangAap");
const beweegAudio = new Audio("audio/beweeg_geluid.mp3");// deze audio heeft ingmar voor mij opgenomen en die mocht ik van hem gebruiken.

//dit zijn de constante voor de banaan
const btnBanaan = document.getElementById("btnBanaan");
const eetAudio = new Audio("audio/eet_geluid.mp3"); // deze audio heeft ingmar voor mij opgenomen en die mocht ik van hem gebruiken.
const banaan =  document.querySelector("#banaan");

//dit zijn de constante voor het water
const btnWater = document.getElementById("btnWater");
const waterAudio = new Audio("audio/water_geluid.mp3"); // deze audio heeft ingmar voor mij opgenomen en die mocht ik van hem gebruiken.
const water =  document.querySelector("#water");

//dit zijn de constante voor de percentages
const voedselTekst = document.getElementById("voedselProcent");
const energieTekst = document.getElementById("energieProcent");
const plezierTekst = document.getElementById("plezierProcent");

//dit zijn de constante voor de jumpscare
const jumpscare = document.getElementById("jumpscare");

//dit zijn de constante voor het gameoverscherm
const gameover = document.querySelector("#gameover");
const btnReset = document.getElementById("reset");

//LET

//dit zijn de lets voor de percentages
let maxVoedsel = 100;
let maxEnergie = 100;
let maxPlezier = 100;

//deze let is voor het checken of het game over is 
let gameoverInterval = setInterval(GameOverScherm, 1000);

//deze let is voor de muziek button
let muziekStatus = false

//FUNCTIES

//speel muziek
function SpeelMuziek() {
    if (muziekStatus == true){
        btnMuziek.src = "images/muziek_aan.png"
        audioHein.play(); // deze tag heb ik voor het stukje eigen onderzoek gevonden op de site stackoverflow.com
        muziekStatus = false;
    } else {
        audioHein.pause(); 
        audioHein.currentTime = 0; //deze tag heb ik voor het stukje eigen onderzoek op codetogo.io gevonden
        muziekStatus = true;
        btnMuziek.src = "images/muziek_uit.png"
    }
}

//verander de naam
function VeranderNaam () {
    const getal = Math.floor(Math.random() * namen.length);
    naam.textContent = "Hallo ik ben " + namen[getal] + " de aap";
}

//percentages verlagen van het voedsel
function VoedselOmlaag() {
    if (maxVoedsel > 0) {
        maxVoedsel -= 1;
    }
    voedselTekst.textContent = maxVoedsel + "%";
}

//percentages verlagen van het voedsel
function EnergieOmlaag() {
    if (maxEnergie > 0) {
        maxEnergie -= 1;
    }
    energieTekst.textContent = maxEnergie + "%";
}

//percentages verlagen van het voedsel
function PlezierOmlaag() {
    if (maxPlezier > 0) {
        maxPlezier -= 1;
    }
    plezierTekst.textContent = maxPlezier + "%";
}

//percentages verhogen doordat je hem een banaan voert
function VoerBanaan() {
    if (maxVoedsel < 95 && maxPlezier < 95) {
        maxVoedsel += 5;
        maxPlezier += 5;
        banaan.classList.toggle("banaan");
        eetAudio.play();
        setTimeout(WegBanaan, 1600);
    }
}

function WegBanaan(){
    banaan.classList.toggle("banaan");
}

//percentages verhogen doordat je hem laat bewegen
function VeranderAap() {
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

//percentages verhogen doordat je hem water voert
function VoerWater() {
    if (maxVoedsel < 95 && maxEnergie < 95) {
        maxEnergie += 5;
        maxVoedsel += 5;
        waterAudio.play()
        water.classList.toggle("water");
        waterAudio.play()
        setTimeout(WegWater, 1600);
    }
}

function WegWater() {
    water.classList.toggle("water");
}

//dit is de functie voor de jumpscare
function ShowJumpscare() {
    jumpscare.classList.toggle("jumpscare"); //de jumpscare is een animatie     
}

function HideJumpscare() {
    jumpscare.classList.toggle("jumpscare");
}

//dit is de functie voor als je hebt verloren
function GameOverScherm() {
    if(maxEnergie == 0 || maxPlezier == 0 || maxVoedsel == 0) {
        aapje.src = "./images/dode_aap.png"; 
        clearInterval(gameoverInterval);
        gameover.classList.toggle("gameover");
    } 
}

//deze functie is om opnieuw te beginnen
function PlayAgain() {
    window.location.reload(); //source: https://sentry.io/answers/how-do-i-refresh-a-page-using-javascript/
}

//Verander de achtergrond
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

//SETINTERVALS
setInterval(VoedselOmlaag, 1400);
setInterval(EnergieOmlaag, 1000);
setInterval(PlezierOmlaag, 1800);

setTimeout(ShowJumpscare, 30000);
setTimeout(HideJumpscare, 30500);

//EVENTLISTNERS

//eventlistner voor muziek
btnMuziek.addEventListener('click', SpeelMuziek);

//eventlistner voor buttons links
btnnaam.addEventListener("click", VeranderNaam);
btnachtergrond.addEventListener("click", VeranderAchtergrond);

//eventlistner voor buttons rechts
btnAap.addEventListener("click", VeranderAap);
btnBanaan.addEventListener("click", VoerBanaan);
btnWater.addEventListener("click", VoerWater);

//eventlistner om opnieuw te beginnen
btnReset.addEventListener("click", PlayAgain);
