import { CtrlSaludo } from "./CtrlSaludo.js";

/** @implements {CtrlSaludo} */
export class ProxyCtrlSaludo {
  /** @param {string} nombre */
  async calculaSaludo(nombre) {
    const parámetros = new URLSearchParams();
    parámetros.append("nombre", nombre);
    const resp = await fetch("/.netlify/functions/saludo?" + parámetros);
    if (resp.ok) {
      return await resp.text();
    } else if (resp.status === 500) {
      throw new Error(await resp.text());
    } else {
      throw new Error(resp.statusText);
    }
  }
}