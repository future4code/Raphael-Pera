import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Formulario } from '../Formulario/Formulario'


const UserBox = styled.section`
    position: absolute;
    top: calc(50vh - 150px);
    left: calc(50vw - 150px);
    min-width: 300px;
    max-width: 400px;
    min-height: 300px;
    /* margin: 30px auto; */
    border: 1px solid black;
    background-color: rgb(240,240,240);
    padding: 5px 15px 15px 15px;

    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:flex-start;

    /* display: grid;
    grid-template-rows: 20px 1fr; */
`

const BtnClose = styled.span`
    color: gray;
    align-self: flex-end;
    padding: 3px 6px;
    cursor: pointer;
    :hover{
        color: black;
        background-color: lightgray;
    };
`



export class UserEdit extends React.Component {

    retorno=(valor)=>{
        this.props.retorno(valor)
    }

    render(){
        return(
            <UserBox>
                <BtnClose onClick={this.props.close} >x</BtnClose>
                <Formulario
                    inputNome={this.props.user.name}
                    inputEmail={this.props.userEmail}
                    user={this.props.user}
                    operation={'put'}
                    retorno={this.retorno}
                />
            </UserBox>
        )
    }
}
