function boutonValider() {
    let btn = document.createElement('button');
    let input = document.getElementById('age');
    btn.setAttribute('valider', input.value);
    input.parentNode.insertBefore(btn, input.nextSibling);
}

document.querySelector('#button').addEventListener('click', afficher);