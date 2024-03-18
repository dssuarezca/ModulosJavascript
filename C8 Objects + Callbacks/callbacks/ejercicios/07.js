function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   nuevoarreglo=[]
   caracter=[]
   j=0
   for(var i=0;i<arrayOfStrings.length;i++){
      caracter=arrayOfStrings[i].split("")
      console.log(caracter)
      if (caracter[0]==="a"){
         console.log(nuevoarreglo[j]=arrayOfStrings[i])
         console.log(nuevoarreglo[j])
         j++
      }
     }
     return nuevoarreglo
}
filter(["hola","caja","avion"])
module.exports = filter;
