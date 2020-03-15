//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');


const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        if (listado.length > 0) {
            for (let tarea of listado) {
                console.log('=======Por Hacer======='.green);
                console.log(tarea.descripcion);
                console.log('Estado:', tarea.completado ? 'completado' : 'pendiente');
                console.log('======================='.green);
            }
        } else {
            console.log('Listado de tareas vacio');
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado ? "Actualizado" : "No actualizado");
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado ? "Borrado" : "No borrado");
        break;
    default:
        console.log("Comando no reconocido");
}