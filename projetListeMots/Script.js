  


function afficherResultat(score, nbMotsProposes) {
    //On affiche le score de l'utilisateur
    console.log('Votre score est de ' + score + ' sur ' + nbMotsProposes)
}

function choisirPhrasesOuMots() {
    //On demande à l'utiisateur de choisir entre un mot ou une phrase, tant qu'il ne choisit pas on lui repose la question
    let choix = prompt('Veuillez choisir la liste : mots ou phrases')
    while (choix !== 'mots' && choix !== 'phrases') {
        choix = prompt('Veuillez choisir la liste : mots ou phrases')
    }
    return choix
}

function lancerBoucleDeJeu(listePropositions) {
    let score = 0
    for (let i = 0; i < listePropositions.length; i++) {
        let motUtilisateur = prompt('Entrez le mot : ' + listePropositions[i])
        if (motUtilisateur === listePropositions[i]) {
            score++
        }
    }
    return score
}

function lancerJeu(){
    let choix = choisirPhrasesOuMots()
    let score = 0
    let nbMotsProposes = 0

    if (choix === 'mots'){
        score = lancerBoucleDeJeu(listeMots)
        nbMotsProposes = listeMots.length
    } else {
        score = lancerBoucleDeJeu(listePhrases)
        nbMotsProposes = listePhrases.length
    }

    afficherResultat(score, nbMotsProposes)
}

lancerJeu();
