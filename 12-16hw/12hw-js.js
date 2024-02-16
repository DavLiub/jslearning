function getPass(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

goodFunc = x => console.log(`${x} is good password!`);

const badFunc = function (x) {console.log(`${x} is bad password!`);}

function goodPassword(pass, fn1, fn2){
    if(pass==null ) {
        console.log("Pass isn't number");
        return 0;
    }

    if (pass>1000) {
        return fn1(pass);
    }
    else if (pass < 0) {
        return fn2(pass);
    }
    else {
        console.log("Pass between 0 to 1000");
        return 0;
    }
}

goodPassword(0, goodFunc, badFunc);
goodPassword(-200, goodFunc, badFunc);
goodPassword(1111, goodFunc, badFunc);
goodPassword(null, goodFunc, badFunc);


console.log("================");

let res = [0, 0, 0, 0];
let N = 100;
for (let i = 0; i < N; i++)
{
    pass = getPass(-1000, 2000)
    res[goodPassword(pass, x=>x>1000 ? 1:0, x=>x<0 ? 2:0)]++;
}
console.log("================");


console.log(`There is ${res[1]} good passwords from ${N} experiences - ${((res[1]/N)*100).toFixed(1)}%`);
console.log(`There is ${res[2]} bad passwords from ${N} experiences - ${((res[2]/N)*100).toFixed(1)}%`);
console.log(`There is ${res[0]} middle passwords from ${N} experiences - ${((res[0]/N)*100).toFixed(1)}%`);

