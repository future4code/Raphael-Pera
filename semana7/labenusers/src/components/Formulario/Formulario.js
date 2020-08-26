import React from 'react'
import styled from 'styled-components'
import axios from 'axios'


const FormBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    max-width: 600px;
    margin: 0 auto;
`

const Label = styled.label`
    box-sizing: border-box;
    margin: 25px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const Input = styled.input`
    box-sizing: border-box;
    border: 1px solid rgb(200,200,200);
    border-radius: 5px;
    width: 100%;
    outline: none;
    margin: 7px 0 0 0;
    /* background-color: lightsteelblue; */
    padding: 10px 5px;
`

const Btn = styled.button`
    box-sizing: border-box;
    border: none;
    background-color: dodgerblue;
    color: white;
    margin: 20px 0 0 0;
    max-width: 100px;
    padding: 10px 5px;
    font-size: 14px;
`


export class Formulario extends React.Component {
    state={
        inputNome:'',
        inputEmail:'',
    }

    onChangeInput=(e)=>{
        this.setState({[e.target.name]: e.target.value})
        console.log(e.target.name,' : ',e.target.value)
    }


    userCreate = ()=>{
        const body={name: this.state.inputNome, email: this.state.inputEmail}

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


    onKeyD=(e)=>{
        // console.log(e.key)
        e.key === 'Enter' && this.userCreate()
    }


    render(){
        return(
            <FormBox onKeyDown={this.onKeyD} >
                <Label>
                    Nome:
                    <Input
                        name={'inputNome'}
                        onChange={this.onChangeInput}
                        value={this.state.inputNome}
                    />
                </Label>

                <Label>
                    E-mail:
                    <Input
                        name={'inputEmail'}
                        onChange={this.onChangeInput}
                        value={this.state.inputEmail}
                    />
                </Label>

                <Btn onClick={this.userCreate}>Enviar</Btn>
            </FormBox>
        )
    }
}