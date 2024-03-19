require('colors');
const inquirer = require('inquirer');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {value: '1', name: "Crear tarea"},  
            {value: '2', name: "Listar tarea"},
            {value: '3', name: "Listar tareas completadas"},
            {value: '4', name: "Listar tareas pendientes"},
            {value: '5', name: "Completar tarea(s)"},
            {value: '6', name: "Borrar tarea"},
            {value: '7', name: "Salir\n"}
        ]
    }
]

const inquirerMenu = async () => {
    console.clear();
    console.log('=========================='.green);
    console.log(' Seleccione una opcion '.green);
    console.log('==========================\n'.green);

    const prompt = inquirer.createPromptModule()


    return prompt(preguntas);
}

const pausa = async() => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${ 'ENTER'.green } para continuar`
        }
    ]
    console.log('\n')
    await inquirer.prompt(question);
}

module.exports = {
    inquirerMenu,
    pausa
}