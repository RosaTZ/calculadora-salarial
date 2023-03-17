function input() {
  horas.innerHTML = `
       <span>Horas trabajadas:</span>
    <input type="text" id="horas_trabajadas">
    <button onclick="validacion()" id="calcular">Calcular</button>
       `;
}
function buscar() {
  if (document.getElementById("categoria").value == 1) {
    input();
    busca.remove();
  } else if (document.getElementById("categoria").value == 2) {
    input();
    busca.remove();
  } else if (document.getElementById("categoria").value == 3) {
    input();
    busca.remove();
  } else {
    alerta.innerHTML = `Debe seleccionar una categoria`;
    alerta.style.display = "block";
    setTimeout(function () {
      alerta.style.display = "none";
    }, 3000);
  }
}
let tarifas = [12000, 17000, 22000];
let categoria = document.getElementById("categoria").value - 1; // restar 1 para acceder a la posición correcta en el arreglo
let busca = document.getElementById("buscar");

function calcularHorasExtras(categoria, horasTrabajadas) {  
  let tarifa = tarifas[categoria]; 
  if (horasTrabajadas > 40) {      
    let extras = horasTrabajadas - 40;
    let horasExtra = extras;
    let totalExtras = horasExtra * tarifa;
    let porcentaje = (totalExtras / 100) * 25;      
    rta_extras.innerText = `Cuota por horas extras: $${porcentaje}`;
    let sueldoTotal = tarifa * horasTrabajadas;
    rta_total.innerText = `Total: $${sueldoTotal + porcentaje}`;
  } else {  
    rta_extras.innerText=''                              
    let sueldoTotal = tarifa * horasTrabajadas;
    rta_total.innerText = `su sueldo es de: $${sueldoTotal}`;   
  }
}   

function calcular() {
  let categoria = document.getElementById("categoria").value - 1;
  let horasTrabajadas = document.getElementById("horas_trabajadas").value;
  tarifa.innerHTML = `Valor por hora: ${tarifas[categoria]}`;
  calcularHorasExtras(categoria, horasTrabajadas);
}
function mostrarAlerta(mensaje) {
  alerta.innerHTML = mensaje;
  alerta.style.display = "block";
  let tiempo = 3; // tiempo en segundos
  let intervalo = setInterval(function() {
    tiempo--;
    if (tiempo == 0) {
      clearInterval(intervalo);
      alerta.style.display = "none";
    }
  }, 1000);
}

function validacion() {
  let horasTrabajadas = document.getElementById("horas_trabajadas").value.trim();
  if (horasTrabajadas === '') {
    mostrarAlerta("El campo está vacío");
  } else if (horasTrabajadas <= 0) {
    mostrarAlerta("El número debe ser mayor a 0");
  } else {
    calcular();
  }
}