// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
  // Imprime la suma de los números del 1 al 10
  // Pista: usa un acumulador
  // Tu código:
  var numeros = [1,2,3,4,5,6,7,8,9,10];
  var suma = 0;
  numeros.forEach ((elemento) => {suma = suma + elemento;})
  return suma;
}
function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
var arreglo = [];
for (var i = 0; i<array.length; i++)
{
  if (array[i] %2 ===0){
    arreglo.push(array[i]);
  }
}
return arreglo;
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  var arreglo = [];
  for (var i = 0; i< array.length; i++)
      arreglo.push(Math.pow(array[i],2));
return arreglo;
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
 var suma = 0;
  array.forEach ((elemento) => {suma = suma + elemento;})
  return suma;
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
    var numeroDigitos= num.toString()
    var longitud = numeroDigitos.length
    return longitud;
}
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };

  