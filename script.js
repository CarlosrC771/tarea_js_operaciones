
// Mi Nombre 

var nombre = "Carlos Eduardo Ramos Condori";

document.getElementById("nombre").textContent = nombre;


// Crear 2 variables x y z 

var x = 10;
var z = 20;

document.getElementById("x").innerHTML = "El valor de x es :" + x;
document.getElementById("z").innerHTML = "El valor de z es :" + z;


// creando 4 valores y realizando sus operaciones matematicas 

var a = 5;
var b = 10;
var c = 15;
var d = 20;


var suma = a + b 
var resta = b - c 
var multi = c * d
var divis = d / a 



document.getElementById("a").innerHTML = "El valor de a es :" + a;
document.getElementById("b").innerHTML = "El valor de b es :" + b;
document.getElementById("c").innerHTML = "El valor de c es :" + c;
document.getElementById("d").innerHTML = "El valor de d es :" + d;

document.getElementById("sumar").innerHTML = "La suma de a y b es: " + suma;
document.getElementById("restar").innerHTML = "La resta de b y c es: " + resta;
document.getElementById("multiplicar").innerHTML = "La multiplicacion de c y d es: " + multi;
document.getElementById("dividir").innerHTML = "La division de d y a es: " + divis;







