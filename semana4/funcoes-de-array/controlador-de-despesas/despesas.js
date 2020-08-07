let despesas = []
let ds

const cadValor = document.getElementById('cad-valor')
const cadTipo = document.getElementById('cad-tipo')
const cadDesc = document.getElementById('cad-desc')

function cadastrarDespesa () {
    let oValor = cadValor.value
    let oTipo = cadTipo.value
    let oDesc = cadDesc.value

    if (oValor === "" || oTipo === "" || oDesc === "") {
        alert("Cadastro de despesa incompleto!")
        return false
    }

    const obj = {valor: Number(oValor), tipo: oTipo, descricao: oDesc}

    despesas.push(obj)

    incluirDespesa(despesas)
}

function incluirDespesa(array) {
    const despListaTable = document.getElementById("desp-lista-table")
    despListaTable.innerHTML = ""

    let oValor, oTipo, oDesc

    for (let x of array){
        oValor = x.valor
        oTipo = x.tipo
        oDesc = x.descricao

        despListaTable.innerHTML += `<div class="desp-lista-row">`+
                                        `<div class="desp-lista-tipo">${oTipo}</div>`+
                                        `<div class="desp-lista-valor">${oValor}</div>`+
                                        `<div class="desp-lista-desc">${oDesc}</div>`+
                                    `</div>`

    }
}

// function filtrarDespesas(array) {
    
// }

const cadBtnCad = document.getElementById("cad-btn-cad")

cadBtnCad.addEventListener("click",cadastrarDespesa)


