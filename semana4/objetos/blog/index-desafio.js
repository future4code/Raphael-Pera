//sessionStorage.clear()
//alert(`index-desafio (inicio): length: ${sessionStorage.length}`)

//atribui a "div id=container" a uma variavel 
const postCtnr = document.getElementById("container-de-posts")

//cria a array para conter todos os objetos de postagem
const postColl = []

//função que insere a postagem no HTML, conforme as propriedades do objeto recebido como parâmetro
function criarPostHTML (postObj) {
    let data = new Date()
    let dataStr = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()} - ${data.getHours()}:${data.getMinutes()}h`

    let imgHtml = ""

  //verifica se o link informado contém uma imagem, e define o que será inserido no HTML
  if (postObj.imagem !== "" && (postObj.imagem.includes(".jpg") || postObj.imagem.includes(".png"))) {
    imgHtml = `<img src="${postObj.imagem}">`
  } else {
    imgHtml = ``
  }
  //insere no HTML o conjunto de dados que formam o post
  postCtnr.innerHTML +=   `<div class="ctnr-post">`+
                              `<div class="ctnr-post-img">${imgHtml}</div>`+
                              `<div class="ctnr-post-texto">`+
                                `<div class="ctnr-post-titulo"> Titulo: ${postObj.titulo} <span class="ctnr-post-data">(${dataStr})</span></div>`+
                                `<div class="ctnr-post-autor"> Autor: ${postObj.autor}</div>`+
                                `<div class="ctnr-post-conteudo">${postObj.conteudo}</div>`+
                              `</div>`+
                          `</div>`
}

//função que apaga todos os dados do formulário
function limparForm () {
  postTitle.value = "" 
  postAutor.value = ""
  postImg.value = ""
  postContent.value = ""
}

//atribui à variáveis as divs que contém os dados inseridos no formulário
const postTitle = document.getElementById("titulo-post")
const postAutor = document.getElementById("autor-post")
const postImg = document.getElementById("img-post")
const postContent = document.getElementById("conteudo-post")


//função chamada quando o botão "Criar Post" é clicado
function incluirPost () {
  //cria objeto com suas propriedades contendo os valores inseridos no formulário
  const post = {
      titulo: postTitle.value,
      autor: postAutor.value,
      imagem: postImg.value,
      conteudo: postContent.value,
  }

  //adiciona o recém-criado objeto a array de objetos
  postColl.push(post)

  //adiciona objeto ao sessionStorage
  let chave = `${sessionStorage.length+1}`
  //alert(`index-desafio: ${chave} / length: ${sessionStorage.length}`)
  sessionStorage.setItem(chave, JSON.stringify(post))
  

  // //chama a função para inserir os dados do formulário na "lista de postagens" (HTML)
  //   criarPostHTML(post)
  
  //chama a função para limpar os dados inseridos no formulário
  limparForm()

  //alert(`index-desafio-B: ${chave} / length: ${sessionStorage.length}`)
  //abri pagina com todos os posts
  window.location.href = "index-desafio-post.html"
}



//---- DESAFIO -----------------------



