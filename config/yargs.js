// Importacion de paquetes instalados mediante npm

// Creacion de constante opts comun para los dos comandos creados
const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

// Creacion constante argv para configuracion de los comandos
const argv = require('yargs')
    // Configuracion del comandos de entrada yargs --nombre --ayuda --constante de configuracion
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea el archivo con las tablas de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}