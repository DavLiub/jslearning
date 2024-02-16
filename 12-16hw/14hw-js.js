const persons = [];
const Cesar = new Person(1, 'Julius', 'Cesar', Math.round(Math.random()*100));
persons[0] = Cesar;
persons[1] = new Person(2, 'Napoleon', 'Bonaparte', Math.round(Math.random()*100));
persons[2] = new Person(3, 'Peter', 'Romanov', Math.round(Math.random()*100));
persons[3] = new Person(4, 'Alexander', 'Suvorov', Math.round(Math.random()*100));

let inputData = prompt('Enter person data separate by ","\nExample: "1,Jhon,Smith,45"\n(or enter nothing to exit)');
while (inputData) {
    let rec = inputData.split(',');
    if (rec.length === 4) {
        let person = new Person(+(rec[0]), rec[1], rec[2], +(rec[3]));
        if (addUnicPerson(persons, person)) {
            alert(`Thank you for joining us ${person.fullName()}`);
        } else {
            alert(`Glad to see you again, ${person.fullName()}`);
        }
    } else {
        alert('Invalid input. Please enter data in the correct format.');
    }
    inputData = prompt('Enter person data separate by ","\nExample: "2,Jhon,Smith,45"\n(or enter nothing to exit)');
}

printPersons(persons);
printStats(persons);

function printPersons(persons) {
    for (let i = 0; i < persons.length; i++) {
        console.log(persons[i]);
    }
}

function printStats(persons) {
    // TODO: print min age, max age, average age
    let minAge = persons[0].age, maxAge = persons[0].age, sum = persons[0].age;

    for (let i = 1; i < persons.length; i++) {
        if(persons[i].age < minAge)
            minAge=persons[i].age;
        if(persons[i].age > maxAge)
            maxAge = persons[i].age;
        sum += persons[i].age;
    }
    let averageAge = sum/persons.length;
    console.log(`min age: ${minAge}, max age: ${maxAge}, average age: ${averageAge.toFixed(0)}`);
}

function Person(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`;
    };
}

function addUnicPerson(persons, person) {
    for (let i = 0; i < persons.length; i++) {
        if (persons[i].id === person.id) {
            return false;
        }
    }
    persons.push(person);
    return true;
}
