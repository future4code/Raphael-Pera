import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0 10px 0 30px;
    margin-top: 5px;
`

const Input = styled.input`
    width: 100%;
    border: none;
    outline: none;
    padding: 6px 3px;
`

const Btn = styled.button`
    border: none;
    background-color: rgb(107, 218, 107);
    color: white;
    width: 100%;
    margin: 10px 0;
    padding: 5px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
`


export class CreatePL extends React.Component{
    state={
        inputValue:''
    }

    onChangeInput=(event)=>{this.setState({inputValue: event.target.value})}
    onClickCriar=()=>{this.props.onClickCriar(this.state.inputValue); this.setState({inputValue:''})}
    onKey=(event)=>{event.key==='Enter' && this.onClickCriar()}
    
    render(){
        return(
            <Box>
                <Input value={this.state.inputValue} onChange={this.onChangeInput}></Input>
                <Btn onClick={this.onClickCriar}>Criar</Btn>
            </Box>

        )
    }
}
