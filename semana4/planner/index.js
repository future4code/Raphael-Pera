
//---- EXERCICIO ----------------------------------------------------
// function criarTarefa() {
//     const inputText = document.getElementById("tarefa")
//     const selectDia = document.getElementById("dias-semana")
    
//     let tarefa = inputText.value
//     let dia = selectDia.value

//     const diaPlanner = document.getElementById(dia)
//     diaPlanner.innerHTML += `<p>${tarefa}</p>`
//     inputText.value = ""
// }



//---- DESAFIO ----------------------------------------------------
let dias = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"]

for (let x of dias) {
    document.getElementById(x).innerHTML += "<ul></ul>"
    document.getElementById(x).children[0].style.margin = "15px 0 0 15px"
}


function criarTarefa() {
    const inputText = document.getElementById("tarefa")
    const selectDia = document.getElementById("dias-semana")
    const selectHora = document.getElementById("horario")
    
    let tarefa = inputText.value
    let dia = selectDia.value
    let hora = selectHora.value

    if (tarefa !== "" && tarefa !== null) {
        const diaPlanner = document.getElementById(dia).children[0]
        diaPlanner.innerHTML += `<li onclick="riscarTarefa(this)">${hora}h - ${tarefa}</li>`
        inputText.value = ""
    } else {
        alert("Informe a tarefa a ser agendada")
    }
}


function riscarTarefa (elemento) {
    if (elemento.style.textDecoration === "line-through") {
        elemento.style.textDecoration = "none"
        elemento.style.color = "black"
    } else {
        elemento.style.textDecoration = "line-through"
        elemento.style.color = "gray"
    }
}


function limparTarefas() {
    const dias = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"]

    for (let x of dias) {
        document.getElementById(x).children[0].innerHTML = ""
    }
}






