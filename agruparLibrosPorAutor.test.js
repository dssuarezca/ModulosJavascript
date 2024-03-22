
const { agruparLibrosPorAutor } = require('.');

describe('agruparLibrosPorAutor', () => {
    const libros = [
        { titulo: 'El camino de los reyes', autor: 'Brandon Sanderson', año: 2010 },
        { titulo: 'Palabras radiantes', autor: 'Brandon Sanderson', año: 2014 },
        { titulo: 'El nombre del viento', autor: 'Patrick Rothfuss', año: 2007 },
        { titulo: 'El temor de un hombre sabio', autor: 'Patrick Rothfuss', año: 2011 }
    ];

    test('agrupa correctamente los libros por autor', () => {
        const resultado = agruparLibrosPorAutor(libros);
        expect(Object.keys(resultado)).toEqual(['Brandon Sanderson', 'Patrick Rothfuss']);
        expect(resultado['Brandon Sanderson']).toEqual(['El camino de los reyes', 'Palabras radiantes']);
        expect(resultado['Patrick Rothfuss']).toEqual(['El nombre del viento', 'El temor de un hombre sabio']);
    });

    test('maneja correctamente un arreglo vacío', () => {
        const resultado = agruparLibrosPorAutor([]);
        expect(resultado).toEqual({});
    });

    test('incluye autores con un solo libro', () => {
        const librosConUnSoloLibro = [
            { titulo: 'Libro único', autor: 'Autor Único', año: 2020 }
        ];
        const resultado = agruparLibrosPorAutor(librosConUnSoloLibro);
        expect(resultado).toEqual({ 'Autor Único': ['Libro único'] });
    });
});
