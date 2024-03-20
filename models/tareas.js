require('colors');

const { leerDB } = require("../helpers/guardarArchivo");

const Tarea = require("./tarea");

class Tareas {
    _listado = {};

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        })

        return listado;
    }

    constructor() {
        this._listado = {}
    }

    borrarTarea( id = ''){
        if( this._listado[id] ){
            delete this._listado[id];
        }
    }

    cargarTareasFromArray(tareas = []) {
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        })
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {

        console.log('');
        this.listadoArr.forEach((tarea, i) => {
            const idx = `${i + 1}`.green;
            const { desc, completadoEn } = tarea;
            const estado = (completadoEn)
                ? `Completado en ${completadoEn}`.green
                : 'Pendiente'.red

            console.log(`${idx}. ${desc} :: ${estado}`)
        })
    }

    listarPendientesCompleatadas(completadas = true) {
        let arreglo = []
        if (completadas) {
            arreglo = this.listadoArr.filter(tareasCompletadas => tareasCompletadas.completadoEn)
        } else {
            arreglo = this.listadoArr.filter(tareasNoCompletadas => !tareasNoCompletadas.completadoEn)
        }

        arreglo.forEach( (tarea,i) => {
            const idx = `${i + 1}.`.green;
            const { desc, completadoEn } = tarea;
            const estado = (completadoEn)
                ? 'Completado'.green
                : 'Pendiente'.red

            console.log(`${idx} ${desc} :: ${estado}`)
        })
    }
}

module.exports = Tareas;