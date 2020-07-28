//-- Exercício 01--------------------------------------------------------
  /*
    a = 10
    b = 10

    console.log(b)

    b = 5
    console.log(a, b)
  */

    //Resposta
    //será impresso primeiramente "10", e posteriormente "10 5"
//--------------------------------------------------------------------


//-- Exercício 02--------------------------------------------------------
  /*
    a = 10
    b = 20
    c = a
    b = c
    a = b

    console.log(a, b, c)
  */

    //Resposta
    //será impresso "10 10 10"
//--------------------------------------------------------------------


//-- Exercício 01 de Escrita de código------------------------------------
 // a)
    let nome

 // b)
    let idade

 // c)
    console.log(typeof(nome))
    console.log(typeof(idade))

 // d)
    /* Foi impresso o valor "undefined" nos dois casos. Isso acontece porque nenhum valor foi atribuido as variáveis. */

 // e)
    nome = prompt("Qual o seu nome?")
    idade = prompt("Qual sua idade?")

 // f)
    console.log(typeof(nome))
    console.log(typeof(idade))
    /* Foi impresso o tipo "string" para as duas variáveis. Apesar do usuário inserir um número na
    pergunta sobre a idade, a variável foi classificada como "string".
    Talvez porque o metodo de entrada "prompt" converta qualquer entrada para o tipo string. */

 // g)
    console.log("Olá",nome + ",","você tem", idade,"anos")
//--------------------------------------------------------------------


//-- Exercício 02 de Escrita de código------------------------------------
    let profissao = prompt("Qual sua profissão?")
    let endereco = prompt("Qual seu endereço?")
    let cidade = prompt("Em que cidade mora?")
    let idiomaEstangeiro = prompt("Além de seu idioma nativo, qual outro idioma conhece?")
    let possuiCarro = prompt("Possui automóvel próprio?")

    console.log("1. Qual sua profissão?", "Resposta:",profissao)
    console.log("2. Qual seu endereço?", "Resposta:",endereco)
    console.log("3. Em que cidade mora?", "Resposta:",cidade)
    console.log("4. Além de seu idioma nativo, qual outro idioma conhece?", "Resposta:",idiomaEstangeiro)
    console.log("5. Possui automóvel próprio?", "Resposta:",possuiCarro)
//--------------------------------------------------------------------


//-- Exercício 03 de Escrita de código------------------------------------
    let comidas = ["massas", "pizza", "feijoada", "hamburguer", "chocolate"]

 // a)
    console.log(comidas)

 // b)
    console.log("Essas são minhas comidas preferidas:")
    console.log(comidas[0])
    console.log(comidas[1])
    console.log(comidas[2])
    console.log(comidas[3])
    console.log(comidas[4])

 // c)
    let comidaUsuario = prompt("Qual sua comida predileta?")
    comidas[1] = comidaUsuario
    console.log(comidas)
//--------------------------------------------------------------------


//-- Exercício 04 de Escrita de código------------------------------------
    let perguntas = ["Você é brasileiro?","Você tem Netflix?","Você é Desenvolvedor Web?"]

 // a)
    let respostas = [true, false, true]

 // b)
    console.log(perguntas[0], respostas[0])
    console.log(perguntas[1], respostas[1])
    console.log(perguntas[2], respostas[2])
//--------------------------------------------------------------------
