const defineIdadeHistorica = (ano: number, sigla?: string | undefined): string => {
    if (sigla !== 'AC' && sigla !== 'DC' && sigla !== undefined ) {return 'Sigla inválida!'}
    if (isNaN(ano)) {return 'Ano inválido'}
    sigla = sigla || 'DC'
    let idadeH: string

    const anoAtual = new Date().getFullYear()
    const qtdeAnos = sigla === 'DC' ? anoAtual - ano : anoAtual + ano

    const idadeContemporanea: number = anoAtual - 1789
    const idadeModerna: number = anoAtual - 1473
    const idadeMedia: number = anoAtual - 476
    const idadeAntiga: number = anoAtual + 4000
    const idadePreH: number = anoAtual + 10000

    if (qtdeAnos >= idadePreH) {
        idadeH = 'Pré-história'
    } else if (qtdeAnos >= idadeAntiga) {
        idadeH = 'Idade Antiga'
    } else if (qtdeAnos >= idadeMedia) {
        idadeH = 'Idade Media'
    } else if (qtdeAnos >= idadeModerna) {
        idadeH = 'Idade Moderna'
    } else if (qtdeAnos >= idadeContemporanea) {
        idadeH = 'Idade Contemporânea'
    } else {
        idadeH = 'ERRO NA IDADE'
    }

    return idadeH
}

console.log(defineIdadeHistorica(11000, 'AC'))
