let taskList = ['Tarefa 1', 'Tarefa 2']
const task = process.argv[2]

const addTaskToList = (task) => {
    taskList.push(task)
}

addTaskToList(task)
console.log(taskList)
