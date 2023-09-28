const listeMot = ["Cachalot", "Pétunia", "Serviette"]
let score = 0

let motUtilisateur = prompt("Entrez le mot : " + listeMot[0])

if (motUtilisateur === listeMot[0]) {
    score++
}

motUtilisateur = prompt("Entrez le mot : " + listeMot[1])

if (motUtilisateur === listeMot[1]) {
    score++
}

motUtilisateur = prompt("Entrez le mot : " + listeMot[2])

if (motUtilisateur === listeMot[2]) {
    score++
}

console.log(score);