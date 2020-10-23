export type extractItem = {
    value: number,
    date: string,
    description: string
}

export type bankAccount = {
    name: string,
    CPF: string,
    birthday: string,
    balance: number,
    extract: extractItem[],
}


export const bankData: bankAccount[] = []




//  Criar conta
//      - Somente maiores de 18 anos
//      - Recebe: "name", "CPF" e "birthday"
//      - Formato da conta (objeto):
//          {
//              name: ,
//              CPF: , 
//              birthday: ,
//              balance: 0,
//              extract: [ {valor: , data: , descricao: ,} ],
//          }
//      - Não podem existir dois usuários com o mesmo CPF

//  Pegar Saldo
//      - Recebe "name" e "CPF": body = {name: , CPF: ,}
//      - Retorna o valor do "balance"

//  Adicionar saldo
//      - Recebe "name", "CPF" e "value": {name: , CPF: , value: ,}

//  Pagar conta
//      - Recebe "value", "description" e "date":
//          {value: , description: , date: ,}
//      - Caso "date" não seja informado, considerar "hoje"
//      - "date" deve ser igual ou maior que hoje
//      - "value" deve ser menor ou igual a "balance"

//  Tranferência interna (entre contas)
//      - Recebe "name", "CPF", "nameDestiny", "CPFDestiny", "value"
//      - Não pode ser agendada. (não pode receber "date")
//      - "value" deve ser menor ou igual a "balance"