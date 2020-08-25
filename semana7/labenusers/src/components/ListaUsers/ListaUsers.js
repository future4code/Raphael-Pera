import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ListaBox = styled.div`
    background-color: lightgreen;
`

const ListaHeader = styled.h2`
    vertical-align: center;
`

const UserBox = styled.div`
    display:flex;
    align-items: center;
    justify-content:flex-start;
    background-color: grey;
    padding: 5px 30px;
`

const UserName = styled.p`
    margin-right: 30px;
`

const BtnDel = styled.button``

export class ListaUsers extends React.Component {
    render(){
        return(
            <ListaBox>
                <ListaHeader>Usuários Cadastrados</ListaHeader>
                <UserBox>
                    <UserName>Raphael Ribeiro</UserName>
                    <BtnDel onclick={this.props.userDel} >X</BtnDel>
                </UserBox>
            </ListaBox>
        )
    }
}