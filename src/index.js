//Dependiendo de las configuraciones iniciales, habrá muchas formas de importar librerías.
import '../node_modules/jquery/dist/jquery';
import '../node_modules/popper.js/dist/popper';
import '../node_modules/bootstrap/dist/js/bootstrap';

import num from './utilities/test/my_test'
console.log(num)
/* 
En el type tendremos que colocar module en el type del <script>.
Import nos permite traer datos primitivos, variables. Podemos hacer llamados a las funcionalidades que vamos haciendo.
*/

/*
Hay dos formas generales de uso para realizar un EXPORT
    - Por DEFAULT, exportar todo un archivo, todo el conjunto que tenemos. Puedo exportar el archivo como quiero. Lo exporto como h y lo recibo como t.
    - Por NOMBRE, exporto determinadas funciones o datos que necesitamos. Debes importarlo con el nombre que lo exportaste.
*/

/*
Exportar por nombre:
Debo crear por fuera del export las constantes que voy a crear:
const test = 1
const fn = () => return 'Hello World'
export {test, fn}

Para importar:
import {test, fn}

//Otra forma: Importa todo y definimos como usarlos después.
import * as a from 'ruta-url'
a.objeto

//Tercera forma
export const test1 = () => 'Hello World'

//Por default
export defult test1
import j from 'ruta'

//Exportar clases
export default class {
    test() {return 'Hello World!'}
}

import myClass from 'pathfinding'

*/

/*
Nunca se importan los métodos privados.s
*/