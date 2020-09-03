import {eliminarCita,actualizarCita} from '../funciones.js';
import {areaCitas} from '../selectores.js';
class UI {
  imprimirAlerta(mensaje, tipo) {
    const alerta = document.createElement("p");
    const elemento = document.querySelector("#contenido");
    const padre = elemento.parentNode;

    if (tipo == "error") {
      alerta.className = "alert alert-danger text-center";
    } else {
      alerta.className = "alert alert-success text-center";
    }
    alerta.innerText = mensaje;
    padre.insertBefore(alerta, elemento);
    setTimeout(() => {
      alerta.remove();
    }, 1500);
  }

  imprimirCitas({ citas }) {
    //limpiamos antes de Renderizar
    this.limpiarHTML();

    citas.forEach((cita) => {
      const {
        mascota,
        propietario,
        telefono,
        fecha,
        hora,
        sintomas,
        id,
      } = cita;
      const divCita = document.createElement("div");
      divCita.classList.add("cita", "p-3");

      //Scripting de los elementos de la cita.
      const mascotaParrafo = document.createElement("h2");
      mascotaParrafo.classList.add("card-title", "font-weight-bolder");
      mascotaParrafo.textContent = mascota;

      const propietarioP = document.createElement("p");
      propietarioP.innerHTML = `
        <span class="font-weight-bolder">Propietario: </span> ${propietario}
      `;

      const telefonoP = document.createElement("p");
      telefonoP.innerHTML = `
        <span class="font-weight-bolder">Telefono: </span> ${telefono}
      `;

      const fechaP = document.createElement("p");
      fechaP.innerHTML = `
        <span class="font-weight-bolder">Telefono: </span> ${fecha}
      `;

      const horaP = document.createElement("p");
      horaP.innerHTML = `
        <span class="font-weight-bolder">Telefono: </span> ${hora}
      `;

      const sintomasP = document.createElement("p");
      sintomasP.innerHTML = `
        <span class="font-weight-bolder">Telefono: </span> ${sintomas}
      `;

      //botones
      const btnEliminar = document.createElement("button");
      btnEliminar.classList.add("btn", "btn-danger", "mr-2");
      btnEliminar.innerHTML =
        'Eliminar <svg viewBox="0 0 20 20" fill="currentColor" class="x-circle w-6 h-6"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>';

      btnEliminar.onclick = () => eliminarCita(id);

      const btnEditar = document.createElement("button");
      btnEditar.classList.add("btn", "btn-info");
      btnEditar.innerHTML =
        'Editar <svg viewBox="0 0 20 20" fill="currentColor" class="pencil w-6 h-6"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>';

      btnEditar.onclick = () => actualizarCita(cita);

      divCita.appendChild(mascotaParrafo);
      divCita.appendChild(propietarioP);
      divCita.appendChild(telefonoP);
      divCita.appendChild(fechaP);
      divCita.appendChild(horaP);
      divCita.appendChild(sintomasP);
      divCita.appendChild(btnEliminar);
      divCita.appendChild(btnEditar);

      //agregar las citas al html
      areaCitas.appendChild(divCita);
    });
  }

  limpiarHTML() {
    while (areaCitas.firstChild) {
      areaCitas.removeChild(areaCitas.firstChild);
    }
  }
}
export default UI;