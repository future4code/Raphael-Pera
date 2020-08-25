import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Formulario } from '../Formulario/Formulario'
import { ListaUsers } from '../ListaUsers/ListaUsers'

const TelaBox = styled.div`
    box-sizing: border-box;
    margin: 0 auto;
    min-width: 100px;
    /* max-width: 50vw; */
    min-height: 200px;
    border: 1px solid gray;
    background-color: rgb(240,240,240);
`

const TelaHeader = styled.header`
    box-sizing: border-box;
    width: 100%;
    min-height: 60px;
    background-color: dodgerblue;
`

const BtnPage = styled.button`

`

const TelaMain = styled.main`
    box-sizing: border-box;
    background-color: coral;
    /* margin: 20px 0 0 0; */
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
            console.log(`then: ${resposta.data}`)
        }).catch((erro)=>{
            console.log(`catch: ${erro.message}`)
        })
    }


    onClickEnviar=()=>{
        this.userCreate(this.state.inputNome, this.state.inputEmail)
        console.log('Enviado')
        // this.setState({
        //     inputNome:'',
        //     inputEmail:'',
        // })
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
                />)
                :
                (<ListaUsers></ListaUsers>)

        return(
            <TelaBox>
                <TelaHeader>HEADER</TelaHeader>
                <BtnPage onClick={this.changePage}>Troca Page</BtnPage>
                <TelaMain>{conteudo}</TelaMain>
            </TelaBox>
        )
    }
}