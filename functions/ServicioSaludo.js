
class ImplSaludo {
  async saluda(nombre) {
    if (!nombre) {
      throw new Error("Falta el nombre.");
    }
    return `Hola ${nombre}.`;
  }
}
exports.handler = async event => {
  try {
    const nombre = event.queryStringParameters.nombre;
    /** @type {import("../js/Saludo").Saludo} */
    const saludo = new ImplSaludo();
    const respuesta = await saludo.saluda(nombre);
    return {
      statusCode: 200,
      body: respuesta
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: e.message
    };
  }
}