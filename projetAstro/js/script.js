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

function fonctionValNum


afficherJour();
afficherMois();
afficherAnnee();
// console.log(fonctionValNum('baba'));