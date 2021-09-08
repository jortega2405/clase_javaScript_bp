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

//Operador typof o funcion typeod(x), devuelve el tipo de dato de una variable

console.log(typeof undefined); //udefined
console.log(typeof 0); //number
console.log(typeof 0.5); //number
console.log(typeof "Hola"); //String
console.log(typeof NaN); //number
console.log(typeof Infinity); //number
console.log(typeof null); //object ERROR DE JS


// Conversiones de tipo de dato
//Existen dos tipos de conversiones: Explicita e implicita

//Convertir a string
valor = true;
valor = String(valor); //"true"
console.log(valor);

//Convertir a numero
//Conversiones numericas en js ocurren automaticamente en funciones
//matematicas y expresiones

console.log(typeof('6'/'2'));//number
console.log(typeof(1+'2'));//string

valor = "123";
valor = Number(valor);
console.log(Number("Hola")); //NaN

/*
TABLA CONVERSIÓN NÚMEROS
undefined -> NaN
null -> 0
true -> 1
false -> 0
string '' -> 0
string 'hola' -> NaN


//Convertir a Booleano
console.log(Boolean("Hola")); //true
​
TABLA CONVERSIÓN BOOLEANOS
undefined -> false
null -> false
string '' -> false
NaN -> false
0 -> false
'0' -> true
' ' -> true
*/

//Operaciones
resp = a +  b; //suma
resp = a -  b; // resta
resp = a /  b; // division
resp = a %  b; // mod
resp = a *  b; //producto
resp = a **  b; //potencia

//Funciones
function sumar(a, b){
    return a + b;
}
console.log(sumar(4, 5));

//Haga un algoritmo que dado un nombre y un apellido los salude

function saludo(nombre, apellido){
    return `Hola, ${nombre} ${apellido}`;
}
console.log(saludo('Jose', 'Ortega'));

//Haga una funcion que dado un numero lo eleve al cuadrado
function elevar(numero){
    return numero **2;
}
console.log(elevar(9));

//Haga una funcion que tome el valor de un producto, le aplique el 20% de descuento,
// imprima el valor del producto incial
//el valor con descuento y el valor ahorrado

function valor_descuento (v_producto){
    let desc = v_producto * 0.2;
    let v_final = v_producto - desc;

    return ` Valor inicial: ${v_producto},
    \n Valor del descuento: ${desc},
    \n Valor Final ${v_final}`;
}

console.log(valor_descuento(100));


//Comparaciones


//Al comparar valores de diferente tipos, Js primero convierte los valores a numeros
//toda comparacion con NaN es false
//el undefined y el null SON IGUALES entre si pero no a ningun valor

/*
TABLA CONVERSIÓN NÚMEROS
undefined -> NaN
null -> 0
true -> 1
false -> 0
string '' -> 0
string 'hola' -> NaN

*/

console.log( 2 > true); //true
console.log( 2 < true); //false
console.log('2' > 1); // true
console.log('Hola' > 0); // false
console.log('Hola' < 0); // false
console.log('Hola' == 0); // false
console.log(null > 0); //false
console.log(null < 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true ERROR DE JS
console.log(null == undefined); //true

//Sentencia if

if (4 < 5) console.log("If de linea");

if (4 > 5) {
    b = 5+3;
}

/*​
TABLA CONVERSIÓN BOOLEANOS
undefined -> false
null -> false
string '' -> false
NaN -> false
0 -> false
'0' -> true
' ' -> true
*/
x = 0;
if (x) {
    console.log('Entró');
}

if ('az') {
    console.log('Entro en la segunda linea')
}

//Operador ternario
let edad_tres = 45;
let resultado = edad_tres > 18 ? 30 : 20;
if (edad_tres > 18) {
    resultado = 30
} else if(edad_tres == 0){
    resultado = 0
}else{
    resultado = 28
}
console.log(resultado);


//Ciclos
let i = 1;
while (i <= 10) {
    console.log(`El valor de i es: ${i}`);
    i++;
}

console.log('*************');
i = 1;
do {
    console.log(`El valor de i es: ${i}`);
    i++
} while (i <= 10);

console.log('------------------');
//Ciclo For

for (i = 0; i <= 10; i++) {
    console.log(`El valor de i es: ${i}`);
}

//Switch
a = 2 + 2;
switch (a) {
    case 3:
        console.log('El resultado es 3')
        break;
    case 4:
        console.log('El resultado es 4')
        break;
    default:
        console.log('ninguna de las anteriores')
        break;
}

//Funciones
function saludar_tres(){
    console.log("Hola Mundo");
}

saludar_tres();

//Variable local
/*function saludar_nombre(){
    let name = "Jose"
    console.log(`Hola ${name}`);
}
console.log(`Hola ${name}`);
*/
//Variable externa
let nomb = "Jose";
function saludar_nombre(){
    console.log(`Hola ${nomb}`);
}
console.log(`Hola ${nomb}`);

//Parametros de una function
function mensaje_( de, texto){
    console.log(`${de}: ${texto}`)
}
mensaje_('Jose', 'Que tal?');
mensaje_('Jose');
mensaje_('Abbie', 'Excelente y tu?');

//Parametros Predeterminados
function mensaje_2( de, texto=''){
    console.log(`${de}: ${texto}`)
}
mensaje_2('Jose', 'Que tal?');
mensaje_2('Abbie', 'Excelente y tu?');

//Retorno en js

function sumar_dos(a, b){
    return a + b;
}
sumar_dos(1,3);

//Haga una funcion que devuelva la sumatoria de los numeros pares del 1 al x
function suma_pares(x){
    let suma = 0;
    for (i=1; i<=x; i++){
      if (!(i%2)) {
        suma += i;
      }
    }
    return suma;
  }
  console.log(suma_pares(10));

  //Expresion y Declaracion de una function

  //declarar una function
  function hola_(){
      return 'Hola Mundo';
  }

  console.log(hola_());
  console.log(hola_);
  let aux = hola_;
  console.log(aux());


  //Epresion de una funcion

  let hola_dos  = function(){
      return 'Hola Mundo dos';
  }
  console.log(hola_dos);
  console.log(hola_dos());


  //Funciones flecha
  let hola_tres = function(){
      console.log("Hola Mundo 3");
  }

 hola_tres = () => {
    console.log("Hola Mundo 3");
}

