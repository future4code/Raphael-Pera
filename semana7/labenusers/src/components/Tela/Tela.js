import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Formulario } from '../Formulario/Formulario'
import { ListaUsers } from '../ListaUsers/ListaUsers'

const TelaBox = styled.div`
    box-sizing: border-box;
    margin: 0 auto;
    min-width: 250px;
    /* max-width: 50vw; */
    min-height: 100vh;
    border: 1px solid gray;
    display: grid;
    grid-template-rows: 50px 30px 1fr;

`

const TelaHeader = styled.header`
    box-sizing: border-box;
    width: 100%;
    background-color: dodgerblue;
    display:grid;
    place-items: center;
`

const BtnPage = styled.button`
    font-size: 16px;
`

const TelaMain = styled.main`
    box-sizing: border-box;
    padding: 20px;
`

export class Tela extends React.Component {
    state = {
        inputNome:'',
        inputEmail:'',
        formOn: true,
        listOn: false,
    }

    onChangeInput=(e)=>{
        this.setState({[e.target.name]: e.target.value})
        // console.log(e.target.name,' : ',e.target.value)
    }


    userCreate = (uNome, uEmail)=>{
        const body={name: uNome, email: uEmail}

        const request = axios.post(
            'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
            body,
            {headers:{Authorization: 'raphael-ribeiro-jackson'}}
        )

        request.then((resposta)=>{
            // console.log(`then:`)
            // console.log(resposta.status)
            alert(`Cadastro realizado com sucesso (${resposta.status})`)
            this.setState({inputNome:'', inputEmail:'',})
        }).catch((erro)=>{
            // console.log(`catch:`)
            // console.log(erro.response.status, erro.data)
            // console.log(erro.response)
            switch (erro.response.status) {
                case 400:
                    alert(`É necessário informar o Nome e o email (err: ${erro.response.status})`)
                    break;
                case 500:
                    alert(`Nome ou e-mail já constam no cadastro de usuários (err: ${erro.response.status})`)
                    break;
                case 404:
                    alert(`Nome ou e-mail já constam no cadastro de usuários (err: ${erro.response.status})`)
                    break;
                default:
                    break;
            }
        })
    }

    onClickEnviar=()=>{
        this.userCreate(this.state.inputNome, this.state.inputEmail)
        console.log('Enviado')
    }

    onKeyD=(e)=>{
        // console.log(e.key)
        e.key === 'Enter' && this.onClickEnviar()
    }

    changePage=()=>{this.setState({formOn:!this.state.formOn})}

    render(){

        const conteudo =
            this.state.formOn ?
                (<Formulario
                    onChangeInput={this.onChangeInput}
                    inputNomeValue={this.state.inputNome}
                    inputEmailValue={this.state.inputEmail}
                    onClickEnviar={this.onClickEnviar}
                    onKeyD={this.onKeyD}
                />)
                :
                (<ListaUsers></ListaUsers>)

        return(
            <TelaBox>
                <TelaHeader>HEADER</TelaHeader>
                <BtnPage onClick={this.changePage}>
                    {this.state.formOn ? 'Lista de usuários' : 'Cadastro de usuários'}
                </BtnPage>
                <TelaMain>{conteudo}</TelaMain>
            </TelaBox>
        )
    }
}