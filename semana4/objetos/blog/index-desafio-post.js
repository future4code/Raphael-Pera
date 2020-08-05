//alert(`post-inicio - length: ${sessionStorage.length}`)

//atribui a "div id=container" a uma variavel 
const postCtnr = document.getElementById("container-de-posts")


//for (let i = 1; i <= sessionStorage.length; i++) {
for (let i = sessionStorage.length; i >= 1; i--) {
    let chave = `${i}`
    //alert(`post-loop: ${i} / chave: ${chave}`)
    let objeto = JSON.parse(sessionStorage.getItem(chave))
    if (objeto !== null) {
        console.log(objeto)
        criarPostHTML(objeto)
        //alert(`post-loop-B: ${i}`)
    }
}

    //função que insere a postagem no HTML, conforme as propriedades do objeto recebido como parâmetro
    function criarPostHTML (postObj) {
        //alert("funcao")
        let data = new Date()
        let dataStr = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()} - ${data.getHours()}:${data.getMinutes()}h`

        let imgHtml = ""

    //verifica se o link informado contém uma imagem, e define o que será inserido no HTML
    if (postObj.imagem !== "" && (postObj.imagem.includes(".jpg") || postObj.imagem.includes(".png") || postObj.imagem.includes(".gif"))) {
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




