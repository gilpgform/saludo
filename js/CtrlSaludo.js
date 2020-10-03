/** @typedef {Object} TipoCtrlSaludo
 * @property {(nombre:string)=>Promise<string>} calculaSaludo */

 /** @interface */
 export class CtrlSaludo {
  /** @param {string} _nombre
   * @returns {Promise<string>} */
  async calculaSaludo(_nombre) {
    throw new Error("interface");
  }
}