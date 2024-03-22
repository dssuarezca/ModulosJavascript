const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  var cont=0
  for (var property in objeto) {
    cont++
  }
  return cont
}
module.exports = contarPropiedades;
