//---- EXERCICIO 1 ----------------------------------------------------
  /*
   let valor = 0
   for(let i = 0; i < 5; i++) {
   valor += i
   }
   console.log(valor)
  */

  //Reposta
   //Seŕa impresso no console o número 10
//---------------------------------------------------------------------



//---- EXERCICIO 2 ----------------------------------------------------
  /*
   const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
   for (let numero of lista) {
   if (numero > 18) {
         console.log(numero)
         console.log("indice:",lista.indexOf(numero))
      }
   }
  */

  //RESPOSTAS
  //a.   Serão impressas 6 linhas no console, cada uma contendo o numero 19, 21, 23, 25 e 30 respectivamente

  /*b.   Sim. É possível acessar o indice de cada "numero" utilizando 'lista.indexOf(numero)' ou então
         incluindo uma variavel ao codigo e incrementando-a a cada iteração do loop*/
//---------------------------------------------------------------------



//---- EXERCICIO 3 ----------------------------------------------------
   console.log(" ")
   console.log(`--- EXERCICIO 3 ---`)
   let arrayOriginal = [1,2,3,4,5,6,7,8,9]

  //a.
   for (num of arrayOriginal) {console.log(num)}

  //b.
   for (num of arrayOriginal) {console.log(num/10)}

  //c.
   let array2 = [] 
   for (num of arrayOriginal) {
      if (num % 2 === 0) {array2.push(num)}
   }
   console.log(array2)

  //d.
  let array3 = []
  let i = 0 
  for (num of arrayOriginal) {
     array3.push(`O elemento do índex ${i} é: ${num}`)
     i++
  }
  console.log(array3)

  //e.
   let vMin = arrayOriginal[0]
   let vMax = arrayOriginal[0]
   for (num of arrayOriginal) {
      if (num < vMin) {
         vMin = num
      } else if (num > vMax) {
         vMax = num
      } 
   }
   console.log(`Valor maximo: ${vMax} , Valor minimo: ${vMin}`)
//---------------------------------------------------------------------


//---- DESAFIO 1 ----------------------------------------------------
  /*
   const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
   let quantidadeAtual = 0
   while(quantidadeAtual < quantidadeTotal){
   let linha = ""
   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
      linha += "0"
   }
   console.log(linha)
   quantidadeAtual++
   }
  */

  //RESPOSTA
   /* 0
      00
      000
      0000
   */
//---------------------------------------------------------------------



//---- DESAFIO 2 ------------------------------------------------------
   console.log(" ")
   console.log("--- DESAFIO 2 ---")
   let numPensado = Number(prompt("Informe o número em que pensou"))
   console.log("Vamos jogar!")

   let acertou = false
   let tentativas = 1

   while (!acertou) {
      let numJogador = Number(prompt("Qual o número que estou pensando?"))
      if (numJogador === numPensado) {
         console.log("Acertou!")
         console.log(`Tentativas: ${tentativas}`)
         break
      } else if (numJogador > numPensado) {
         console.log(`Errrrrou! É menor`)
      }  else {
         console.log(`Errrrrou! É maior`)
      }
      tentativas++
   }
//---------------------------------------------------------------------


//---- DESAFIO 3 ------------------------------------------------------
   console.log(" ")
   console.log("--- DESAFIO 3 ---")
   console.log("Agora seu adversário é a Inteligência Artificial! :O")
   console.log("Vamos jogar!")

   numPensadoTemp = Math.random()
   numPensado = Math.ceil(numPensadoTemp *100)
   console.log(`[SPOILER: ${numPensadoTemp}]`)

   acertou = false
   tentativas = 1

   while (!acertou) {
      let numJogador = Number(prompt("Qual o número que estou pensando?"))
      if (numJogador === numPensado) {
         console.log("Acertou!")
         console.log(`Tentativas: ${tentativas}`)
         break
      } else if (numJogador > numPensado) {
         console.log(`Errrrrou! É menor`)
      }  else {
         console.log(`Errrrrou! É maior`)
      }
      tentativas++
   }
//---------------------------------------------------------------------