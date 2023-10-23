// VARIABES --------------------------------------------------------------

/**
 * @var {HTLElement} inputDateNaissance 
 */
const inputDateNaissance = document.getElementById('dateNaissance');
const boutonCalculer = document.getElementById('btnCalculer');
const divResultatDate = document.getElementById('resultatDate');
const divResultatIntervalle = document.getElementById('resultatIntervalle')

// EVENEMENTS -------------------------------------------------------------

boutonCalculer.addEventListener('click', () => {
    let dateNaiss = new Date(inputDateNaissance.value);
    if (estValide(dateNaiss)) {
        divResultatDate.innerHTML = 'Vous êtes née le ';
        divResultatDate.innerHTML += dateNaiss.toLocaleDateString('fr');
        divResultatDate.innerHTML += ' à ';
        divResultatDate.innerHTML += dateNaiss.toLocaleTimeString('fr');
        divResultatIntervalle.innerHTML += " il s'est ecoulé " + intervalleDates(dateNaiss) + 'depuis votre naissance.';
        
    }
    else {
        divResultatDate.innerHTML = 'Date invalide, veuillez resaisir une date'
    }
})

// FONCTIONS --------------------------------------------------------------

/**
 * check si la date saisie est antérieure à la date présente
 * @param {Date} _date => la date à vérifier
 * @returns {boolean} => vrai date antérieur, faux si date postérieure
 */

// <= doc block => documentation de la fonction, entre paranthèses on met le type attendu

function estValide(_date) {

    if (!(_date instanceof Date)) {
        // codage en défensif <= on déclenche une erreure pour savoir si la date est bien de type date
        throw new Error("Saisie Invalide");
    }

    let datePresent = new Date();
    return datePresent > _date;
}

/**
 * calculer l'intervalle entre la date en paramètre et celle d'aujourd'hui
 * @param {Date} dateAComparer => la date à comparer
 * @return {Number} entre la date du jour et la date saisie, en années
 */

function intervalleDates(dateAComparer) {
    if (!(dateAComparer instanceof Date)) {
        throw new Error("Saisie Invalide");
    }

    let datePresent = new Date();
    let diffDates = datePresent - dateAComparer;
    return parseInt(diffDates/(1000*3600*24*365));    
    

}

// TESTS

// let maDate = new Date("2023-09-01");
// console.log(estValide(maDate));
// Test pour vérifier si la fonction estValide fonctionne

// ALGO ---------------------------------------------------------------
