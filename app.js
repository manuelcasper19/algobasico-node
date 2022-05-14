
const { crearArchivo } = require('./Helpers/multiplicar')
const argv = require('./config/yars');
const colors = require('colors');

//console.log(process.argv);
console.log(argv);

console.log('Yargs base :', argv.base);

//const base = 8;
// const  [, , arg3 ] = process.argv;
// const [, base = 5 ] = arg3.split('=');
// console.log(base);

crearArchivo(argv.base, argv.listar, argv.hasta)
    .then(archivo => console.log(archivo.rainbow, colors.green( 'creado') ))
    .catch(err => console.log(err))