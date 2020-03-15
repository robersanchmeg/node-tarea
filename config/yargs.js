const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    demand: true,
    alias: 'c',
    type: 'boolean',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear una nueva tarea', {
        descripcion
    })
    .command('actualizar', 'Actualizar una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrado de una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}