// VARIABLES -----------------------------------------------------

const inputPrenom = document.getElementById('prenomUtilisateur');
const inputAge = document.getElementById('ageUtilisateur'); // en querySelector const inputAge = document.querySelector("#ageUtilisateur")
const btnValider = document.getElementById('valider'); // getElementById est + performant que le querySelector
const divResultat = document.getElementById('resultat');
const ageRetraite = 64;

// console.log(inputPrenom); <= test retour valeur du prénom

// EVENEMENTS -----------------------------------------------------

btnValider.addEventListener('click', () => {
    // console.log('OK!!!!'); // <= test click OK
    if (agePrenomOk()) {
        divResultat.innerHTML = `Bonjour ${inputPrenom.value}, votre âge est de : ${inputAge.value}`; // Utilisation de chaines litérales à la place de concaténer
        // console.log('Valider est OK'); // <= on test si la fonction() agePrenomValider est valide
        if (estMajeur()) {
            divResultat.innerHTML += ' Vous êtes majeur.' // on utilise += pour concatener l'affichage de l'age et le statut "majorité"
        }
        else {
            divResultat.innerHTML += ' Vous êtes mineur.'
        }
        // on injecte l'état retraite
        divResultat.innerHTML += statutRetraite();

    }
    else {
        divResultat.innerHTML = 'Compléter le fromulaire!';
        // console.log('Valider PAS OK'); // <= on test si la fonction() agePrenomValider est invalide
    }
});

// FONCTIONS -------------------------------------------------------

function agePrenomOk() {
    // On déclare les variables via les constantes et non par getElemenById par soucis de performance
    let prenom = inputPrenom.value.trim(); // on utilise la fonction trim() pour supprimer les premiers et derniers espaces et les caractères de fin de ligne
    let age = inputAge.value;
    // Condition : utilisation de length : bonne pratique après avoir fait un trim() pour vérifier que la longueur du prénom n'est pas nulle
    if (prenom.length > 0 && age > 0) {
        return true;
    }
    else {
        return false;
    }
    // !!! On peut compacter le code de la condition : return(prenom.length != '' && age > 0);
}

function estMajeur() {
    let age = inputAge.value;
    return (age >= 18) // condition compactée
}

function statutRetraite() {
    let age = inputAge.value;
    let resteAnnees;
    if (age > ageRetraite) {
        resteAnnees = age - ageRetraite;
        return ' Vous êtes retraité depuis ' + resteAnnees + ' années.'
    }
    else if (age < ageRetraite) {
        resteAnnees = ageRetraite - age;
        return ' Il vous reste ' + resteAnnees + ' année(s) avant la retraite!' // concaténation basique
    }
    else {
        return ' Vous prenez votre retraite cette année!'
    }
}




// ALGO