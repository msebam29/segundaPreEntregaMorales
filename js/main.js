alert("Bienvenido a la calculadora de IMC y resistencia a la insulina");

class paciente {
    constructor(nombre, edad, peso, altura, glucemia, insulina, imc, resistenciaInsulina) {
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
        this.altura = altura;
        this.glucemia = glucemia;
        this.insulina = insulina;
        this.imc = imc;
        this.resistenciaInsulina = resistenciaInsulina;
    }
}
const arrayPacientes = []
let comprobacion = "";
do {
    let comprobacion = prompt("Ingrese nombre de nuevo paciente o fin para terminar").toUpperCase();
    if (comprobacion == "FIN") {
        break;
    } else {
        let nombreP = comprobacion;
        let edadP = ingresarEdad();
        let pesoP = ingresarPeso();
        let alturaP = ingresarAltura();
        let glucemiaP = ingresarGlucemia();
        let insulinaP = ingresarInsulina();
        let imc = "";
        let resistenciaInsulina = "";
        arrayPacientes.push(new paciente(nombreP, edadP, pesoP, alturaP, glucemiaP, insulinaP, imc, resistenciaInsulina));
    }
} while (comprobacion != "FIN");

for (paciente of arrayPacientes) {
    alert("Paciente: " + paciente.nombre + " Edad: " + paciente.edad + " Peso: " + paciente.peso + " Altura: " + paciente.altura + " Glucemia: " + paciente.glucemia + " Insulina: " + paciente.insulina)
}

alert("Se calculara IMC y resistencia a la insulina para cada paciente");

for (paciente of arrayPacientes) {
    let imc = (paciente.peso / paciente.altura / paciente.altura).toFixed(1);
    paciente.imc = imc;
    let imcV = ""
    if (imc < 25) {
        imcV = "Peso normal";
    }
    else if (imc >= 25 && imc < 30) { imcV = "Sobrepeso"; }
    else if (imc >= 30) { imcV = "Obesidad"; }
    paciente.imc = imc+" " +imcV;

    let resistenciaInsulina = parseFloat(paciente.glucemia * paciente.insulina / 405).toFixed(2);
    let resistenciaInsulinaV = "";
    if (resistenciaInsulina < 1.96) {
        resistenciaInsulinaV = "Sin resistencia a la insulina";
    }
    else if (resistenciaInsulina >= 1.96 && resistenciaInsulina < 3) { resistenciaInsulinaV = "Riesgo de resistencia a la insulina"; }
    else if (resistenciaInsulina >= 3) { resistenciaInsulinaV = "Resistencia a la insulina"; }
    paciente.resistenciaInsulina = resistenciaInsulina+" " +resistenciaInsulinaV;
}

for (paciente of arrayPacientes) {
    document.write("<ul><li>Paciente: " + paciente.nombre + " Edad: " + paciente.edad + " Peso: " + paciente.peso + " Altura: " + paciente.altura + " Glucemia: " + paciente.glucemia + " Insulina: " + paciente.insulina + " IMC: " + paciente.imc + " Resistencia a la insulina: " + paciente.resistenciaInsulina + "</li></ul>")
}
