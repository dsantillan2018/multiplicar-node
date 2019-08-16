// Paquete de node para trabajar con archivos
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido de la base ${base} no es un número`);
            return;
        } else if (!Number(limite)) {
            reject(`El valor introducido del limite ${limite} no es un número`);
        }

        let data = '';

        console.log(`==============================`.green);
        console.log(`==========Tabla de ${base}==========`.green);
        console.log(`==============================`.green);

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        resolve(data);
    });
}

// Funcion para crear archivo con las tablas de multiplicar
let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        // Comprobacion si la entrada es un numero valido
        if (!Number(base)) {
            reject(`El valor introducido de la base ${base} no es un número`);
            return;
        } else if (!Number(limite)) {
            reject(`El valor introducido del limite ${limite} no es un número`);
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        // Implementacion del paquete fileSystem de node
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
}

// Para exportar archivos y funciones se lo realiza mediante module
// Primera forma
module.exports = {
    crearArchivo,
    listarTabla
}

// Segunda forma en la misma funcion declarar como
// module.export.crearArchivo = (parametros de la funcion) => { contenido de la funcion }