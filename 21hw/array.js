/*
  Создание и расширение массива:

  Сначала создайте массив из пяти произвольных чисел.
  Затем добавьте к этому массиву еще два числа.
  После этого создайте второй массив с несколькими числами и объедините его с первым массивом.
*/

function homeWorkWithArrays() {
    let arr1 = genArrayOfInt(5);
    console.log(arr1);
    arr1 = [...arr1, 10, 20];
    console.log(arr1);

    let arr2 = genArrayOfInt(4);
    console.log(arr2);
    arr1 = [...arr1, ...arr2];
    console.log(arr1);
}

//Function to generate an array of specified length consisting by integer numbers in the range (-100:100)
function genArrayOfInt(lenth) {
    let arr = new Array();
    for (i = 0; i < lenth; i++) {
        arr[i] = randomInRange(-100, 100);
    }
    return arr;
}

// Function to generate a random integer in a specified range
function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

