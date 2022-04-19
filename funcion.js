var f1 = document.querySelectorAll(".botones1");
var f2 = document.querySelectorAll(".botones2");
var f3 = document.querySelectorAll(".botones3");
var resultado = document.getElementById("resultado");
var total = [f1, f2, f3]
var turno = "X";
var victoria = false;
var clicks = 0;

function xo(f, c) {
    if (total[f][c].textContent == "") {
        if (turno == "X") {
            total[f][c].textContent = "X";
            comprobacion("X")
            turno = "O";
        } else if (turno == "O") {
            total[f][c].textContent = "O";
            comprobacion("O")
            turno = "X";
        }
        clicks++;
    }
}

function comprobacion(simbolo) {
     //HORIZONTALES
    if (total[0][0].textContent == simbolo && total[0][1].textContent == simbolo && total[0][2].textContent == simbolo ||
        total[1][0].textContent == simbolo && total[1][1].textContent == simbolo && total[1][2].textContent == simbolo ||
        total[2][0].textContent == simbolo && total[2][1].textContent == simbolo && total[2][2].textContent == simbolo) {
        resultado.textContent = "Ganó " + simbolo + " (horizontal)";
        victoria = true;
    }
    //VERTICALES
    if (total[0][0].textContent == simbolo && total[1][0].textContent == simbolo && total[2][0].textContent == simbolo ||
        total[0][1].textContent == simbolo && total[1][1].textContent == simbolo && total[2][1].textContent == simbolo ||
        total[0][2].textContent == simbolo && total[1][2].textContent == simbolo && total[2][2].textContent == simbolo) {
        resultado.textContent = "Ganó " + simbolo + " (vertical)";
        victoria = true;
    }
    //DIAGONAL
    if (total[0][0].textContent == simbolo && total[1][1].textContent == simbolo && total[2][2].textContent == simbolo ||
        total[0][2].textContent == simbolo && total[1][1].textContent == simbolo && total[2][0].textContent == simbolo){
        resultado.textContent = "Ganó " + simbolo + " (diagonal)";
        victoria = true;
    }
    if(clicks == 8 && victoria == false){
        resultado.textContent = "EMPATE";
    }
}

function btn00() {
    xo(0, 0);
}
function btn01() {
    xo(0, 1);
}
function btn02() {
    xo(0, 2);
}
function btn10() {
    xo(1, 0);
}
function btn11() {
    xo(1, 1);
}
function btn12() {
    xo(1, 2);
}
function btn20() {
    xo(2, 0);
}
function btn21() {
    xo(2, 1);
}
function btn22() {
    xo(2, 2);
}