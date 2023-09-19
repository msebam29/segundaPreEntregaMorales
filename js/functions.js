function ingresarNombre() {
    let nombre = prompt("Ingrese nombre del paciente").toUpperCase();
    return nombre;
}
function ingresarEdad() {
    let edad = parseInt(prompt("Ingrese edad del paciente en años"));
    return edad;
}
function ingresarPeso() {
    let peso = parseInt(prompt("Ingrese peso del paciente en kilogramos"));
    return peso;
}
function ingresarAltura() {
    let altura = parseFloat(prompt("Ingrese altura del paciente en metros")).toFixed(2);
    return altura;
}
function ingresarGlucemia() {
    let glucemia = parseFloat(prompt("Ingrese glucemia del paciente en mg/dl")).toFixed(2);
    return glucemia;
}
function ingresarInsulina() {
    let insulina = parseFloat(prompt("Ingrese insulina del paciente en mUI/ml")).toFixed(2);
    return insulina;
}





