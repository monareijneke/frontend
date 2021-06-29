// welkomsgroet WERKT
const jouwNaam = () => {
    let person = prompt("Vul je naam in, alsjeblieft.", "Jantje Smit");
    document.getElementById("naamInput").innerHTML =
        alert("Hey " + person + ", leuk dat je een poging waagt.");
    prompt("Geef een nummer tussen 0 en 25");
}

const afwijzing = () => {
    document.getElementById("totZiens").innerHTML =
        alert("Geen probleem! Tot de volgende keer.");
}

//getal genereren WERKT
const randomGetal = () => {
    let hetGetal = Math.round(Math.random() * 26); //0 - 25
    return hetGetal;
}

//poging doen 
const raadHetGetal = () => {
    let poging = prompt("Geef een getal tussen 0-25");
    return poging;
}

//checken en hier gaat het ergens fout, want hij geeft niets terug ook geen nieuwe poging
const checkAgainstRandom = (poging) => {
    for (poging = 0; poging < 26; poging++) {
        if (poging === hetGetal) {
            prompt("Jaaa! Je hebt het geraden, " + person + "!");
            alert("Tot Ziens!");
        } else if (poging > 26) {
            prompt("Sorry, " + poging + " valt niet binnen het kiesveld. Probeer het nog eens (en nu tussen de 0 en 25...)");
        } else if (poging != hetGetal) {
            prompt("Sorry, " + poging + " is niet goed. Probeer het nog eens");
        }
    }
}

//check random WERKT
console.log(randomGetal());


