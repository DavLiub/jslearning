newPerson.onclick=showRegForm;
addPerson.onclick=addItem;
updateStats.onclick=showStats;
buttonUpdate.onclick=showStats;
calcStats.onclick=showStats;
//id;firstName;lastName;age
const persons = [];


function addItem() {
    const formFields = document.querySelectorAll('#regForm input');
    const existingErrorMessages = document.querySelectorAll('.error');
    existingErrorMessages.forEach(error => error.remove());


    const textID = formFields[0].value.trim();
    const textFirstName = formFields[1].value.trim();
    const textLastName = formFields[2].value.trim();
    const textBirthday = formFields[3].value;

    if(textID && textLastName && textLastName && textBirthday) {
        if(persons.findIndex((p, i) => p.id === textID) === -1) {
            let p = new Person(textID, textFirstName, textLastName, textBirthday);
            persons.push(p);
            addItemToList(p);
            console.log(p);
            console.log(p.toString());
        }
        else {
            const error = document.createElement('p');
            error.appendChild(document.createTextNode(`Person with ID ${textID} already is on the list`))
            error.classList.add('error');
            const secondElement = regForm.children[1];
            regForm.insertBefore(error, secondElement);
        }
        personId.value = '';
        firstName.value = '';
        lastName.value = '';
        age.value = '';
    }
    else {
        const error = document.createElement('p');
        error.appendChild(document.createTextNode(`All fields are required`))
        error.classList.add('error');
        const secondElement = regForm.children[1];
        regForm.insertBefore(error, secondElement);

        formFields.forEach(function (field) {
            if (!field.value.trim()) {
                field.classList.add('highlight');
            } else {
                field.classList.remove('highlight');
            }
        });
    }

}

function showStats() {
    const existingErrorMessages = document.querySelectorAll('.error');
    existingErrorMessages.forEach(error => error.remove());

    if(persons.length === 0) {
        const error = document.createElement('p');
        error.appendChild(document.createTextNode("Persons list is empty!"))
        error.classList.add('error');
        statsInfo.appendChild(error);
    }
    else {
        let stats = getStats(persons);
        while (statsInfo.firstChild) {
            statsInfo.firstChild.remove();
        }
        // Add paragraph with min age
        const minAge = document.createElement('p');
        minAge.appendChild(document.createTextNode(`Min age: ${stats[0]}`));
        // Add paragraph with min age
        const maxAge = document.createElement('p');
        maxAge.appendChild(document.createTextNode(`Max age: ${stats[1]}`));
        // Add paragraph with min age
        const avgAge = document.createElement('p');
        avgAge.appendChild(document.createTextNode(`Average age: ${stats[2]}`));
        statsInfo.append(minAge, maxAge, avgAge);
    }
}


function Person(id, firstName, lastName, birthday) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(birthday);

    this.age = function () {
        let currentDate = new Date();
        let timeDiff = currentDate - this.birthday; // difference in [ms]
        let age = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25)); // calculate age with average day count per year = 365.25;
        return age;
    }
    this.toString = function () {
        return `ID: ${this.id}, Name: ${this.firstName} ${this.lastName}, Age: ${this.age()}`;
    }
}