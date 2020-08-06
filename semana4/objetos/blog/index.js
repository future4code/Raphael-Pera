
//atribui a "div id=container" a uma variavel 
const postCtnr = document.getElementById("container-de-posts")

//cria a array para conter todos os objetos de postagem
const postColl = []

//função que insere a postagem no HTML, conforme as propriedades do objeto recebido como parâmetro
function criarPostHTML (postObj) {
    let data = new Date()
    let dataStr = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()} - ${data.getHours()}:${data.getMinutes()}h`
    postCtnr.innerHTML +=   `<div class="ctnr-post">`+
                                `<div class="ctnr-post-titulo"> Titulo: ${postObj.titulo} <span class="ctnr-post-data">(${dataStr})</span></div>`+
                                `<div class="ctnr-post-autor"> Autor: ${postObj.autor}</div>`+
                                `<div class="ctnr-post-conteudo">${postObj.conteudo}</div>`+
                            `</div>`
}

//função chamada quando o botão "Criar Post" é clicado
function incluirPost () {
  //atribui as divs que cntém os dados inseridos no formulário a variáveis
    const postTitle = document.getElementById("titulo-post")
    const postAutor = document.getElementById("autor-post")
    const postContent = document.getElementById("conteudo-post")
  
  //cria objeto com suas propriedades contendo os valores inseridos no formulário
    const post = {
        titulo: postTitle.value,
        autor: postAutor.value,
        conteudo: postContent.value,
    }

  //adiciona o recém-criado objeto a array de objetos
    postColl.push(post)

  //chama a função para inserir os dados do formulário na "lista de postagens" (HTML)
    criarPostHTML(post)

  //apaga todos os dados do formulário
    postTitle.value = "" 
    postAutor.value = ""
    postContent.value = ""
}

//---- DESAFIO -----------------------



