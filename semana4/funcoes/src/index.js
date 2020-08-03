//---- EXERCICIO 01 ---------------------------------------------------
  /*
   function minhaFuncao(variavel) {
      return variavel * 5
   }

   console.log(minhaFuncao(2))
   console.log(minhaFuncao(10))
  */

  //RESPOSTAS
   /*a.  Vão ser imnpressas duas linhas no console; a primeira contendo o número 10 e a segunda
         contendo o número 50.
   */

   /*b.  A função retornaria o valor do cálculo, porém nada seria impresso no console.
   */
//---------------------------------------------------------------------


//---- EXERCICIO 02 ---------------------------------------------------
  /*
   let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

   const outraFuncao = function(array) {
      for (let i = 0; i < 2; i++) {
         console.log(array[i])
      }
   }

   outraFuncao(arrayDeNomes)
  */

  //RESPOSTAS
   /*a.  Serão impressas no console duas linhas contendo as strings "Darvas" e "Goli", respectivamente */

   /*b.  Serão impressas no console duas linhas contendo as strings "Amanda" e "Caio", respectivamente */

//---------------------------------------------------------------------



//---- EXERCICIO 03 ---------------------------------------------------
  /*
   const metodo = (array) => {
      let arrayFinal = [];

      for (let x of array) {
            if (x % 2 === 0) {
            arrayFinal.push(x * x)
            }
      }
      return arrayFinal;
   }
  */

  //RESPOSTA
  /*  A função percorre todas as posições da array recebida como parâmetro, verifica se seu valor é
      divisível por 2 e, multiplica-o por ele mesmo em caso positivo e insere o resultado dessa
      multiplicação em uma nova array chamada "arrayFinal".
      Nomes alternativos poderiam ser "criarArray" ou "multiplicaArray" */
//---------------------------------------------------------------------



//---- EXERCICIO 04 ---------------------------------------------------
   console.log(" ")
   console.log("----- EXERCICIO 04 -----")
  //a.  
   function descrever1 () {
      console.log(`Eu sou Raphael, tenho 37 anos, moro em São Paulo e sou estudante`)
   }
   descrever1()


  //b.  
   function descrever2 (nome, idade, cidade, estudante) {
      let estudanteTxt = ""
      if (estudante) {estudanteTxt = "sou"} else {estudanteTxt = "não sou"}
      console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${estudanteTxt} estudante`)
   }
   descrever2("Raphael", 37, "São Paulo", true)
//---------------------------------------------------------------------



//---- EXERCICIO 05 ---------------------------------------------------
   console.log(" ")
   console.log("----- EXERCICIO 05 -----")
  //a.  
   let calcular = function(num1, num2) {
      return num1 * num2
   } 
   console.log(calcular(2,4))

  //b.
   let comparar = function(num1, num2) {
      return num1 >= num2
   }
   console.log(comparar(4,5))

  //c.
   let imprimir = function(mensagem) {
      for (let i = 1; i<11; i++){
         console.log(mensagem, `(${i})`)
      }
   }
   imprimir("Texto a ser impresso")

//---------------------------------------------------------------------



//---- EXERCICIO 06 ---------------------------------------------------
   console.log(" ")
   console.log("----- EXERCICIO 06 -----")
   const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

  //a.
   let quantidade = (umaArray) => {
      return umaArray.length
   }
   console.log(quantidade(array))

  //b.
   let ePar = (num) => {
      return num%2 === 0
   }
   console.log(ePar(2))

  //c.
   let numerosPares = (umaArray) => {
      let contador = 0
      for (let x of umaArray) {
         if (x%2 === 0) {contador++}
      }
      return contador
   }
   console.log(numerosPares(array))

  //d.
   numerosPares = (umaArray) => {
      let contador = 0
         for (let x of umaArray) {
            if (ePar(x)) {contador++}
      }
         return contador
   }
   console.log(numerosPares(array))
//---------------------------------------------------------------------


//---- DESAFIO 01 -----------------------------------------------------
   console.log(" ")
   console.log("----- DESAFIO 01 -----")
  //1.
   let imprime = (pmt) => {
      console.log(pmt)
   }

  //2.
   let calcula = (num1, num2) => {
      imprime((num1+num2))
   }
   calcula(2,3)
//---------------------------------------------------------------------



//---- DESAFIO 02 -----------------------------------------------------
   console.log(" ")
   console.log("----- DESAFIO 02 -----")

   const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

  //a.
   let arrayPares = (umaArray) => {
      let outraArray = []
      for (let x of umaArray) {
         if (x%2 === 0) {
            outraArray.push(x * 2)
         }
      }
      return outraArray
   }
   console.log(arrayPares(numeros))

  //b.
   let arrayMax = (umaArray) => {
      let numMax = - Infinity
      for (let x of umaArray) {
         if (x > numMax) {numMax = x}
      }
      return numMax
   }
   console.log(arrayMax(numeros))

  //c.
   let arrayMaxIndex = (umaArray) => {
      let numMax = - Infinity
      for (let x of umaArray) {
         if (x > numMax) {numMax = x}
      }
      return umaArray.indexOf(numMax)
   }
   console.log(arrayMaxIndex(numeros))

  //d.
   let arrayInverte = (umaArray) => {
      let outraArray = []
      // for (let x of umaArray) {
      //    outraArray.unshift(x)
      // }

      for (let x = umaArray.length - 1; x>=0; x--) {
         let item = umaArray[x]
         outraArray.push(item)
      }
      return outraArray
   }
   console.log(arrayInverte(numeros))
//---------------------------------------------------------------------