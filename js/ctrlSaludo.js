import { ProxySaludo } from "./ProxySaludo.js";

/** @type {HTMLFormElement} inNombre */
const forma = document["forma"];
forma.addEventListener("submit", saluda);

/** @param {Event} evt */
async function saluda(evt) {
  try {
    evt.preventDefault();
    const data = new FormData(forma);
    const nombre = data.get("nombre").toString();
    /** @type {import("../js/Saludo").Saludo} */
    const saludo = new ProxySaludo();
    const respuesta = await saludo.saluda(nombre);
    forma.saludo.value = respuesta;
  } catch (e) {
    console.log(e);
    alert(e.message);
  }
}