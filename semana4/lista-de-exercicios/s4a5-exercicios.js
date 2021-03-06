
  // INTERPRETAÇÃO DE CÓDIGO - 1) *********************************************************************
    //O que ele faz:
        /*  O código converte o valor de U$ 100 (cem dólares) para reais (R$) utilizando o valor
            da cotação informado pelo usuário em dólares (U$) e
            imprime o resultado no console */

    //Como ele faz:
        /*  Ao ser executado o código define a variável "meuDinheiro" que conterá o valor retornado
            pela função "conversorDeMoeda". Com essa definição a função mencionada é invocada.
            
            A função "conversorDeMoeda", que recebe como único parâmetro o número 100 atribuído à
            variável "valorEmDolar",  primeiramente solicita que o usuário digite o valor da
            cotação do dólar em um "prompt" e atribui esse valor informado à constante "cotacao" em
            formato de número. 
            A função então retorna o valor resultante da multiplicação do valor de "cotacao" pelo
            valor de "valorEmDolar", precedido do símbolo da modeda Real (R$).
            
            Por fim, o código imprime no console, através da função "console.log", o valor da
            constante "meuDinheiro". */
    
    //O que é impresso no console:
        /*  Será impresso o valor contido na constante "meuDinheiro", em formato de "string" */
  //_______________________________________________________________________________________________



  // INTERPRETAÇÃO DE CÓDIGO - 2) *********************************************************************
    //O que ele faz:
        /*  O código calcula o valor total de dois montantes de dinheiro com base no tipo de
            investimento e no valor investido, e imprime o valor dos montantes no console. */
    
    //Como ele faz:
        /*    O código define as constantes "novoMontante" e "segundoMontante" que conterão os
            valores totais dos investimentos.
              Cada uma das duas constantes invoca a função "investeDinheiro" passando os parâmetros
            as variáveis "tipoDeInvestimento", do tipo "string", e "valor", do tipo "number".
              A função então define o cálculo a ser realizado utilizando uma condicional "switch/case"
            que verifica qual o calculo adequado para o parâmetro "tipoDeinvestimento" recebido.
              Com o cálculo encontrado, a função multiplica valor do parâmetro "valor" por um número
            fixo determinado para aquele tipo de investimento, e atribui o resultado à variável
            "valorApósInvestimento"
              A função então retorna o valor de "valorAposInvestimento"
              Por fim, o código imprime duas linhas no console, utilizando a função "console.log",
            contendo os valores de "novoMontante" e "segundoMontante" respectivamente.
              Caso a função não encontre o calculo adequado para o "tipoDeInvestimento" informado,
            um alerta é emitido com a mensagem "TIPO DE INVESTIMENTO INFORMADO INCORRETO!", utilizando
            "alert()". Nesse caso a variável "valorAposInvestimento" não é retornada pela função e
            então o console imprimirá 2 linhas contendo o texto "undefined" */

    //O que é impresso no console:
        /*  165
            TIPO DE INVESTIMENTO INFORMADO INCORRETO! */
  //__________________________________________________________________________________________________



  // INTERPRETAÇÃO DE CÓDIGO - 3) *********************************************************************
    //O que ele faz:
        /*  O código analisa um array de números, verifica quais números são pares ou não, cria duas novas
            arrays e armazena os numeros pares em um array, e numeros impares em outra */
    
    //Como ele faz:
        /*    O código cria 3 arrays: "numeros", "array1" e "array2", sendo que o primeiro array contem
            os números a serem analisados e os outros dois arrays estão vazios.
              Então o código percorre cada item (cada número) do array "numeros" e calcula o o resto de sua
            divisão por 2. Caso o resultado seja igual a 0 (zero), indicando que o número é par, o número 
            analisado é armazenado no array "array1". Caso o resultado seja diferente de 0 (zero), indicando
            que o número é ímpar, o número é armazenado no array "array2".
              Por fim o código imprime no console, utilizando a função "console.log()", três mensagens:
            a primeira contendo o texto composto pelo trecho "Quantidade total de números" e a quantidade de
            itens no array "numeros", definido pela função "numeros.length".
              A segunda mensagem impressa contem apenas a quantidade de itens contidos no array "array1", e a
            terceira mensagem apresenta a quantidade de itens contidos no array "array2", ambas utilizando-se
            a propriedade ".length" */

    //O que é impresso no console:
        /*  Quantidade total de números 14
            6
            8 */
  //__________________________________________________________________________________________________


  // INTERPRETAÇÃO DE CÓDIGO - 4) *********************************************************************
    //O que ele faz:
        /*    O código compara cada número contido no array "numeros" com os valores de duas variáveis,
            chamadas de "numero1" e "numero2".
              Caso o número seja menor que o "numero1", o "numero1" assume o valor do número.
              Caso o número seja maior que o "numero2", o "numero2" assume o valor do número.
              Por fim, o código imprime duas linhas no console contendo os valores de "numero1" e "numero2"
            respectivamente.   */
    
    //Como ele faz:
        /*    Primeiramente são definidas a constante "numeros" como um array, e as variáveis "numero1" e "numero2".
              Em seguida o código utiliza um loop do tipo "for/of" para comparar cada número contido em "numero"
            com os valores das variáveis "numero1" e "numero2".
              Utilizando a condicional "if/else" o código verifica se o número é menor que "numero1", e atribui o 
            valor do número para "numero1" em caso positivo. Da mesma forma verifica se o número é maior que "numero2,
            e atribui o valor do número a "numero2" em caso positivo.
              Por fim, utilizando a função "console.log", o código imprime duas linhas no console contendo os valores
            de "numero1" e "numero2" respectivamente. */

    //O que é impresso no console:
        /*  25
            1590 */
  //__________________________________________________________________________________________________




  // LÓGICA DE PROGRAMAÇÂO - 1) **********************************************************************
    //3 maneiras:
        /*  Podemos percorrer uma lista utilizando loops do tipo "for", "for/of" e "while" */

    
      const lista = ['banana', 'maça', 'beterraba', 'cenoura', 'laranja']

      for (let num = 0; num < lista.length; num++) {
        let item = lista[num]
      }

      for(let fruta of lista) {
        let item = fruta
      }

      let oFruta = 0
      while (oFruta < lista.length) {
        let item = lista[oFruta]
        oFruta++
      }

  //__________________________________________________________________________________________________


  // LÓGICA DE PROGRAMAÇÃO - 2) **********************************************************************
    //Variáveis:
      /*  const booleano1 = true
          const booleano2 = false
          const booleano3 = !booleano2
          const booleano4 = !booleano3 */


    //a.  false
    //b.  false
    //c.  true
    //d.  true
    //e.  true
  //__________________________________________________________________________________________________



  // LÓGICA DE PROGRAMAÇÃO - 3) **********************************************************************
      // Código Original:
        /*  const quantidadeDeNumerosPares
            let i = 0
            while(i <= quantidadeDeNumerosPares) {
              console.log(i*2)
            }
        */

      //  O código original não funciona para definir e imprimir os números pares conforme solicitado.
      /*    O código apenas multiplica por 2 cada um dos números contidos entre 0 (zero) e o valor de
          "quantidadeDeNumerosPares", incluindo o valor dessa constante.
            Além disso, o código também apresenta dois erros: não existe um valor inicial atribuido à 
          constante "quantidadeDeNumerosPares", e a variável "i" não está sendo incrementada dentro do
          loop, o que faria o código entrar em loop infinito (não desejado)
          */  
      
      // Código Corrigido:
          const quantidadeDeNumerosPares = 12
          let i = 0
          while(i <= quantidadeDeNumerosPares) {
            if (i % 2 === 0) {
              console.log(i)
            }
            i++
          }
  //__________________________________________________________________________________________________



  // LÓGICA DE PROGRAMAÇÃO - 4) **********************************************************************
    let a = 5
    let b = 6
    let c = 7
    let tipoTriangulo

    if (a === b && b === c) {
      tipoTriangulo = "equilátero"
    } else if (a !== b && a !== c && b !== c) {
      tipoTriangulo = "escaleno"
    } else {
      tipoTriangulo = "isóceles"
    }
  //__________________________________________________________________________________________________


  // LÓGICA DE PROGRAMAÇÃO - 5) **********************************************************************
    let numeroA = 15
    let numeroB = 30

    if(numeroA > numeroB) {
      console.log (`O maior é ${numeroA}`)
    } else {
      console.log (`O maior é ${numeroB}`)
    }

    if (numeroA % numeroB === 0) {
      console.log(`${numeroA} é divisível por ${numeroB}`)
      console.log(`${numeroB} não é divisível por ${numeroA}`)
    } else if (numeroB % numeroA === 0){
      console.log(`${numeroA} não é divisível por ${numeroB}`)
      console.log(`${numeroB} é divisível por ${numeroA}`)
    } else {
      console.log(`Os números ${numeroA} e ${numeroB} não são divisíveis entre si`)
    }

    let numeroDif = numeroA - numeroB
    if (numeroDif < 0) {numeroDif *= -1}
    console.log(`A diferença entre eles é ${numeroDif}`)

  //__________________________________________________________________________________________________



  // FUNÇÕES - 1) ************************************************************************************

    function verificaNumeros (array) {
      let numMax = -Infinity
      let numMax2 = -Infinity
      let numMin = Infinity
      let numMin2 = Infinity

      for (let x of array) {
        if (x > numMax) {
          numMax = x
        }

        if (x < numMin) {
          numMin = x
        }
      }

      for(x of array) {
        if (x > numMax2 && x < numMax) {
          numMax2 = x
        }
        
        if (x < numMin2 && x > numMin) {
          numMin2 = x
        }
      }

      console.log(`Segundo maior número: ${numMax2}`)
      console.log(`Segundo menor número: ${numMin2}`)
    }

    const oNumeros = [1,2,3,4,5,6,7,8,9,10]

    verificaNumeros(oNumeros)

  //__________________________________________________________________________________________________



  // FUNÇÕES - 2) ************************************************************************************
    let funcaoNaoNomeada = () => {
      alert("Hello Future4")
    }

    funcaoNaoNomeada()
  //__________________________________________________________________________________________________



  // OBJETOS - 1) ************************************************************************************
    /*    Arrays são conjuntos que podem armazenar diversos números, textos, outros arrays, objetos,
        entre outros.
          Eles podem ser utilizados para simplificar o armazenamento de diversos valores que poderão
        ser utilizados posteriormente pelo código em que está presente, uma vez que eles tornam
        desnecessária a criação de inúmeras variáveis para armazenar esses valores.
        
          Objetos constituem-se de um conjunto de propriedades referentes a um elemento. Ao criarmos,
        por exemplo, um objeto chamado "carro", podemos atribuir diversas prorpiedades a ele como "cor",
        "modelo" e "preço", e utilizar ou alterar os valores dessas conforme a necessidade da aplicação
        em desenvolvimento.
          Objetos são muito uteis quando é necessário armazenar informações de diversos elementos do mesmo
        tipo. No exemplo do objeto "carro" poderíamos criar diversos objetos identicos, como por exemplo,
        {modelo: "corolla", cor: "vermelho", preco: 35000.00} ou {modelo: "palio", cor: "azul", preco: "19000.00" }
          */   
  //__________________________________________________________________________________________________



  // OBJETOS - 2) ************************************************************************************
    function criaRetangulo (lado1, lado2) {
      let oPerimetro = 2 * (lado1 + lado2)
      let oArea = lado1 * lado2

      return {largura: lado1, altura: lado2, perimetro: oPerimetro, area: oArea,}
    }
  //__________________________________________________________________________________________________



  // OBJETOS - 3) ************************************************************************************
    let filmeFavorito = {
      titulo: "A Rede Social",
      ano: 2011,
      diretor: "Christopher Nolan",
      atores: ["John Travolta", "All Pacino"],
    }

    let atoresString
    for (let x of filmeFavorito.atores) {
      if (atoresString === undefined) {
        atoresString = x
      } else {
        atoresString += `, ${x}`
      }
    }

    let chamadaFilme = 
      `Venha assistir ao filme "${filmeFavorito.titulo}", de ${filmeFavorito.ano}, ` +
        `dirigido por ${filmeFavorito.diretor} e estrelado por ${atoresString}`

    console.log(chamadaFilme)
  //__________________________________________________________________________________________________



  // OBJETOS - 4) ************************************************************************************
    const umaPessoa = {
      nome: "Raphael",
      idade: 37,
      email: "raphael37@labenu.com.br",
      endereco: "Avenida Google de Oliveira, 2020",
    }

    function anonimizarPessoa (objeto) {
      let anonimaPessoa = {
        ...umaPessoa,
        nome: "ANÔNIMO"
      }
      return anonimaPessoa
    }
  //__________________________________________________________________________________________________



  // FUNÇÕES DE ARRAY - 1) ***************************************************************************
    let oArray = [
      { nome: "Pedro", idade: 20 },
      { nome: "João", idade: 10 },
      { nome: "Paula", idade: 12 },
      { nome: "Artur", idade: 89 } 
    ]

    //a.  
      let adultos = oArray.filter((elemento) => {
        return elemento.idade >= 20
      })
    
    //b.
      let criancas = oArray.filter((elemento) => {
        return elemento.idade < 20
      })
  //__________________________________________________________________________________________________



  // FUNÇÕES DE ARRAY - 2) ***************************************************************************
    const array = [1, 2, 3, 4, 5, 6]

    //a.
      let arrayMultiplicada = array.map((elemento) => {
        return elemento * 2
      })

    //a.
    let arrayMultiplicada2 = array.map((elemento) => {
      return String(elemento * 3)
    })
      
    //c.
      let arrayParImpar = array.map((elemento) => {
        if(elemento % 2 === 0) {
          return String(`${elemento} é par`)
        } else {
          return String(`${elemento} é ímpar`)
        }
      })
  //__________________________________________________________________________________________________



  // FUNÇÕES DE ARRAY - 3) ***************************************************************************
    const pessoas = [
      { nome: "Paula", idade: 12, altura: 1.8},
      { nome: "João", idade: 20, altura: 1.3},
      { nome: "Pedro", idade: 15, altura: 1.9},
      { nome: "Luciano", idade: 22, altura: 1.8},
      { nome: "Artur", idade: 10, altura: 1.2},
      { nome: "Soter", idade: 70, altura: 1.9}
    ]

    //a.
      let pessoasPermitidas = pessoas.filter((elemento) => {
        return (elemento.altura >= 1.5 && elemento.idade > 14 && elemento.idade < 60) 
      })        

    //b.
      let pessoasProibidas = pessoas.filter((elemento) => {
        return (elemento.altura < 1.5 || elemento.idade < 14 || elemento.idade > 60) 
      })
  //__________________________________________________________________________________________________



  // FUNÇÕES DE ARRAY - 4) ***************************************************************************
    const consultas = [
      { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
      { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
      { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
      { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
    ]

    let arrayCanceladas = consultas.filter((elemento) => {
      return elemento.cancelada
    })

    let arrayNaoCanceladas = consultas.filter((elemento) => {
      return !elemento.cancelada
    })

    let canceladas = arrayCanceladas.map((elemento) => {
      let pronome = ""
      let lembrar = ""
      if (elemento.cancelada){
        if (elemento.genero === "masculino") {
          pronome = "Sr."
          lembrar = "lembrá-lo"
        } else {
          pronome = "Sra."
          lembrar = "lembrá-la"
        }
      }
      return  `Olá, ${pronome} ${elemento.nome}. Infelizmente, sua consulta marcada ` +
              `para o dia ${elemento.dataDaConsulta} foi cancelada. Se quiser, pode entrar em ` +
              `contato conosco para remarcá-la`
    })


    let naoCanceladas = arrayNaoCanceladas.map((elemento) => {
      let pronome = ""
      let lembrar = ""
      if (!elemento.cancelada){
        if (elemento.genero === "masculino") {
          pronome = "Sr."
          lembrar = "lembrá-lo"
        } else {
          pronome = "Sra."
          lembrar = "lembrá-la"
        }
      }

      return  `Olá, ${pronome} ${elemento.nome}. Estamos enviando esta mensagem para ` +
              `${lembrar} da sua consulta no dia ${elemento.dataDaConsulta}. ` +
              `Por favor, acuse o recebimento deste e-mail.`
    })
  //__________________________________________________________________________________________________



  // FUNÇÕES DE ARRAY - 5) ***************************************************************************
    const contas = [
      { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
      { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
      { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
      { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
      { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
      { cliente: "Soter", saldoTotal: 1200, compras: [] }
    ]
      
    contas.forEach((elemento) => {
      let comprasTotal = 0
      for (let x of elemento.compras) {comprasTotal += x}
      elemento.saldoTotal -= comprasTotal
    })
  //__________________________________________________________________________________________________
