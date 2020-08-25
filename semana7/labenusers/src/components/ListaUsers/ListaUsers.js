import React from 'react'
import styled from 'styled-components'
import axios from 'axios'



const ListaBox = styled.div`
    max-width: 600px;
    margin: 0 auto;
`

const ListaHeader = styled.h3`
    vertical-align: center;
`

const UserBox = styled.div`
    display:flex;
    align-items: center;
    justify-content:space-between;
    border-bottom: 1px solid rgb(200,200,200);
    padding: 5px 30px;
`

const UserName = styled.p`
    margin-right: 30px;
`

const BtnDel = styled.button`
    margin:0;
    padding: 3px 6px;
    border: 1px solid red;
    border-radius: 3px;
    background-color: rgb(250,250,250);
    color: red;

    :hover{
        background-color: rgb(240,240,240);
        text-decoration: underline;
    }
`

export class ListaUsers extends React.Component {
    state={
        userList:[],
    }

    componentDidMount(){
        // console.log('ListaUsers > componentDidMount')
        this.getAllUsers()
    }

    getAllUsers=()=>{
        const request = axios.get(
            'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
            {headers:{Authorization: 'raphael-ribeiro-jackson'}}
        )

        request.then((resposta)=>{
            // console.log(`ListaUsers > getAllUsers > request.then (sucesso)`)
            // console.log(resposta.data)
            this.setState({userList: resposta.data})
        }).catch((erro)=>{
            // console.log(`ListaUsers > getAllUsers > request.catch (erro)`)
            // console.log(erro.response)
        })
    }

    userDel=(user)=>{
        // console.log(`ListaUsers > userDel`)
        const request = axios.delete(
            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${user.id}`,
            {headers:{Authorization: 'raphael-ribeiro-jackson'}}
        )
        
        request.then((resposta)=>{
            // console.log(`ListaUsers > userDel > request.then (sucesso)`)
            this.getAllUsers()
            alert(`Cadastro do usuário ${user.name} excluído com sucesso`)
        }).catch((erro)=>{
            // console.log(`ListaUsers > userDel > request.catch (erro)`)
            alert(`Erro ao excluir o cadastro do usuário ${user.name} (erro: ${erro.response.status})`)
        })
        // console.log(user.name, user.id)
    }

    render(){
        // console.log('ListaUsers > Render')
        // console.log(this.state.userList)

        const userLines = this.state.userList.map((user)=>{
            return(
                <UserBox>
                    <UserName>{user.name}</UserName>
                    <BtnDel onClick={()=>this.userDel(user)} >excluir</BtnDel>
                </UserBox>
            )  
        })

        return(
            <ListaBox>
                <ListaHeader>Usuários Cadastrados</ListaHeader>
                {/* <UserBox>
                    <UserName>Raphael Ribeiro</UserName>
                    <BtnDel onClick={()=>this.props.userDel('cortina')} >Del</BtnDel>
                </UserBox> */}
                {userLines}
            </ListaBox>
        )
    }
}