const arr = [9,2,4,1,5,2,9,1,2,0];
printArray(arr);
sort(arr,arr[0] > arr[1]); //Sort low to high if first element in array is greater than second (else sort high t low)
printArray(arr);
console.log(arr);
const persons = [new Person(3000, "Mary", "Smith", 18),
    new Person(4000, "Tigran", "Petrosian", 42),
    new Person(2000, "Peter", "Smith", 37),
    new Person(1000, "John", "Jackson", 27)];
printArray(persons);
sortByField(persons, "age");
printArray(persons);

function printArray (arr){
    for (let i = 0; i<arr.length; i++){
        console.log(arr[i]);
    }
    console.log("===================");
}

function sort(arr, type) {
    //Sort low to high if type is true
    type ? bubbleSort(arr, maxToEnd):bubbleSort(arr, minToEnd);
}

function sortByField(arrayOfObjects, nameField){
        arrayOfObjects.sort((a, b) => a[nameField] > b[nameField] ? 1 : -1);
}


function switchPlaces(arr, index1, index2) {
    let tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
}


function Person(id, firstName, lastName, age){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function (){
        return `${this.firstName} ${this.lastName}`;
    }
}


//* написать двумя методами сортировки и для массива чисел и
// для массива объектов
//** написать одну функцию через компоратор,
// но для двух типов(числа и объекты).

function bubbleSort(arr, method) {
    let flag = true;
    do {
        flag = method(arr);
    } while (flag);
}

function minToEnd (arr) {
    let flag = false;
    for(let tmp=0, i = 0; i < arr.length-1; i++) {
        if(arr[i] < arr[i+1]) {
            switchPlaces(arr, i, i+1);
            flag = true;
        }
    }
    return flag;
}

function maxToEnd (arr) {
    let flag = false;
    for(let tmp=0, i = 0; i < arr.length-1; i++) {
        if(arr[i] > arr[i+1]) {
            switchPlaces(arr, i, i+1);
            flag = true;
        }
    }
    return flag;
}