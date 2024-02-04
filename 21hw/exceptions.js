/*
  Деление чисел с обработкой исключений:

  Напишите функцию для деления двух чисел.
  В функции должна быть обработка исключения для случая деления на ноль.

  Сумма элементов массива с проверкой типа данных:
  Напишите функцию, которая принимает массив чисел и возвращает их сумму.
  Добавьте проверку, чтобы все элементы массива были числами.

*/

function homeWorkWithExceptions() {
    div(10, 2);
    div(0, 20);
    div(11, 0);
    div(-5, 20);

    let arr = [1,2,3];
    sumArray(arr);
    sumArray([...arr, "four", 5]);
    sumArray([...arr, 99,98,97]);

}

function sumArray(arr) {
    try {
        console.log(sumArrayIfNumbers(arr));
    } catch (e) {
        console.log(e.message);
    }
}

function sumArrayIfNumbers(arr){
    let sum = 0;
    let  flag = true;
    for(i = 0; i< arr.length; i++) {
        if(typeof arr[i] === 'number') {
            sum += arr[i];
        }
        else flag = false;
    }
    if (flag) {
        return sum;
    }
    throw new Error('Error! Еhe array contains not just numbers')

}

function div(a, b) {
    try {
        console.log(`${a}/${b} = ${divBase(a, b)}`);
    }
    catch (e) {
        console.log(e.message);
    }
}

function divBase(a, b) {
    if (b !== 0) {
        return a / b;
    }
    throw new Error("Error! Division by zero.");

}