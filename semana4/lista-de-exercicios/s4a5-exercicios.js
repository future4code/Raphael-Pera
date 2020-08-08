
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
