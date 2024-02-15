//Problem -> console 10 time 10
// for (var i=0; i<10;i++){
//     setTimeout(function () {
//         console.log(i);
//     },1000)
// }

//Solution 1 -> use let
for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    },1000)
}


//Solution 2 -> use arrow function
printArrow = (i) => {
    console.log(i);
}

for (var i = 0; i < 10; i++) {
    setTimeout(printArrow(i),1000)
}

//Solution 3 -> use function
function printFunc(i)  {
    console.log(i);
}

for (var i = 0; i < 10; i++) {
    setTimeout(printFunc(i),1000)
}

//Solution 4 -> by CHAT GPT
//The immediately-invoked function expression (IIFE) is used to create a new scope for each iteration, and index is passed as a parameter
for (var i = 0; i < 10; i++) {
    (function (index) {
        setTimeout(function () {
            console.log(index);
        }, 1000);
    })(i);
}

//Solution 5 -> by extra various
for (var i=0; i<10;i++){
    let index = i;
    setTimeout(function () {
        console.log(index);
    },1000)
}
