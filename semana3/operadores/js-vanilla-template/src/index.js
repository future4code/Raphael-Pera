//-- Exercicio 01 ---------------------------------------------
    /*
    const bool1 = true
    const bool2 = false
    const bool3 = !bool2

    let resultado = bool1 && bool2
    console.log("a. ", resultado)

    resultado = bool1 && bool2 && bool3
    console.log("b. ", resultado)

    resultado = !resultado && (bool1 || bool1)
    console.log("c. ", resultado)

    console.log("e. ", typeof resultado)
    */

    //Respostas
    //a.  false
    //b.  false
    //c.  true
    //e.  boolean

//-------------------------------------------------------------


//-- Exercicio 02 ------------------------------------------------
    /*
    let array
    console.log('a. ', array)

    array = null
    console.log('b. ', array)

    array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    console.log('c. ', array.length)

    let i = 0
    console.log('d. ', array[i])

    array[i+1] = 19
    console.log('e. ', array)

    const valor = array[i+6]
    console.log('f. ', valor)
    */

    //Respostas
    //a.  undefined
    //b.  null
    //c.  11
    //d.  3
    //e.  3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13
    //f.  10
//-------------------------------------------------------------


//-- Exercicio de escrita de código 01----------------------------
  //a.
    let idadeEuTemp = prompt("Informe sua idade")
    let idadeEu = Number(idadeEuTemp)

  //b.
    let idadeAmigoTemp = prompt("Informe a idade de seu melhor amigo")
    let idadeAmigo = Number(idadeAmigoTemp)
  
  //c.    
    let idadeCompara = idadeEu > idadeAmigo
    console.log("Sua idade é maior do que a do seu melhor amigo?", idadeCompara)
    
  //d.
    let idadeDif = idadeEu - idadeAmigo
    console.log(idadeDif)
//-------------------------------------------------------------


//-- Exercicio de escrita de código 02 ---------------------------
  //a.
    let numPar = Number(prompt("Insira um número par"))

  //b.
    console.log(numPar%2)

  //c.
    console.log(4%2)
    console.log(8%2)
    console.log(20%2)
    console.log(102%2)
    console.log(2048%2)
    //O resultado é sempre 0 (zero). Sempre que calculamos o resto da divisão de um número PAR por 2, o resultado será 0 (zero)

  //d.
    let numImpar = Number(prompt("Insira um número ímpar"))
    console.log(numImpar%2)

    console.log("(1 % 2) =", 1%2)
    console.log("(1049 % 2) =", 1049%2)
    console.log("(17 % 2) =", 17%2)
    console.log("(23 % 2) =", 23%2)
    console.log("(19 % 2) =", 19%2)
    console.log("(831 % 2) =", 831%2)

    //Sempre que calculamos o resto da divisão de um número IMPAR por 2, o resultado será 0 (zero)
//-------------------------------------------------------------


//-- Exercicio de escrita de código 03 ---------------------------
  //a.
    let listaDeTarefas =[]
    
  //b.
    let tarefa1 = prompt("Informe a primeira tarefa do dia")
    let tarefa2 = prompt("Informe a segunda tarefa do dia")
    let tarefa3 = prompt("Informe a terceira tarefa do dia")

    listaDeTarefas.push(tarefa1)
    listaDeTarefas.push(tarefa2)
    listaDeTarefas.push(tarefa3)

  //c.
    console.log(listaDeTarefas)

  //d.
    let tarefaFeita = Number(prompt("Informe o número da tarefa que você já concluiu (0, 1 ou 2)."))

  //e.
    listaDeTarefas.splice(tarefaFeita, 1)

  //f.
  console.log(listaDeTarefas)
//-------------------------------------------------------------


//-- Exercicio de escrita de código 04 ---------------------------
    let nome = prompt("Informe seu nome")
    let email = prompt("Informe seu e-mail")

    console.log("O e-mail", email, "foi cadastrado com sucesso. Seja bem vinda(o),", nome + "!")
//-------------------------------------------------------------


//-- Desafio 01 -----------------------------------------------------
    //(KELVIN) = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15
    //(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*9/5 + 32

    let temperaturaC
    let temperaturaF
    let temperaturaK

  //a.
    temperaturaF = 77
    temperaturaK = (temperaturaF - 32)*5/9 + 273.15
    console.log("D1-a. ",temperaturaK + "°K")

  //b.
    temperaturaC = 80
    temperaturaF = temperaturaC * 9/5 + 32
    console.log("D1-b. ", temperaturaF + "°F")

  //c.
    temperaturaC = 30
    temperaturaF = temperaturaC * 9/5 + 32
    temperaturaK = (temperaturaF - 32)*5/9 + 273.15
    console.log("D1-c. ", temperaturaF + "°F", "/", temperaturaK + "°K")

  //d.
  temperaturaC = Number(prompt("Informe a temperatura em Celsius"))
  temperaturaF = temperaturaC * 9/5 + 32
  temperaturaK = (temperaturaF - 32)*5/9 + 273.15
  console.log("D1-d. ", temperaturaF + "°F", "/", temperaturaK + "°K")
//-------------------------------------------------------------


//-- Desafio 02 -----------------------------------------------------
    //1kws = 0.5reais

  //a.
    let kwsValor = 0.5    
    //let kws = Number(prompt("Informe a quantidade de quilowatts consumida"))
    let kws = 280
    let kwsTotal = kws * kwsValor
    console.log("D2-a ","Valor a ser pago: R$" + kwsTotal)

  //b.
    let desconto = 0.15
    kwsTotal *= (1 - desconto)
    console.log("D2-b ","Valor com desconto: R$" + kwsTotal)
//-------------------------------------------------------------


//-- Desafio 02 -----------------------------------------------------

  //a.   20lb equivalem a X kg
    //1lb = 0.45359237kg
    let conversao = 0.45359237
    let pesoLb = 20
    let pesoKg = pesoLb * conversao
    console.log("20lb equivalem a", pesoKg + "kg")

  //b.   10.5oz equivalem a X kg
    //1oz = 0,028349523125kg
    conversao = 0.028349523125
    let pesoOz = 10.5
    pesoKg = pesoLb * conversao
    console.log("10.5oz equivalem a", pesoKg + "kg")

  //c.   100mi equivalem a X m
    //1mi = 1609.344m
    conversao = 1609.344
    let compMi = 100
    let compM = compMi * conversao
    console.log("100mi equivalem a", compM + "m")

  //d.   50ft equivalem a X m
    //1ft = 0.3048m
    conversao = 0.3048
    let compFt = 50
    compM = compFt * conversao
    console.log("50ft equivalem a", compM + "m")

  //e.   103.56gal equivalem a X l
    //1gal = 3.7854l
    conversao = 3.7854
    let volGal = 103.56
    let volL = volGal * conversao
    console.log("103.56gal equivalem a", volL + "L")

  //f.   450 xic equivalem a X l
    //1xic = 0.24l
    conversao = 0.24
    let volXic = 450
    volL = volXic * conversao
    console.log("450xic equivalem a", volL + "L")

  //g.
    //1gal = 3.7854l
    conversao = 3.7854
    volGal = Number(prompt("Informe a quantidade de galões que devem ser convertidas para Litros"))
    volL = volGal * conversao
    console.log(volGal + "gal","equivalem a", volL + "L")
//----------------------------------------------------------------