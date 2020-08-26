import React from 'react'
import styled from 'styled-components'
import axios from 'axios'


const UserBox = styled.section`
    position: absolute;
    top: calc(50vh - 200px);
    left: calc(50vw - 150px);
    min-width: 300px;
    min-height: 400px;
    /* margin: 30px auto; */
    border: 1px solid black;
    background-color: rgb(240,240,240);
    padding: 7px;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content:space-evenly;
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
    render(){
        return(
            <UserBox>
                <BtnClose onClick={this.props.close} >x</BtnClose>
            </UserBox>
        )
    }
}
