console.info("Script!");

let numtxt = document.getElementById('number');

numtxt.innerHTML = localStorage.getItem("number");

let num = numtxt.innerHTML;

function high() {
    num ++;
    localStorage.setItem("number", num);
    numtxt.innerHTML = num;
}

function down() {
    num --;
    localStorage.setItem("number", num);
    numtxt.innerHTML = num;
}

function reset() {
    num = 0;
    localStorage.setItem("number", num);
    numtxt.innerHTML = num;
}