const argv  = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe : 'Es la base de la multiplicación'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe : 'Hasta donde va la multiplicación'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        describe : 'Es la tabla de la multiplicación',
        default: false
    })
    .check( (argv, options)=> {
        if( isNaN(argv.b)){
            throw 'La base debe ser un número';
        }
        return true;
    })
     .argv;

     module.exports = argv;