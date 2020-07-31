
console.log("Bem vindo(a) ao jogo de Blackjack!")
let novaRodada = confirm("Quer iniciar uma nova rodada?")

if (novaRodada) {
   let cartaCpuTexto = []
   let cartaUserTexto = []
   let somaCpu = 0
   let somaUser = 0

   for (let i = 1; i < 3; i++){
      let cartaCpu = comprarCarta()
      cartaCpuTexto.push(cartaCpu.texto)
      somaCpu += cartaCpu.valor

      let cartaUser = comprarCarta()
      cartaUserTexto.push(cartaUser.texto)
      somaUser += cartaUser.valor
   }

   let mensagemCpu = `Computador - cartas: ${cartaCpuTexto[0]} ${cartaCpuTexto[1]} - pontuação ${somaCpu}`
   let mensagemUser = `Usuário - cartas: ${cartaUserTexto[0]} ${cartaUserTexto[1]} - pontuação ${somaUser}`
   let mensagemFinal = ""

   let somaCpu2 = somaCpu
   let somaUser2 = somaUser
   
   if (somaCpu > 21) {somaCpu2 = -1}
   if (somaUser > 21) {somaUser2 = -1}

   if (somaCpu < 22 && somaCpu > somaUser2){
      mensagemFinal = "O computador ganhou!"
   } else if (somaUser < 22 && somaUser > somaCpu2) {
      mensagemFinal = "O usuário ganhou!"
   }  else {
      mensagemFinal = "Empate!"
   }

   console.log(mensagemCpu)
   console.log(mensagemUser)
   console.log(mensagemFinal)     
} else {
   console.log("O jogo acabou!")
}

