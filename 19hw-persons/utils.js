function toggleForm() {
    let regForm = document.getElementById("regForm");
    regForm.style.visibility="hidden";
    regForm.style.order="4";

    let showButton = document.getElementById("showButton");
    showButton.innerText = (regForm.style.display === "none") ? ">" : "<";

}

function showRegForm(e)
{
    let regForm = document.getElementById("regForm");
    regForm.style.visibility="visible";
    regForm.style.order="1";

}


addItemToList = function (person) {
    const li = document.createElement('li');

    /*// Add button edit
    const buttonEdit = document.createElement('button');
    buttonEdit.appendChild(document.createTextNode('Edit'));
    buttonEdit.classList.add('edit');
    buttonEdit.onclick = editParentElement;*/

    // Add button delete
    const buttonDel = document.createElement('button');
    buttonDel.appendChild(document.createTextNode('X'));
    buttonDel.classList.add('del');
    buttonDel.onclick = removeParentElement;

//    li.append(document.createTextNode(person.toString()), buttonEdit, buttonDel);
    li.append(document.createTextNode(person.toString()), buttonDel);

    personsList.appendChild(li);
}

function removeParentElement(e) {
    elementText = e.target.parentElement.firstChild.textContent;
    e.target.parentElement.remove();
    const p = elementText.split(",")
    const id = p[0].split(" ")[1];
    index = personsList.findIndex((p, i) => p.id === id);
    personsList.splice(index,1);
}

/*
function editParentElement() {
    return 0;
}*/

function  getStats(persons) {
    let stats = [];

    const start = persons[0].age();
    stats[0] = persons.reduce((res, p) => p.age() < res ? p.age() : res, start);
    stats[1] = persons.reduce((res, p) => p.age() > res ? p.age() : res, start);
    stats[2] = persons.reduce((res, p) => p.age() + res, 0) / persons.length;
    console.log(stats);
    return stats;
}

//Limit date field
document.addEventListener('DOMContentLoaded', function() {
    const currentDate = new Date();
    const currentDateString = currentDate.toISOString().split('T')[0];
    document.getElementById('age').max = currentDateString;
});
