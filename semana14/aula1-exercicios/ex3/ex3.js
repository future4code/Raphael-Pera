const newTask = process.argv[2]
const fs = require('fs')

if (newTask) {
    fs.appendFile('./tarefas.txt', `\r\n${newTask}`, function(err){
        if (err) throw err
        console.log('Tarefa adicionada com sucesso!')
    })
}

fs.readFile('./tarefas.txt', function(err, data){
    if (err) throw err
    console.log(`\nTAREFAS:\n\n${data.toString()}`)
})


