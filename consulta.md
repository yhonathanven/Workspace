1-
La firma de una función en JavaScript es la forma en que se identifica una función por:

su nombre
la cantidad de parámetros
y, en algunos contextos, el tipo esperado de esos parámetros y el valor de retorno.

En JavaScript, como el lenguaje es dinámico, normalmente la firma se refiere sobre todo a:

nombreFuncion(param1, param2, ...)
Ejemplo simple
function sumar(a, b) {
  return a + b;
}

La firma sería algo como:

sumar(a, b)

o informalmente:

sumar(number, number) -> number
¿Para qué sirve?

La firma ayuda a entender:

qué argumentos necesita una función
cuántos parámetros recibe
cómo debe usarse

Es muy común en:

documentación
TypeScript
APIs
entrevistas técnicas
Ejemplos
Función sin parámetros
function saludar() {
  console.log("Hola");
}

Firma:

saludar()
Función con varios parámetros
function crearUsuario(nombre, edad, activo) {
  return { nombre, edad, activo };
}

Firma:

crearUsuario(nombre, edad, activo)
Diferencia con otros lenguajes

En lenguajes como Java o C#, la firma puede incluir tipos exactos:

int sumar(int a, int b)

En JavaScript puro no existen tipos obligatorios, aunque con TypeScript sí:

function sumar(a: number, b: number): number

Firma:

sumar(number, number): number
Importante: JavaScript no soporta sobrecarga real por firma

Esto NO funciona como en Java:

function saludar(nombre) {}
function saludar(nombre, edad) {}

La segunda reemplaza a la primera.

Por eso en JS normalmente se usan:

parámetros opcionales
valores por defecto
arguments
...rest

Ejemplo:

function saludar(nombre, edad = null) {
  if (edad) {
    console.log(nombre, edad);
  } else {
    console.log(nombre);
  }
}
2
  El retorno de una función en JavaScript es el valor que la función “devuelve” después de ejecutarse.

Se usa la palabra clave:

return
Ejemplo básico
function sumar(a, b) {
  return a + b;
}

Cuando llamas la función:

let resultado = sumar(2, 3);

console.log(resultado);

La salida será:

5

Porque:

return a + b;

devuelve el valor 5.

¿Qué hace return?
1. Devuelve un valor
function obtenerNombre() {
  return "Carlos";
}
2. Termina la ejecución de la función

Todo lo que esté después de return no se ejecuta.

function ejemplo() {
  console.log("Hola");

  return;

  console.log("Nunca se ejecuta");
}
Función con retorno vs sin retorno
Con retorno
function multiplicar(a, b) {
  return a * b;
}

Puedes guardar el resultado:

let x = multiplicar(4, 5);
Sin retorno
function saludar() {
  console.log("Hola");
}

Esta función no devuelve nada.

Si haces:

let x = saludar();

console.log(x);

verás:

undefined

Porque no hubo return.

Retornar objetos, arrays o funciones
Objeto
function crearPersona() {
  return {
    nombre: "Ana",
    edad: 25
  };
}
Array
function numeros() {
  return [1, 2, 3];
}
Otra función
function saludar() {
  return function() {
    console.log("Hola");
  };
}
Resumen
return devuelve un valor desde una función.
También detiene la ejecución de la función.
Si una función no usa return, devuelve undefined.
El retorno puede ser cualquier tipo de dato:
número
texto
objeto
array
función
booleano
etc.

3
  En JavaScript, un argumento es el valor que le pasas a una función cuando la llamas.

Ejemplo básico
function saludar(nombre) {
  console.log("Hola " + nombre);
}

saludar("Carlos");

Aquí:

nombre → es un parámetro
"Carlos" → es un argumento
Diferencia entre parámetro y argumento
Parámetro

Es la variable que recibe la función.

function sumar(a, b) {

a y b son parámetros.

Argumento

Es el valor real que envías.

sumar(5, 10);

5 y 10 son argumentos.

Otro ejemplo
function multiplicar(x, y) {
  return x * y;
}

let resultado = multiplicar(4, 3);
x, y → parámetros
4, 3 → argumentos
Tipos de argumentos

Puedes pasar cualquier tipo de dato.

Número
sumar(2, 5);
Texto
saludar("Ana");
Booleano
activar(true);
Objeto
mostrarUsuario({
  nombre: "Luis"
});
Función
setTimeout(function() {
  console.log("Hola");
}, 1000);

La función anónima es un argumento.

Argumentos faltantes

Si no mandas un argumento, el parámetro vale undefined.

function saludar(nombre) {
  console.log(nombre);
}

saludar();

Resultado:

undefined
Argumentos extra

JavaScript permite enviar más argumentos de los necesarios.

function suma(a, b) {
  return a + b;
}

suma(1, 2, 3, 4);

Los extras simplemente se ignoran (a menos que uses arguments o ...rest).

Resumen
Concepto	Qué es
Parámetro	Variable definida en la función
Argumento	Valor enviado a la función

Ejemplo:

function saludar(nombre) { // parámetro
  console.log(nombre);
}

saludar("Pedro"); // argumento
