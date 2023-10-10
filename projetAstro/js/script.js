//  fonction pour afficher le menu déroulant des jours
function afficherJour() {
    let monOption = document.createElement('option');
    monOption.value = '';
    monOption.textContent = 'Choisissez votre jour';
    document.querySelector('#jour').appendChild(monOption);
    for (let i = 1; i < 32; i++) {
        monOption = document.createElement('option');
        monOption.value = i;
        if (i < 10) {
            monOption.textContent = '0' + i;
        }
        else {
            monOption.textContent = i;
        }
        document.querySelector('#jour').options[i] = monOption;
    }
}
// fonction pour afficher le menu déroulant avec les mois de l'année
function afficherMois() {
    let monOption = document.createElement('option');
    monOption.value = '';
    monOption.textContent = 'Choisissez votre mois';
    document.querySelector('#mois').appendChild(monOption);
    let tabMois = new Array('janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre');
    for (let i = 1; i < 13; i++) {
        monOption = document.createElement('option');
        monOption.value = i;
        monOption.textContent = tabMois[i - 1];
        document.querySelector('#mois').options[i] = monOption;
    }
}

// fonction pour afficher le menu déroulant des années
function afficherAnnee() {
    let monOption = document.createElement('option');
    monOption.value = '';
    monOption.textContent = 'Choisissez votre année';
    document.querySelector('#annees').appendChild(monOption);
    const anneeDepart = 2024;
    const anneeArrivee = 1901;
    for (let i = anneeDepart; i > anneeArrivee; i--) {
        monOption = document.createElement('option');
        monOption.value = i;
        monOption.textContent = i;
        document.querySelector('#annees').appendChild(monOption);
    }
}

/*function fonctionValNum(maChaine) {
    let chaineTest = maChaine.toLowerCase();
    let valNumTab = new Array('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
    let somme = 0;
    for (i=0; i < chaineTest.length; i++){
        for (j=0; j < valNumTab.length; j++) {
            if (maChaine[i] == valNumTab[j]){
                somme = somme + (j+1);
            }
        }
    }
    return somme;
}*/

// DEFINITIONS DE FONCTIONS

function fonctionValNum(maChaine) {
    let somme = 0;
    let maChaineMaj = maChaine.toUpperCase();
    for (let i = 0; i < maChaineMaj.length; i++) {
        somme = somme + maChaineMaj.charCodeAt(i) - 64;
    }
    return somme;
}

function calculerSigne(mois) {
    let signeAstro = '';
    let tabAstro = ["Capricorne", "Verseau", "Poisson", "Belier", "Taureau", "Gémeaux", "Cancer", "Lion", "Vierge", "Balance", "Scorpion", "Sagittaire"];
    signeAstro = tabAstro[mois - 1]; // Le signe astro correspond à la case du tableau Astro à l'indice de la valeur du mois - 1

    return signeAstro;
}
// Fonction à effet de bord, fonction impure
function formOk() {
    let champsOk;   // : BOOLEEN

    let inputNom = document.getElementById('nomUtilisateur');
    let inputPrenom = document.getElementById('prenomUtilisateur');
    let inputJour = document.getElementById('jour');
    let inputMois = document.getElementById('mois');
    let inputAnnees = document.getElementById('annees');
    let inputMail = document.getElementById('email');

    if (
        inputNom.value == "" ||
        inputPrenom.value == "" ||
        inputJour.value == "" ||
        inputMois.value == "" ||
        inputAnnees.value == "" ||
        inputMail.value == ""
        ) {            

        champsOk = false;

    } else {

        champsOk = true;

    }

    return champsOk;
}

function calculerPseudo(nom, prenom, mois) {
    let pseudo = '';
    pseudo = calculerSigne(mois)+(fonctionValNum(nom) + fonctionValNum(prenom));
    return pseudo;
}

function remplirPseudo() {
    if (formOk()) {
        let inputNom = document.getElementById('nomUtilisateur');
        let inputPrenom = document.getElementById('prenomUtilisateur');
        let inputMois = document.getElementById('mois');
        let pseudo = calculerPseudo(inputNom.value, inputPrenom.value, inputMois.value)
        let inputPseudo = document.getElementById('pseudoUtilisateur');
        inputPseudo.value = pseudo;
   }
}

// TESTS

console.log(fonctionValNum("Florian"));
console.log(calculerSigne(2));
console.log(calculerPseudo('Olivier', 'Cagnetta', 2));

console.log(formOk());

// APPELS

afficherJour();
afficherMois();
afficherAnnee();


// Attachement d'écouteurs sans classes
let inputNom = document.getElementById('nomUtilisateur');
let inputPrenom = document.getElementById('prenomUtilisateur');
let inputMois = document.getElementById('mois');
let inputAnnees = document.getElementById('annees');
let inputJour = document.getElementById('jour');
let inputMail = document.getElementById('email');

inputNom.addEventListener('input', remplirPseudo);
inputPrenom.addEventListener('input', remplirPseudo);
inputMois.addEventListener('change', remplirPseudo);
inputAnnees.addEventListener('change', remplirPseudo);
inputJour.addEventListener('change', remplirPseudo);
inputMail.addEventListener('input', remplirPseudo);

// Attachement d'écouteurs avec classes
// A FAIRE !



// console.log(fonctionValNum('baba'));