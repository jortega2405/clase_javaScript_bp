//Hello world
//alert ('Hello world');

//comentarios de una linea

/* 
comentario 
multilinea
*/

//Variables

let mensaje;
mensaje = "Hello people";
// alert(mensaje);

mensaje = "Hi";
// alert(mensaje);

mensaje = "Jose";
// alert(mensaje);

let a = 3, b = 4, c = 5;
console.log(a + b);

let name = "Jose";
let lastname = "Ortega";

console.log("Hola",name,lastname);

//Nombrar Variables

//Camel Case
let nameOne = "Jose";
let nameTwo = "Ortega";

//underscore
let name_one = "Jose";
let name_two = "Ortega";

//Nombres no comunes
let $ = 1;
let _ = 2;
console.log($,_);

//No puedo nombrar variables
//let 1a = 2;
//let primer-nombre = 45;

//Constantes
const PI = 3.142624;
const COLOR_NEGRO = "FFFFF";

//PI = 4;
//console.log(PI);

//Tipos de datos
//Dinamicamente tipado
let n = 123;
n = "Hola Jose";
console.log(n);

//Number
let x = 123;
x = 12.456;

//Infinity, -Infinity, NaN

//Infinity =  representa el infinito matematico
//es un valor especial que es MAYOR que cualquier cosa
console.log(1/0);

//NaN= Representa un error de calculo
//Es el resultado de una operacion matematica incorrecta o indefinida 
console.log("Hola"/2);

//Cualquier operacion que tenga un Nan devuelve un NaN
console.log("Hola"/2 + 5);

//BigInt
//Valores enteros mayores que (2^53-1) o menor que -(2^53-1) 9.007.199.254.740.991

//Tipo String

let t = "a";
let texto = 'Hola';
let texto_dos = ``; //backticks para interpolacion de cadenas
let cadena = 'Jose "Ortega"';
let cadena_dos = "Jose's store";
console.log(cadena);
console.log(cadena_dos);

nombre = "Jose";
apellido = "Ortega";

console.log("Hola",nombre,apellido);
console.log(`Hola ${nombre} ${apellido}`);


// Tipo Boolean

let verdadero = true;
let falso = false;
let mayor =  4 > 5;
console.log(mayor);

//var null
//Null es un valor especial que no perteneece a ningun tipo de datos anterior.
//forma un tipo de dato propio separado que contiene solo el valor null.
 
let edad = null;
console.log(edad);

//en Js Null No significa un objetoi no existente
//es un valor especial que representa nada, vacio o desconocido

//Valor Undefined
//Calor especial que no pertenece a ningun tipo de dato anterior.
//el significado de undefined es valor no asignado.

let edad_dos;
console.log(edad_dos);