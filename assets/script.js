const display = document.querySelector("input");

function digitar (valor) {
    //display.value = display.value + valor
    display.value = display.value += valor
}

function limpar () {
    display.value = ""
}

function calcular () {
    // eval() transforma string em algarismo javascript
    display.value = eval (display.value)
}