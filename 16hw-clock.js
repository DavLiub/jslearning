setInterval(printTime,1000);
//00:00:00

//const root = document.getElementById('root');

function printTime() {
    const d = new Date();
    const h = String(d.getHours()).padStart(2, '0');
    const m = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2, '0');

    const h1 = document.createElement('h1');
    const time = document.createTextNode(`${h} : ${m} : ${s}`);
    h1.appendChild(time);
    if(root.firstElementChild && s != "00") {
        root.replaceChild(h1, root.firstElementChild)
    } else {
        root.appendChild(h1)
    }
}