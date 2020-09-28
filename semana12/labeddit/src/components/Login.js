import React from 'react'
import styled from 'styled-components'

const PageBox = styled.div`
    /* background-color: lightgreen; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    padding: 20px 0 0 0;
`

const Title = styled.h2`
    /* background-color: lightblue; */
`

const FormBox = styled.form`
    /* background-color: lightcoral; */
    display: flex;
    flex-direction: column;
    width: 30%;
    min-width: 300px;
`

const Label = styled.label`
    margin: 15px 0;
    text-align: left;
    /* :first-child{margin: 0 0 15px 0} */
`

const Input = styled.input`
    width: 100%;
    border: 1px solid lightgray;
    padding: 10px;
    border-radius: 5px;
    :hover{border: 1px solid gray;}
`

const BtnGroup = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 15px 0;
`

const LoginBtn = styled.button`
    padding: 8px 12px;
    border: 1px solid rgb(0, 77, 153);
    color: white;
    background-color: rgb(0, 77, 153);
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    min-width: 100px;
    :hover{background-color:  rgb(0, 64, 128);}
` 

const SignUpBtn = styled.button`
    padding: 8px 12px;
    border: 1px solid rgb(0, 77, 153);
    color: rgb(0, 77, 153);
    background-color: none;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    min-width: 100px;
    :hover{
        background-color: rgb(0, 77, 153);
        color: white;
    }
` 



export function Login(){
    return(
        <PageBox>
            <Title>Login</Title>
            <FormBox>
                <Label> Email <Input type='email'></Input> </Label>
                <Label> Senha <Input type='password'></Input> </Label>
                <BtnGroup>
                    <LoginBtn>LOGIN</LoginBtn>
                    <SignUpBtn>CADASTRAR</SignUpBtn>
                </BtnGroup>
            </FormBox>
        </PageBox>
    )
}