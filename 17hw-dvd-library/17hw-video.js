const box = document.querySelector('#box');
const container = document.body.firstElementChild;
const size = container.offsetWidth - box.offsetWidth;
const t = setInterval(move, 10);

let horizontalPos = 20;
let verticalPos = 200;
let horizontalStep = 1;
let verticalStep = 1;
let i = 1;
let j = 1;

function move() {
    if(verticalPos <= 0) {
        i = verticalStep;
        box.style.background= "red";
    }
    if(verticalPos >= size) {
        i = -verticalStep;
        box.style.background= "green";

    }
    verticalPos += i;

    if(horizontalPos <= 0) {
        j = horizontalStep;
        box.style.background= "white";

    }
    if(horizontalPos >= size) {
        j = -horizontalStep
        box.style.background= "yellow";

    }
    horizontalPos += j;

    box.style.top = verticalPos + 'px';
    box.style.left = horizontalPos + 'px';

}
