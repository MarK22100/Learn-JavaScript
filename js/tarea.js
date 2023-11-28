// Tarea 
/*
let arr=[];

let numero = prompt('Ingresa un numero');
let numero2= prompt('Ingresa un numero');
*/
/*
 Crear un programa que pida al usuario un número y luego muestre si es par o impar.

if(numero % 2 === 0){
    document.write('El numero '+numero+ ' es par')}
    else{
        document.write('El numero es impar ')
    }
*/ 
/*
 // Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.
if (numero > 0) {
    document.write("El numero " +numero+ " es positivo")
}
else if(numero < 0){
    document.write("El numero " +numero+ " es negativo")
}
else if(numero === 0){
    document.write("El numero " +numero+ " es 0")
}
else{
    document.write("No es un valor valido")
}
*/
/*
// Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.
arr.push(numero);
arr.push(numero2);

let mayor = Math.max(...arr);
document.write('El numero mayor es: ', mayor)
*/
/*
// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.
let contraseña = prompt('Ingresa una contraseña')
//Puedo pasar este regex con la funcion .test para que compruebe si cumple con esta exprecion
let regex = /^(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{3,10}$/
//o utilizo un string[arr] y pdio corrobarorar includes
let caracteres = ["!","%","$","%" ]
let contraCorrecta = regex.test(contraseña)

if (contraCorrecta) 
{
console.log("la contraseña tiene los valores solicitados");
}
else{
    console.log("La contraseña no tiene formato valido");
}
*/
/*
// Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).

let calificacion =  parseFloat(prompt('ingresa que calificacion obtuviste'));

if(calificacion >= 70){
console.log("Esta aprobado")
}
else{
    console.log('Esta desaprobado');
}
*/
/*
// Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.
//programa que pida una letra
let letra = prompt('ingresa UNA sola letra para saber si es consonante o es vocal');

//corrobora si cancela
if(letra===null){
    console.log('Se cancelo la operacion')
}
//si continua corrobara del string vocales si lo que se ingresa coincide con algun elemento del array
else{
//creo una lista donde esten la vocales
let vocales = ['a','e','i','o','u']
    if(letra.includes(...vocales)){
        console.log("La letra "+ letra + ' es una vocal')
    }
    else{
        console.log('La letra '+ letra +' Es una consonante');
    }
}
*/
// Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.
// programa que pida un numero del 1 al 7

let numeroDia = parseInt(prompt('Ingresa un numero del 1 al 7 para ver a que dia corresponde'))

switch (numeroDia) {
    case 1:
    numeroDia === 1;
    document.write("El dia es Lunes")
        break;

    case 2:
    numeroDia === 2
    document.write("El dia es Martes")
        break;

    case 3:
    numeroDia === 3
    document.write("El dia es Miercoles")
        break;

    case 4:
    numeroDia === 4
    document.write("El dia es Jueves")
    break;

    case 5:
    numeroDia === 5
    document.write("El dia es Viernes")
    break;

    case 6:
    numeroDia === 6
    document.write("El dia es Sabado")
    break;
    case 7
    :
    numeroDia === 7
    document.write("El dia es Domingo")
    break;

    case 8:
        numeroDia === (NaN)
        document.write("ingresado no correcto")
                    
    default:
        break;
}
// Crear un programa que pida al usuario un número y luego muestre si es primo o no.

// Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).

// Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.

// Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.

// Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.

// Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.

// Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.

// Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.

//TAREA 1 Switch

// 1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.
// 2) Crea un programa que reciba un número del 1 al 7 y muestre el día de la semana correspondiente.
// 3) Crea un programa que reciba un carácter y muestre si es una vocal o una consonante.
// 4) Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.
// 5) Crea un programa que reciba una letra y muestre si es mayúscula o minúscula.

// 6) Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).

//TAREA 2 Ciclos 

// Imprimir los números pares del 2 al 20 en la consola.
// Recorrer un string y mostrar en la consola cada letra en mayúsculas.
// Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.
// Pedir al usuario que ingrese una palabra y mostrar en la consola si la palabra es un palíndromo o no.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.
// Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.
// Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.

//TAREA 3 Arrays

// Dado un array de números, escribir una función que retorne el número más grande del array.

// Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.

// Dado un array de números, escribir una función que retorne la suma de todos los números del array.

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.

// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.

// Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra "a".

// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X. Además, cortar el array resultante para que tenga solamente los primeros 3 números.