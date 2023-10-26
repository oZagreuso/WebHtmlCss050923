import { DataBase } from "./DataBase.js";

const okButton = document.getElementById('btnValid');
const searchInput = document.getElementById('inputSearch');
const dataList = document.getElementById('zipList');
const myResult = document.getElementById('divResult');
const apiURL = 'https://arfp.github.io/tp/web/html-css-js/03-zipcodes/zipcodes.json';

console.log(okButton, searchInput);

let zipCodes = await DataBase.fetchJson(apiURL);

for (let zipCode of zipCodes) {    
    // Création d'une balise option
    let option = document.createElement('option');
    option.value = zipCode.codePostal;
    option.innerText = zipCode.nomCommune;
    dataList.appendChild(option);
}

    // Création d'un écouteur d'évènement
okButton.addEventListener('click', () => {
    let zipCode = searchInput.value;
    let result = zipCodes.filter(city => city.codePostal == zipCode) // <= fonction lambda
        /* equivalant fonction lambda 'filter' en ALGO :
        let result2 = [];
        for (let city of zipCodes {
            if (city.codePostal == zipCode) {
                result2.push(city);
            }
        }*/
    
        myResult.innerText = ''; // ici on vide la <div> pour éviter les répétitions du message de retour

    for (let city of result) {
        let p = document.createElement('p');
        p.innerText = `Nom de la ville : ${city.nomCommune} . Code Postal de la ville : ${city.codePostal}`;
        myResult.appendChild(p);
    }
         
})