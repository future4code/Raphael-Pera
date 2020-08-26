import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { BtnBox, BtnDel, BtnEdit } from './ListaUsers'
import editLogo18 from '../../img/edit-black-18dp.svg'


const UserBox = styled.section`
    position: absolute;
    min-width: 100px;
    min-height: 100px;
    border: 1px solid black;
    background-color: rgb(240,240,240);
    padding: 7px;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content:space-evenly;
`

const UserName = styled.h4`
    margin: 7px 0 0 0;
    padding:0;
    text-align: left;
`

const UserEmail = styled.p`
    margin: 10px 0 25px 0;
    padding:0;
    text-align: left;
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


export class UserProfile extends React.Component {
    render(){
        return(
            <UserBox>
                <BtnClose onClick={this.props.close} >x</BtnClose>
                <UserName>{this.props.userName}</UserName>
                <UserEmail>{this.props.userEmail}</UserEmail>
                <BtnBox>
                        <BtnEdit src={editLogo18}></BtnEdit>
                        <BtnDel onClick={this.props.userDel} >DEL</BtnDel>
                    </BtnBox>
                {/* <BtnDel onClick={this.props.userDel} >excluir</BtnDel> */}
            </UserBox>
        )
    }
}
