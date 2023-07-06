const form = document.querySelector("#formNumero");
let numA = document.querySelector("#campoA");
let numB = document.querySelector("#campoB");
let formValido = false;

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let numeroA = +(numA.value);
    let numeroB = +(numB.value);

    if (numeroB > numeroA) {
        mensagemCorreto.style.display = "block";
        mensagemIncorreto.style.display = "none";
        numA.value = ''
        numB.value = ''

    } else {
        mensagemCorreto.style.display = "none";
        mensagemIncorreto.style.display = "block";
        numA.value = ''
        numB.value = ''
    }
});
