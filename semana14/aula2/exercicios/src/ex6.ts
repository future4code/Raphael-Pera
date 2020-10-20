const defineIdadeHistorica = (ano: number, sigla?: string): string => {
    sigla = sigla || 'DC'
    let idade
    console.log(sigla)

    //  Pré-historia
    //  4000 AC - Idade Antiga
    //  476 DC - Idade Média
    //  1473 DC - Idade Moderna
    //  1789 DC - Idade Contemporânea

    const anoAtual = new Date().getFullYear()
    const qtdeAnos = sigla === 'DC' ? anoAtual - ano : anoAtual + ano

    const idadeContemporanea: number = anoAtual - 1789
    const idadeModerna: number = anoAtual - 1473
    const idadeMedia: number = anoAtual - 476
    const idadeAntiga: number = anoAtual + 4000
    const idadePreH: number = anoAtual + 10000

    if (qtdeAnos >= idadeContemporanea) {

    }

    return ''
}