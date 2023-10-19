// VARIABLES

const inputPrenom = document.getElementById('prenomUtilisateur');
const inputAge = document.getElementById('ageUtilisateur'); // en querySelector const inputAge = document.querySelector("#ageUtilisateur")
const btnValider = document.getElementById('valider'); // getElementById est + performant que le querySelector
const divResultat = document.getElementById('resultat');

console.log(inputPrenom);

// EVENEMENTS

btnValider.addEventListener('click', () => {
    // console.log('OK!!!!'); // <= test click OK
    if(agePrenomValider()) { // <= on test si la fonction() agePrenomValider est valide
        console.log('Valider est OK');
    }
    else {
        console.log('Valider PAS OK');
    }
});


// FONCTIONS

function agePrenomValider() {
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



// ALGO