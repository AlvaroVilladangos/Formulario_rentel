
function mostrarIban() {
    var contenedorIban = document.getElementById("contenedorIban");
    var domiciliacionBancaria = document.getElementById("domiciliacionBancaria");

    if (domiciliacionBancaria.checked) {
        contenedorIban.style.display = "block"; // Mostrar el div
    } else {
        contenedorIban.style.display = "none"; // Ocultar el div
    }
}

function validarIBAN(iban) {
    var regexIBAN = /^ES\d{22}$/;
    return regexIBAN.test(iban);
}

function validacion(){
    var domiciliacion = document.getElementById("domiciliacionBancaria");
    
    if (domiciliacion.checked){
        var iban1 = document.getElementById("primero").value;
        var iban2 = document.getElementById("segundo").value;
        var iban3 = document.getElementById("tercero").value;
        var iban4 = document.getElementById("cuarto").value;
        var iban5 = document.getElementById("quinto").value;
        var iban = iban1 + iban2 + iban3 + iban4 + iban5;
        var iban = iban.toUpperCase();
    }

}

