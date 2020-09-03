import { 
  inputNombreMascota,
  inputPropietario, 
  inputTelefono, 
  inputFecha, 
  inputHora, 
  inputSintomas,
  formulario } from './selectores.js';

  import { datosCita, nuevaCita } from './funciones.js'

eventListeners();

//Manejajor de Eventos
function eventListeners() {
  inputNombreMascota.addEventListener("input", datosCita);
  inputPropietario.addEventListener("input", datosCita);
  inputTelefono.addEventListener("input", datosCita);
  inputFecha.addEventListener("input", datosCita);
  inputHora.addEventListener("input", datosCita);
  inputSintomas.addEventListener("input", datosCita);
  formulario.addEventListener("submit", nuevaCita);
}



