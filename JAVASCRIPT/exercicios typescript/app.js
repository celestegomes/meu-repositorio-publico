"use strict";
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let button = document.getElementById("buttont");
function adicionarNumeros(numero1, numero2) {
    return numero1 + numero2;
}
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    if (input1 && input2) {
        console.log(adicionarNumeros(Number(input1.value)));
        Number(input2.value);
    }
});
