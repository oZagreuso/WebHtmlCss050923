// -- VARIABLES --

const ageRetraite = 64;
const inputPrenom = document.getElementById('prenomUtilisateur');
const inputAge = document.getElementById('ageUtilisateur');
const btnValider = document.getElementById('valider');
const btnReset = document.getElementById('reset');
const divResultat = document.getElementById('resultat');
// Exemple querySelector : const divResultat = document.querySelector('#resultat');

// -- EVENEMENTS --

btnValider.addEventListener('click', () => {
    // console.log('ok');
    if (estValideAgePrenom()) {
        // console.log('ok');
        divResultat.innerHTML = `<p>Bonjour ${inputPrenom.value}, votre âge est de : ${inputAge.value} ans. </p>`;

        if (estMajeur()) {
            divResultat.innerHTML += '<p>Vous êtes majeur!</p>'
        }
        else {
            divResultat.innerHTML += '<p>Vous êtes mineur!</p>'

        }

        divResultat.innerHTML += '<p>' + etatRetraite() + '</p>';

    }
    else {
        divResultat.innerHTML = '<p>Compléter ou corriger le formulaire!</p>';
        // console.log('invalid');
    }
})

// -- FONCTIONS --

//  Fonction pour  vérifier si l'age et le prénom sont valides
function estValideAgePrenom() {
    let prenom = inputPrenom.value.trim();
    let age = inputAge.value;
    return (prenom.length > 0 && age > 0);
    /* if (prenom.length > 0 & age > 0) {         
        return true;
    }
    else {
        return false;
    }*/
}

// Fonction de vérification de la majorité 

function estMajeur() {
    let age = inputAge.value;
    return (age >= 18)
}

// Fonction caclcul de l'âge de la retraite

function etatRetraite() {
    let resteAnnees;
    if (inputAge.value < ageRetraite) {
        resteAnnees = ageRetraite - inputAge.value;
        return ' Il vous reste ' + resteAnnees + ' année(s) avant la retraite. Va bosser feignant!!!';
    }
    else if (inputAge.value > ageRetraite) {
        return ' Vous êtes à la retraite depuis ' + (inputAge.value - ageRetraite) + ' année(s), bientôt la fin...'
        // Ici on a calculé dans le string le nombre d'années écoulées depuis le départ en retraite 
    }
    else {
        return ' Vous prenez votre retraite cette année!!!'
    }
}

// -- ALGO --