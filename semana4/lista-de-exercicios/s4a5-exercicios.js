
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


