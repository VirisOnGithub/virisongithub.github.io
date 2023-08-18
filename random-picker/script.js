/* FOR DEV ONLY

    This "picker" is not really a picker
    The last two people will always be in the same team

*/

j=1;

function addPerson() {
    const newPerson = document.createElement('input');
    newPerson.type = 'text';
    newPerson.classList.add('person');
    newPerson.placeholder = 'Personne ' + j;
    j++;
    document.querySelector(".personcontainer").appendChild(newPerson);
}

function removePerson() {
    const lastPerson = document.querySelector(".personcontainer").lastChild;
    lastPerson.remove();
}


/* PICKER */

function shuffleArray(array) {
    for (let i = array.length - 3; i > 0; i--) {
        const j = Math.floor(Math.random() * (i - 1) + 2);
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function pickSquads(){
    const divider = document.querySelector(".divider").value;

    const persons = document.querySelectorAll(".person");

    const personArray = Array.from(persons);

    const shuffledArray = shuffleArray(personArray);

    for (let i = 0; i < shuffledArray.length; i++) {
        const person = shuffledArray[i];
        const squad = Math.floor(i / divider) + 1;
        let persosquad = person.value + " - Équipe " + squad;

        const persondisplayer = document.createElement('p');
        document.getElementById("squad").appendChild(persondisplayer);
        persondisplayer.innerHTML = persosquad;
    }        
}