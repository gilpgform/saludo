class ImplSaludo {
  async saluda(nombre) {
    if (!nombre) {
      throw new Error("Falta el nombre.");
    }
    return `Hola ${nombre}.`;
  }
}
exports.ImplSaludo = ImplSaludo;
