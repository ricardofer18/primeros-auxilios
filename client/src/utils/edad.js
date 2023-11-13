export const calcularEdad = (data) => {
  const fechaNacimiento = new Date(data.fecha_nacimiento)

  const ahora = new Date()
  const diferencia = ahora - fechaNacimiento
  const edadEnAnios = Math.floor(diferencia / (365.25 * 24 * 60 * 60 * 1000))
  return edadEnAnios
}