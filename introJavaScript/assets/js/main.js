// VARIABLES

const inputPrenom = document.getElementById('nomUtilisateur');
const inputAge = document.getElementById('ageUtilisateur'); // en querySelector const inputAge = document.querySelector("#ageUtilisateur")
const btnValider = document.getElementById('valider'); // getElementById est + performant que le querySelector
const divResultat = document.getElementById('resultat');

// EVENEMENTS

btnValider.addEventListener('click', ()=> {
    console.log('OK!!!!');
});


// FONCTIONS

function agePrenomValider() {
    let prenom = inputPrenom.value;
    let age = inputAge.value;
}




// ALGO