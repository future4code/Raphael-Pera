import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { UserProfile } from './UserProfile'
import { UserEdit } from './UserEdit'
import editLogo18 from '../../img/edit-black-18dp.svg'
// import editLogo24 from '../../img/edit-black-24dp.svg'


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
    /* height:50px; */
    border-bottom: 1px solid rgb(200,200,200);
    /* padding: 7px 30px; */
    cursor: pointer;

    :hover{background-color: whitesmoke;}
`

const UserName = styled.p`
    margin:0;
    padding: 10px 20px;
    display:flex;
    align-items: center;
    flex-grow:1;
    :hover{font-weight:bold;}
`

export const BtnBox= styled.div`
    display:flex;
    justify-content: space-between;
`

export const BtnDel = styled.button`
    margin: 0 5px;
    padding: 1px 5px;
    border: 1px solid rgb(207, 135, 135);
    border-radius: 3px;
    background-color: rgb(250,250,250);
    color: rgb(207, 135, 135);
    font-size: 10px;
    cursor: pointer;

    :hover{
        background-color: rgb(240,240,240);
        /* text-decoration: underline; */
        color: red;
        border: 1px solid red;
    }
`

export const BtnEdit = styled.img`
    margin: 0 5px;
    padding: 4px;
    border: 1px solid transparent;
    :hover{
        background-color: rgb(230,230,230);
        border-radius: 5px;
        border: 1px solid gray;
    }
`

const baseURL = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
const axiosHeaders = {headers:{Authorization: 'raphael-ribeiro-jackson'}}

export class ListaUsers extends React.Component {
    state={
        userList:[],
        userProfile:{id:'', email:'',},
        userEdit:{id:'', name:'', email:'',},
    }


    componentDidMount(){
        this.getAllUsers()
    }


    getAllUsers=()=>{
        const request = axios.get(baseURL,axiosHeaders)
        request.then((resposta)=>{
            // console.log(`ListaUsers > getAllUsers > request.then (sucesso)`)
            // console.log(resposta.data)
            this.setState({userList: resposta.data})
        }).catch((erro)=>{
            console.log(`ListaUsers > getAllUsers > request.catch (erro)`)
            console.log(erro.response)
        })
    }


    getUserById=(user)=>{
        const request = axios.get(`${baseURL}/${user.id}`,axiosHeaders)
        request.then((response)=>{
            console.log(response.data)
            return response.data.email
        }).catch((error)=>{
            console.log(error.response)
        })
    }


    userDel=(user)=>{
        const confirmacao = window.confirm(`Deseja realmente excluir o cadastro do usuário ${user.name}?`)

        if(confirmacao){
            const request = axios.delete(`${baseURL}/${user.id}`,axiosHeaders)            
            request.then((resposta)=>{
                this.getAllUsers()
                alert(`Cadastro do usuário ${user.name} excluído com sucesso`)
            }).catch((erro)=>{
                alert(`Erro ao excluir o cadastro do usuário ${user.name} (erro: ${erro.response.status})`)
            })
        }
    }

    
    showProfile=(user)=>{
        console.log('showProfile')
        if(user.id === this.state.userProfile.id){
            this.setState({userProfile:{id:'', email:'',}})
        } else {
            const request = axios.get(`${baseURL}/${user.id}`,axiosHeaders)
            request.then((response)=>{
                console.log(response.data)
                this.setState({userProfile:{id: user.id, email: response.data.email}})
            }).catch((error)=>{
                console.log(error.response)
            })
        }
    }

    showEdit=(user)=>{
        console.log('showEdit')
        if(user.id === this.state.userEdit.id){
            this.setState({userEdit:{id:'', name:'', email:'',}})
        } else {
            const request = axios.get(`${baseURL}/${user.id}`,axiosHeaders)
            request.then((response)=>{
                console.log(response.data)
                // this.setState({userEdit:{id: user.id, email: response.data.email}})
                this.setState({userEdit:{id:user.id, name:response.data.name, email:response.data.email,}})
            }).catch((error)=>{
                console.log(error.response)
            })
        }
    }


    render(){
        console.log('ListaUsers > render')
        const userLines = this.state.userList.map((user)=>{
            return(
                <UserBox key={user.id}>
                    <UserName onClick={()=>this.showProfile(user)}>{user.name}</UserName>
                    <BtnBox>
                        <BtnEdit src={editLogo18} onClick={()=>this.showEdit(user)}></BtnEdit>
                        <BtnDel onClick={()=>this.userDel(user)} >DEL</BtnDel>
                    </BtnBox>

                    {user.id === this.state.userProfile.id && (
                        <UserProfile
                            userName={user.name}
                            userEmail={this.state.userProfile.email !=='' && this.state.userProfile.email}
                            close={()=>this.showProfile(user)}
                            userDel={()=>this.userDel(user)}
                        ></UserProfile>
                    )}

                    {user.id === this.state.userEdit.id && (
                        <UserEdit
                            // userName={user.name}
                            // // userEmail={'fulana@email.com'}
                            // userEmail={this.state.userProfile.email !=='' && this.state.userProfile.email}
                            close={()=>this.showEdit(user)}
                            // userDel={()=>this.userDel(user)}
                        ></UserEdit>
                    )}
                </UserBox>
            )  
        })

        return(
            <ListaBox>
                <ListaHeader>Usuários Cadastrados</ListaHeader>
                {userLines}
            </ListaBox>
        )
    }
}