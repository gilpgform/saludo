import { ProxySaludo } from "./ProxySaludo.js";

/** @type {HTMLFormElement} inNombre */
const forma = document.querySelector("#forma");
/** @type {HTMLInputElement} inNombre */
const inNombre = document.querySelector("#inNombre");
/** @type {HTMLOutputElement} outSaludo */
const outSaludo = document.querySelector("#inNombre");

forma.addEventListener("submit", saluda);

/** @param {Event} evt */
async function saluda(evt) {
  try {
    evt.preventDefault();
    const nombre = inNombre.value;
    /** @type {import("../js/Saludo").Saludo} */
    const saludo = new ProxySaludo();
    const respuesta = await saludo.saluda(nombre);
    outSaludo.value = respuesta;
  } catch (e) {
    console.log(e);
    alert(e.message);
  }
}