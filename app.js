// Llamada a archivo externo de configuracion yargs y a funcion especifica argv
const argv = require('./config/yargs').argv;
const colors = require('colors');

// Llamada a las funciones externa mediante destructuracion
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

// Hace referencia al arreglo de yargs donde se guardan los comandos ingresados
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(resp => console.log(resp))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado: ' + `${archivo}`.blue))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Coamndo no reconocido');
}