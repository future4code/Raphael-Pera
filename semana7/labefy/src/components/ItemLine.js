import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
    display:grid;
    grid-template:1fr / repeat(2, 1fr);
    padding: 10px;
    :hover{
        background-color: rgb(100,100,100);
    }

    >span{
        background-color: green;
        border: 1px solid white;
        padding: 0 0 0 5px;
    }
`


export class ItemLine extends React.Component{
    render(){
    let item = <Box><span>{this.props.conteudo.col1}</span><span>{this.props.conteudo.col2}</span></Box>
        return(
            // <Box>
            //     <span>Titulo</span>
            //     <span>Album</span>
            // </Box>
            <div>{item}</div>
        )
    }
}