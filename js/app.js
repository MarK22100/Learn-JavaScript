
//Esto es un comentario
//Aqui vamos a comenzar con javascript
console.log('Hola Mundo!!');

//Tipos de datos:

//String: cadenas de caracteres, se lo representa por que esta contenido entre comillas simples o dobles
//Number: todos los numeros
// Booleanos: logicos solo toman dos valores true o false

//Array: 
//Obejct:
//Empty: null, nada.

//Variables (var - let - const)

//var deprecada --> no se usa.
//crear o declarar una variable

//sintaxis:
//Inicio de Js
/*
let num1 = 10;
let num2 = 20;

let suma = num1 + num2
document.write (suma)


//https://github.com/comision80i/Javascript.git

/*
tipo de variable [nombre de la variable (camelCase | nombre-de-la-variable | nombre_de_la_variable)] = [string o number o boolean o array o object];
*/ 

let mensaje = "Esto es un mensaje"
console.log(mensaje);
document.write('<br>' + mensaje);
const token = 'token';
//console.log('let mensaje-->',mensaje);
console.log('const token-->',token);

//cambiar valor de una variable

mensaje='Esto es otro mensaje distinto'
console.log(mensaje);
document.write('<br>' + mensaje);

mensaje=50;
console.log(mensaje);
document.write('<br>' + mensaje);

let numero_1=20;
let numero_2=20;
let suma=numero_1+numero_2;
console.log(numero_1 + numero_2);

document.write('<br/>' + (numero_1 + numero_2));

document.write('<br/> El resultado de la suma es: '+suma);
// Esto es un error --> token='Otro token'; (NO SE PUEDE CAMBIAR EL VALOR DE UNA CONSTANTE);

//imprimir datos en el documento html


//document.write("Esto es un document.write");
//ALERT
alert('Hola Mundo con un ALERT');
alert('El resultado de la suma es: '+suma)
alert('<br/>' + (numero_1 + numero_2))

num_1=prompt('Ingrese primer numero');
num_2=prompt('Ingrese segundo numero');

let num1_parse = parseInt(num_1);
let num2_parse = parseInt(num_2);



//resumiendo codigo
let num_1;
let num_2;

num_1=parseInt(prompt('ingrese primer numero'));
num_2=parseInt(prompt('Ingresar segundo numero'));


let otraSuma = num_1 + num_2;

document.write(otraSuma);

//Escribir en el HMTL
document.write(mensaje)

