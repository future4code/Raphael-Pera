import React from 'react'
import styled from 'styled-components'
// import axios from 'axios'
import { Formulario } from '../Formulario/Formulario'
import { ListaUsers } from '../ListaUsers/ListaUsers'

const TelaBox = styled.div`
    box-sizing: border-box;
    margin: 0 auto;
    width:100vw;
    /* min-width: 295px; */
    /* max-width: 50vw; */
    min-height: 100vh;
    border: 1px solid gray;
    display: grid;
    grid-template-rows: 90px auto 1fr;
    justify-items: center;
`

const TelaHeader = styled.header`
    box-sizing: border-box;
    width: 100%;
    background-color: whitesmoke;
    display:grid;
    justify-content:start;
    align-items: center;
    font-size: calc(1.5em + 1vw);
    font-weight: bold;
    padding: 0 20px;
`

const NavBar = styled.nav`
    box-sizing: border-box;
    width: 100%;
    background-color: rgb(95,95,95);
    display:flex;
    justify-content: flex-start;
    border-top:1px solid whitesmoke;
`

const BtnPage = styled.button`
    font-size: calc(0.8em + 0.3vw);
    border:0;
    border-right:${props=> !props.ultimo && '1px solid rgb(200,200,200)'};
    background-color:${props => props.ativo ? 'dodgerblue': 'rgb(95,95,95)'};
    color: white;
    padding: 7px 14px;
    transition: 0.2s;

    :hover{
        background-color: rgb(26, 134, 241);
        color: white;
    }
`

const TelaMain = styled.main`
    box-sizing: border-box;
    padding: 20px;
    /* background-color: lightgreen; */
    display: flex;
    justify-content: center;
    width: 100%;
`

export class Tela extends React.Component {
    state = {
        formOn: true,
        listOn: false,
    }

    pageCadastro=()=>{this.setState({formOn:true, listOn:false})}
    pageLista=()=>{this.setState({formOn:false, listOn:true})}

    render(){
        const conteudo = this.state.formOn ? (<Formulario/>) : (<ListaUsers></ListaUsers>)

        return(
            <TelaBox>
                <TelaHeader>LabenUsers</TelaHeader>
                <NavBar>
                    <BtnPage onClick={this.pageCadastro} ativo={this.state.formOn}>
                        Cadastro de usuários
                    </BtnPage>
                    <BtnPage onClick={this.pageLista} ativo={this.state.listOn} ultimo={true}>
                        Lista de usuários
                    </BtnPage>
                </NavBar>
                {/* <BtnPage onClick={this.changePage}>
                    {this.state.formOn ? 'Lista de usuários' : 'Cadastro de usuários'}
                </BtnPage> */}
                <TelaMain>{conteudo}</TelaMain>
            </TelaBox>
        )
    }
}