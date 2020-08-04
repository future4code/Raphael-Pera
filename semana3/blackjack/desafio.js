
console.log("Bem vindo(a) ao jogo de Blackjack!")
let newRodada = confirm("Bem vindo(a) ao jogo de Blackjack!\n\nQuer iniciar uma nova rodada?")

if (newRodada) {
   let cartaCpuTexto = []
   let cartaUserTexto = []
   let somaCpu = 0
   let somaUser = 0
   let duasCartasCpu = ""
   let duasCartasUser = ""
   let cartasSorteadas = false


  //Loop para sortear as cartas iniciais do usuario do computador
   while (!cartasSorteadas) {
      cartaCpuTexto = []
      cartaUserTexto = []
      somaCpu = 0
      somaUser = 0
      duasCartasCpu = ""
      duasCartasUser = ""

      for (let i = 1; i < 3; i++){
         let cartaCpu = comprarCarta()
         cartaCpuTexto.push(cartaCpu.texto)
         somaCpu += cartaCpu.valor
         duasCartasCpu += cartaCpu.texto.slice(0,1)

         let cartaUser = comprarCarta()
         cartaUserTexto.push(cartaUser.texto)
         somaUser += cartaUser.valor
         duasCartasUser += cartaUser.texto.slice(0,1)
      }
      if (duasCartasCpu !== "AA" && duasCartasUser !== "AA" ) {cartasSorteadas = true}
   }


  //Loop para comprar novas cartas para o usuário
   let novaCarta = true
   while(novaCarta && somaUser < 21) {
      let mensagemCompra = `Suas cartas são ${cartaUserTexto}. A carta revelada do computador é ${cartaCpuTexto[0]}.\nDeseja comprar mais uma carta?`
      novaCarta = confirm(mensagemCompra)

      if (novaCarta) {
         let cartaUser = comprarCarta()
         cartaUserTexto.push(cartaUser.texto)
         somaUser += cartaUser.valor
         console.log(`Usuario comprou nova carta`)
      }
   }

  //Loop para comprar novas cartas para o computador
   while(somaUser < 22 && somaCpu < 21 && somaCpu < somaUser) {
      let cartaCpu = comprarCarta()
      cartaCpuTexto.push(cartaCpu.texto)
      somaCpu += cartaCpu.valor
      console.log(`Computador comprou nova carta`)
   }


  //Verifica se a soma dos pontos do Usuário e dos pontos do Computador ultrapassaram 21
   let somaCpu2 = somaCpu
   let somaUser2 = somaUser
   
   if (somaCpu > 21) {somaCpu2 = -1}
   if (somaUser > 21) {somaUser2 = -1}


  //Verifica quem é o ganhador
   let msgWinner = ""
   if (somaCpu < 22 && somaCpu > somaUser2){
      msgWinner = "O computador ganhou!"
   } else if (somaUser < 22 && somaUser > somaCpu2) {
      msgWinner = "O usuário ganhou!"
   } else {
      msgWinner = "Empate!"
   }

  //Define a mensagem a ser apresentada para o usuario
   let msgPart1 = `Suas cartas são ${cartaUserTexto}. Sua pontuação é ${somaUser}.\n`
   let msgPart2 = `As cartas do computador são ${cartaCpuTexto}. A pontuação do computador é ${somaCpu}.\n`
   let msgFinal = msgPart1 + msgPart2 + msgWinner

   console.log(msgFinal)
   console.log("O jogo acabou!")

  //Apresenta a mensagem final para o usuario
   alert(msgFinal)

} else {
   alert("O jogo acabou!")
   console.log("O jogo acabou!")
}
