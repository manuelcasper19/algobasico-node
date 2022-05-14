const fs = require('fs');
const colors = require('colors');

const crearBase = (base) => {
    let salida = '';
  
    return new Promise((resolve, reject) => {
        for (let i = 1; i <= 10; i++){
            salida +=  `${ base } x ${ i } =  ${ base * i} \n`;
           
        }
        
        fs.writeFileSync(`tabla-${ base }.txt`, salida)
        
       
        console.log(salida)
         resolve(`tabla-${ base }.txt`);

    }) 

}

const crearArchivo = async( base, listar = false, hasta = 10 ) => {
    let salida = '';
    try {
        for (let i = 1; i <= hasta; i++){
            salida +=  `${ base } x ${ i } =  ${ base * i} \n`;
           
        }
        
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida)
        
       if( listar ){
        console.log('***************************************'.green);   
        console.log(`Tabla del`.green, colors.red(base));
        console.log('***************************************'.green);
        console.log(salida.rainbow);
       }
        
         return `tabla-${ base }.txt`;
        
    } catch (error) {
        throw error;
        
    }
}

module.exports = {
    crearBase,
    crearArchivo
}