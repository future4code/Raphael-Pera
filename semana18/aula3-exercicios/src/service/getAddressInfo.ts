import axios from 'axios'

const URL_ADDRESS = "https://viacep.com.br/ws"

type address = {
    logradouro: string,
    bairro: string,
    cidade: string,
    estado: string
}

export async function getAddressInfo(cep: string): Promise<address> {
    const cepData: any = await axios.get(`${URL_ADDRESS}/${cep}/json`)
    const {logradouro, bairro, localidade, uf} = cepData.data
    
    const result = {logradouro, bairro, cidade: localidade, estado: uf}
    // console.log(result)

    return result
}
