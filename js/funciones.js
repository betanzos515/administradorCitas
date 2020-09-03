import Citas from './class/Citas.js';
import UI from './class/UI.js';
import { 
  inputNombreMascota,
  inputPropietario, 
  inputTelefono, 
  inputFecha, 
  inputHora, 
  inputSintomas,
  btnActualizar,
  formulario } from './selectores.js';

let editando;

//instancias de las clases
const ui = new UI();
const administrarCitas = new Citas();

//Objeto Principal
const citaObj = {
  mascota: "",
  propietario: "",
  telefono: "",
  fecha: "",
  hora: "",
  sintomas: "",
};

//Funcion de asignacion para el objeto principal
export function datosCita(e) {
  citaObj[e.target.name] = e.target.value;
}

export function nuevaCita(e) {
  e.preventDefault();
  const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;
  if (
    mascota === "" ||
    propietario === "" ||
    telefono === "" ||
    fecha === "" ||
    hora === "" ||
    sintomas === ""
  ) {
    ui.imprimirAlerta("Todos los campos son obigatorios", "error");
    return;
  }
  if (editando) {
    ui.imprimirAlerta("Editado Correctamente", "correcto");
    btnActualizar.textContent = "Crear cita";
    btnActualizar.classList.remove("btn-info");
    editando = false;
    administrarCitas.actualizar({ ...citaObj });
  } else {
    ui.imprimirAlerta("Cita generada correctamente", "correcto");
    //generar un ID unico
    citaObj.id = Date.now();
    //Se le pasa una copia del objeto citaObj
    administrarCitas.agregarCitas({ ...citaObj });
  }

  reiniciarObjeto();
  formulario.reset();

  //imprimimos las citas
  ui.imprimirCitas(administrarCitas);
}

export function reiniciarObjeto() {
  citaObj.mascota = "";
  citaObj.propietario = "";
  citaObj.telefono = "";
  citaObj.fecha = "";
  citaObj.hora = "";
  citaObj.sintomas = "";
}

export function eliminarCita(id) {
  administrarCitas.eliminarCita(id);
  ui.imprimirAlerta("La cita se elimino correctamente");
  ui.imprimirCitas(administrarCitas);
}

export function actualizarCita(cita) {
  editando = true;
  llenarObjeto(cita);

  const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;
  inputNombreMascota.value = mascota;
  inputPropietario.value = propietario;
  inputTelefono.value = telefono;
  inputFecha.value = fecha;
  inputHora.value = hora;
  inputSintomas.value = sintomas;

  btnActualizar.textContent = " Guardar Cambios";
  btnActualizar.classList.add("btn-info");
}

export function llenarObjeto(cita) {
  const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;
  citaObj.mascota = mascota;
  citaObj.propietario = propietario;
  citaObj.telefono = telefono;
  citaObj.fecha = fecha;
  citaObj.hora = hora;
  citaObj.sintomas = sintomas;
  citaObj.id = id;
}
