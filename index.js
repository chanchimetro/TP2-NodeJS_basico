import { concatInvert } from './manejo-strings.js';
import {sumar, restar, dividir, multiplicar, pi} from './matematica.js';
import { Alumno } from './models/alumno.js';
import { copiar } from './filerw.js';



console.log("Ej1:");
let string1 = "Ari";
let string2 = "Cohen";
let inverseStr = concatInvert(string1, string2);
console.log(`Strings de entrada: ${string1} ${string2}`);
console.log(`Strings inversos: ${inverseStr}`);

console.log("\nEj 2:")
console.log('1+7= ' + sumar(1,7));
console.log('9-2=' + restar(9,2));
console.log('4/2=' + dividir(4,2));
console.log('6*6=' + multiplicar(6,6));
console.log('pi=' + pi);

console.log("\nEj 3:")
let alumno1 = new Alumno(12345678, "IvozzSkills");
let alumno2 = new Alumno(47026770, "MarpeSus");
alumno1.mostrar();
alumno2.mostrar();

console.log("\nEj 4:");
copiar("./entrada.txt", "./salida.txt");