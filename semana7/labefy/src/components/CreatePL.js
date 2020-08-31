import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { baseUrl, baseHeaders} from './API'


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
    onClickCriar=()=>{
        if(this.state.inputValue !==''){
            // const request = axios.get(`${baseUrl}search?name=${this.state.inputValue}`, baseHeaders)
            const body={name:this.state.inputValue}
            const request = axios.post(baseUrl, body, baseHeaders)
            request
                .then((response)=>{
                    console.log(response)
                    // this.setState({inputValue:''})
                    this.props.onClickCriar(this.state.inputValue)
                })
                .catch((error)=>{
                    console.log(error)
                })
        }
    }

    onKey=(event)=>{event.key==='Enter' && this.onClickCriar()}
    
    render(){
        return(
            <Box onKeyDown={this.onKey}> 
                <Input value={this.state.inputValue} onChange={this.onChangeInput}></Input>
                <Btn onClick={this.onClickCriar}>Criar</Btn>
            </Box>

        )
    }
}
