import { concatInvert } from './manejo-strings.js';
import {sumar, restar, dividir, multiplicar, pi} from './matematica.js';
import { Alumno } from './models/alumno.js';
import { copiar } from './filerw.js';
import { parsearUrl } from './url.js';
import { obtenerMoneda } from './monedita.js';
import config from "./dbconfig.js";
import sql from 'mssql';
import { getById } from './pizza.js'

console.log("Ej1:");
let string1 = "Ari";
let string2 = "Cohen";
let inverseStr = concatInvert(string1, string2);
console.log(`Strings de entrada: ${string1} ${string2}`);
console.log(`Strings inversos: ${inverseStr}`);

console.log("\nEj 2:")
console.log('1 + 7 = ' + sumar(1,7));
console.log('9 - 2 = ' + restar(9,2));
console.log('4 / 2 = ' + dividir(4,2));
console.log('6 * 6 = ' + multiplicar(6,6));
console.log('pi = ' + pi);

console.log("\nEj 3:")
let alumno1 = new Alumno(12345678, "IvozzSkills");
let alumno2 = new Alumno(47026770, "MarpeSus");
alumno1.mostrar();
alumno2.mostrar();

console.log("\nEj 4:");
console.log("Se ejecuto la funcion!");
copiar("./entrada.txt", "./salida.txt");

console.log("\nEj 5:");
let url = "http://localhost:8080/default.htm?year=2017&month=february";
console.log(parsearUrl(url));

console.log("\nEj 6:");
let url2 = 4;
console.log(parsearUrl(url2));

console.log("\nEj 7:");
let moneda, codigoPais;
codigoPais = 'AR';
moneda = obtenerMoneda(codigoPais);
console.log('La moneda de ' + codigoPais + ' es ' + moneda);

console.log("\nEj 8:");
//let pool = await sql.connect(config)
//let result = await pool.request().query("SELECT * from Pizzas");

/*console.log(result.recordsets.length)
result.recordsets[0].forEach(element => {
    console.log(element)
});*/
console.log("--------------------------------------------------------");

console.log(getById(0));