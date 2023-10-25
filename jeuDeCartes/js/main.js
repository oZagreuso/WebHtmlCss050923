const majorite = 18;
const verifierMajorite = () => {
    return new Promise((resolve, reject) => {
        if (_age >= majorite) {
            resolve('Vous êtes majeur')
        } else {
            return('Vous êtes mineur')
        }
    });
}  

const estMajeur = (_age) => {
    if (_age >= majorite) {
        return 'vous êtes majeur'
    } else {
        return 'vous êtes mineur'
    }
}

const affichageResultat(_age) => {
    if (estMajeur(_age)) {

    }
}

let resultat1 = estMajeur(17);
let resultat2 = estMajeur(18);

console.log(resultat1);
console.log(resultat2);