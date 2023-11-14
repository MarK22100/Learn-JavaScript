console.log('Clase string');

let texto=' Hola Marcos ';

console.log('El valor de texto es ', texto);

let longitud = texto.length;

console.log('La longitud del texto es: ', longitud);

//metodos
let mayus = texto.toUpperCase();

console.log('Resultado del metodo mayuscula es ', mayus);

let minus = texto.toLocaleLowerCase();
console.log('Resultado del metodo minusculas es ', minus);

//metodo de posicion
let posicion = texto.indexOf(' ');
console.log('Resultado del metodo de posicion es ', posicion);

//metodo de seleccion
let subCadena=texto.slice(0,4);

console.log('El resultado de subCadena es ', subCadena) ;

//metodo reemplazo
let reemplazo=texto.replace('Valentin', 'Alan');

console.log('El resultado de reemplazo es:', reemplazo);

//metodo de eliminacion de espacios en blanco al principio y al final

let sinEsp = texto.trim();
console.log('Resultado de aplicar metodo trim:', sinEsp.length)
