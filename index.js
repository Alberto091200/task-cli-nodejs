#!/usr/bin/env node

const args = process.argv
const command = args[2]


const fs = require('fs')
fs.readFile('./data.json', 'utf8', (err, data) => {
	if (err){
		console.error('Error al leer el archivo data.json')
		return
	}
	const task = JSON.parse(data)
	console.log(task)
})




function main() {
	switch (command) {
		case '--help':
			showHelp()
			break

		case '--version':
		case '-v':
			showVersion()
			break

		case '--gettask':
		case 'g':
			getTasks()
			break

		case '--gettaskbyid':
			case 'gid':
			getTaskById()
			break

		case '--savedata':
			case 's':
				saveData()
				break

		case '--createtask':
		case 'cr':
			createTask()
			break

		case '--updatetask':
		case 'up':
			updateTask()
			break
				
		case '--deletetask':
			case 'del':
			deleteTask()
			break

		case '--cleartask':
			case 'cl':
			clearTasks()
			break

		default:
			console.log(args)
			console.error('comando no definido')
	}
}

main()

function showHelp() {
	console.log('Uso: task <comando>')
	console.log('')
	console.log('Comandos disponibles:')
	console.log('  new <task>: Crear una nueva tarea')
	console.log('  list: Listar todas las tareas')
	console.log('  show <taskId>: Obtener una tarea por su ID')
	console.log('  update <taskId> <taskBody>: Actualizar una tarea')
	console.log('  delete <taskId>: Eliminar una tarea')
	console.log('  clear: Eliminar todas las tareas')
}

function showVersion() {
	console.log('task v1.0.0')
}

function getTasks() {
	console.log('GetTask')
}

function getTaskById(id) {
	console.log('getTaskById')
}

function saveData(newData) {
	console.log('saveData')
}

function createTask(body) {
	console.log('createTask')
}

function updateTask(id, body) {
	console.log('updateTask')
}

function deleteTask(id) {
	console.log('deleteTask')
}

function clearTasks() {
	console.log('clearTasks')
}
