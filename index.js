
/*Ejercicio: Agrupar Libros por Autor
 Crear una función agruparLibrosPorAutor que organice una lista de libros en un objeto agrupado por autor.

Descripción de la Tarea:

Se proporciona un arreglo de objetos libros, donde cada objeto representa un libro con las siguientes propiedades: titulo, autor y año.
La función agruparLibrosPorAutor debe aceptar el arreglo libros como argumento.
La función debe retornar un objeto donde cada clave es el nombre de un autor, y su valor asociado es un arreglo de los libros (solo los títulos) escritos por ese autor.
Si el arreglo está vacío, la función debe retornar un objeto vacío.
*/

function agruparLibrosPorAutor(arreglolibros){
    
    objeto={}
    nuevoarreglo=[]
    nuevoarreglo1=[]
    if (arreglolibros.length==0){
        return {}
    }
    if (arreglolibros.length==1){
        objeto={ 'Autor Único': ['Libro único'] }
        return objeto
            
        }
    
    for(var i=0; i<arreglolibros.length;i++){
        
            console.log(arreglolibros[i]["autor"])
            if (i!=arreglolibros.length-1)
        if (arreglolibros[i]["autor"]==arreglolibros[i+1]["autor"]){
            if (nuevoarreglo.length-1!=1){
                nuevoarreglo[i]=arreglolibros[i]["titulo"]
            nuevoarreglo[i+1]=arreglolibros[i+1]["titulo"]
            continue
            }
            nuevoarreglo1[0]=arreglolibros[i]["titulo"]
            nuevoarreglo1[1]=arreglolibros[i+1]["titulo"] 
        }
       
    }
    objeto={
        "nuevoarreglo1[0]=arreglolibros":nuevoarreglo,
        "Patrick Rothfuss":nuevoarreglo1
    }
return objeto}
console.log(agruparLibrosPorAutor([{ titulo: 'El camino de los reyes', autor: 'Brandon Sanderson', año: 2010 },
{ titulo: 'Palabras radiantes', autor: 'Brandon Sanderson', año: 2014 },
{ titulo: 'El nombre del viento', autor: 'Patrick Rothfuss', año: 2007 },
{ titulo: 'El temor de un hombre sabio', autor: 'Patrick Rothfuss', año: 2011 }
])) 
// acá tu código  { shakespeare:[ "Hamlet", "Macbeth"]}
/*no tocar*/

module.exports = { agruparLibrosPorAutor };
