//---- EXERCICIO 1 ----------------------------------------------------
  /*
   const respostaDoUsuario = prompt("Digite o número que você quer testar")
   const numero = Number(respostaDoUsuario)

   if(numero % 2 === 0) {
   console.log("Passou no teste.")
   } else {
   console.log("Não passou no teste.")
   }
  */

  //==== RESPOSTA ====
  /*
      O código acima exibe uma caixa de texto na tela, solicitando ao usuário que digite um número para
   realizar o teste.
      O código então converte o número passado pelo usuário para o tipo "number" e o armazena na constante
   chamada "numero".
      Posteriormete verifica se o resto da divisão desse numero informado pelo usuário por 2 é igual a
   zero.
      Em caso positivo o código imprime no console a mensagem "Passou no teste". Isso ocorre sempre que 
   o usuario informar um numero par.
      Em caso negativo, ou seja, caso o valor do resto da divisão do numero do usuario por 2 seja diferente
   se zero, o código imprime no console a mensagem "Não passou no teste". Isso ocorre sempre que 
   o usuario informar um numero ímpar.
  */
//---------------------------------------------------------------------



//---- EXERCICIO 2 ----------------------------------------------------
  /*
   let fruta = prompt("Escolha uma fruta")
   let preco
   switch (fruta) {
   case "Laranja":
      preco = 3.5
      break;
   case "Maçã":
      preco = 2.25
      break;
   case "Uva":
      preco = 0.30
      break;
   case "Pêra":
      preco = 5.5
      break; // BREAK PARA O ITEM c.
   default:
      preco = 5
      break;
   }
   console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
  */

  //==== RESPOSTAS ====
   //a.  O código serve para o usuário consultar o preço de algumas frutas

   //b.  A mensagem será: "O preço da fruta Maçã é R$ 2.25"

   //c.  A mensagem será: "O preço da fruta Pêra é R$ 5"
   
//---------------------------------------------------------------------


//---- EXERCICIO 3 ----------------------------------------------------
  /*
   const numero = Number(prompt("Digite o primeiro número."))

   if(numero > 0) {
   console.log("Esse número passou no teste")
      let mensagem = "Essa mensagem é secreta!!!"
   }

   console.log(mensagem)
  /*

  //==== RESPOSTAS ====
   //a.  A primeira linha do código está solicitando ao usuário que informe o primeiro número

   //b.  Nos dois casos o terminal apresenta uma mensagem de erro, relacionada ultima linha do código

   /*c.  O erro ocorre porque a variável "mensagem" existe somente dentro do bloco "if" e não pode ser
         acessada fora dele.
         Dessa forma ocorre um erro quando o código tenta acessá-la em "console.log(mensagem)"
   */
//---------------------------------------------------------------------


//---- EXERCICIO 4 ----------------------------------------------------
   let idade = Number(prompt("Informe sua idade"))

   if (idade >= 18) {
      console.log("Você pode dirigir")
   } else {
      console.log("Você não pode dirigir")
   }
//---------------------------------------------------------------------


//---- EXERCICIO 5 ----------------------------------------------------
   let turno = prompt("5. Informe o período em que você estuda (digite 'M' para 'matutino', 'V' para 'vespertino' ou 'N' para 'noturno'")

   if (turno === "M") {
      console.log("Bom dia!")
   } else if (turno === "V") {
      console.log("Boa Tarde!")
   } else {
      console.log("Boa Noite!")
   }
//---------------------------------------------------------------------


//---- EXERCICIO 6 ----------------------------------------------------
   let turno2 = prompt("6. Informe o período em que você estuda (digite 'M' para 'matutino', 'V' para 'vespertino' ou 'N' para 'noturno'")

   switch(turno2) {
      case "M":
         console.log("Bom dia!")
         break;
      case "V":
         console.log("Boa Tarde!")
         break;
      default:
         console.log("Boa Noite!")
         break;
   }
//---------------------------------------------------------------------


//---- EXERCICIO 7 ----------------------------------------------------
   let filmeGenero = prompt("Qual o gênero do filme que vão assistir?")
   let filmePreco = prompt("Qual o valor do ingresso?")

   if (filmeGenero === "fantasia" && filmePreco < 15) {
      console.log("Bom filme!")
   } else {
      console.log("Escolha outro filme!")
   }
//---------------------------------------------------------------------


//---- DESAFIO 1 ------------------------------------------------------
   let filmeGenero2 = prompt("Qual o gênero do filme que vão assistir?")
   let filmePreco2 = prompt("Qual o valor do ingresso?")

   if (filmeGenero2 === "fantasia" && filmePreco2 < 15) {
      let snack = prompt("Qual petisco gostaria de levar para assistir o filme?")
      console.log("Bom filme!","... com",snack + "!")
   } else {
      console.log("Escolha outro filme!")
   }
//---------------------------------------------------------------------



//---- DESAFIO 2 ------------------------------------------------------
   let nome = prompt("Informe seu nome completo")
   let jogoTipo = prompt("Informe o tipo de jogo (digite 'IN' para jogos internacionais ou 'DO' para jogos domésticos)")
   let jogoEtapa = prompt("Informe a estapa do jogo (digite 'SF' para semi-final, 'DT' para decisão de terceiro lugar ou 'FI' para a final)")
   let jogoCat = Number(prompt("Informe a categoria (digite 1, 2, 3 ou 4)"))
   let qtdIngressos = Number(prompt("Informe a quantidade de ingressos que deseja adquirir (digitar apenas números)"))

   //Define o tipo de jogo
   switch(jogoTipo){
      case "IN":
         jogoTipo2 = "Internacional"
         break;
      default:
         jogoTipo2 = "Nacional"
         break;
   }

   //Define a etapa do jogo
   switch (jogoEtapa) {
      case "SF":
         jogoEtapa2 = "Semi-final"
         break;
      case "DT":
         jogoEtapa2 = "Decisão terceiro lugar"
         break;
      default:
         jogoEtapa2 = "Final"
         break;
   }

   //Define sku
      let sku = String(jogoEtapa + jogoCat)

   //Define os valores dos ingressos
      let precoUn = 0
      let precoTotal = 0
   
      switch(sku) {
         case "SF1": precoUn = 1320; break;
         case "SF2": precoUn = 880; break;
         case "SF3": precoUn = 550; break;
         case "SF4": precoUn = 220; break;

         case "DT1": precoUn = 660; break;
         case "DT2": precoUn = 440; break;
         case "DT3": precoUn = 330; break;
         case "DT4": precoUn = 170; break;

         case "FI1": precoUn = 1980; break;
         case "FI2": precoUn = 1320; break;
         case "FI3": precoUn = 880; break;
         case "FI4": precoUn = 330; break;
      }

      precoTotal = precoUn * qtdIngressos

    //Define o valor a ser impresso de acordo com o tipo de jogo
      if (jogoTipo === "IN") {
         precoUn /= 4.1
         precoTotal /= 4.1
         precoUnIprime = "U$ " + precoUn
         precoTotalImprime = "U$ " + precoTotal
      } else {
         precoUnIprime = "R$ " + precoUn
         precoTotalImprime = "R$ " + precoTotal
      }


   //Imprime o "recibo"
   console.log("--- DADOS DA COMPRA ---")
   console.log("Nome:",nome)
   console.log("Tipo do jogo:", jogoTipo2)
   console.log("Etapa do jogo:", jogoEtapa2)
   console.log("Categoria:", jogoCat)
   console.log("Qtde. Ingressos:", qtdIngressos)
   console.log(" ")
   console.log("--- VALORES ---")
   console.log("Valor do Ingresso:", precoUnIprime)
   console.log("Valor Total:", precoTotalImprime)
//---------------------------------------------------------------------