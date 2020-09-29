export class ProxySaludo {
  async saluda(nombre) {
    const resp = await fetch("/.netlify/functions/ServicioSaludo?nombre="
      + encodeURIComponent(nombre));
    if (resp.ok) {
      return await resp.text();
    } else if (resp.status === 500) {
      throw new Error(await resp.text());
    } else {
      throw new Error(resp.statusText);
    }
  }
}