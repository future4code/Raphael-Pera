import React from 'react'
import styled from 'styled-components'

const ScreenBox = styled.div`
    display: grid;
    place-items: center;
`

const FormBox = styled.div`
    display: flex;
    min-height: 50vh;
    width: 50%;
    flex-direction: column;
    justify-content: space-evenly;
`

const Label = styled.label`
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: left;
`

const Input = styled.input`
    /* border: 1px solid black; */
    padding: 7px 5px;
    margin-top: 10px;
`
const BtnSend = styled.button`
    padding: 5px;
`

export const LoginPage = () => {
    return(
        <ScreenBox>
            <FormBox>
                <Label>E-mail <Input></Input></Label>
                <Label>Senha <Input></Input></Label>
                <BtnSend>Entrar</BtnSend>
            </FormBox>
        </ScreenBox>
    )
}