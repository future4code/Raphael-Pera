import React from 'react'
import styled from 'styled-components'
import axios from 'axios'


const FormBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    max-width: 500px;
`

const Label = styled.label`
    box-sizing: border-box;
    margin: 15px 0 0 0;
    background-color: coral;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const Input = styled.input`
    box-sizing: border-box;
    border: 1px solid lightgray;
    width: 100%;
    outline: none;
    margin: 7px 0 0 0;
    background-color: lightsteelblue;
    padding: 10px 5px;
`

const Btn = styled.button`
    box-sizing: border-box;
    border: none;
    background-color: dodgerblue;
    color: white;
    margin: 15px 0 0 0;
    max-width: 100px;
    padding: 10px 5px;
    font-size: 16px;
`


export class Formulario extends React.Component {
    render(){
        return(
            <FormBox>
                <Label>
                    Nome:
                    <Input
                        name={'inputNome'}
                        onChange={this.props.onChangeInput}
                        value={this.props.inputNomeValue}
                    />
                </Label>

                <Label>
                    E-mail:
                    <Input
                        name={'inputEmail'}
                        onChange={this.props.onChangeInput}
                        value={this.props.inputEmailValue}
                    />
                </Label>

                <Btn onClick={this.props.onClickEnviar}>Enviar</Btn>
            </FormBox>
        )
    }
}