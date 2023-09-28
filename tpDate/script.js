function afficher() {
    let dateJour = new Date();
    let annee = dateJour.getFullYear();
    let jour = dateJour.getDate();
    let mois = dateJour.getMonth() + 1;
    mois = (mois < 10) ? '0' + mois : mois;
    jour = (jour < 10) ? '0' + jour : jour;
    let chaineDate = jour + '-' + mois + '-' + annee;
    document.getElementById("madate").value = chaineDate;

}

document.querySelector("#btnDate").addEventListener("click", afficher);

/*function afficher() {
    let heuresMinutes = new Hours();
    let heure = heuresMinutes.getHours();
    let minutes = heuresMinutes.getMinutes();
    let secondes = heuresMinutes.getSeconds();
    heure = (heure < 10) ? '0' + heure : heure;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    secondes = (secondes < 10) ? '0' + secondes : secondes;
    document.getElementById("monheure").value = chaineHeure;
}

document.querySelector("#btnHeure").addEventListener("click", afficher);*/