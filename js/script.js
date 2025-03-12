let print = document.getElementById("print");
let input = document.getElementById("input");

function num(numero) {
    input.value += numero;
}

function del() {
    input.value = input.value.slice(0, -1);
}

function enter() {
    try {
        print.value = math.evaluate(input.value);
    } catch (e) {
        print.value = "Expressão inválida";
    }
}
