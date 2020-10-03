import { CtrlSaludo } from "./CtrlSaludo.js";
import { ProxyCtrlSaludo } from "./ProxyCtrlSaludo.js"

export class Fabrica {
  /** @returns {CtrlSaludo} */
  get ctrlSaludo() {
    return new ProxyCtrlSaludo();
  }
}