import React, {useState, useEffect} from 'react'
import styled from 'styled-components'


const Box = styled.div`
    background-color: lightblue;
    border-radius: 10px 10px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    border: 1px solid rgb(100,100,100);
    border-bottom: 0;
`

const Btn = styled.button`
    border: 1px solid green;
    border-radius: 10px;
    padding: 5px 10px;
`

export function HeaderTop(props){

    const btnLista = props.cardORlist === 'card' ? 'Lista' : 'Inicio'

    return(
        <Box>
            <Btn onClick={props.clearClick} >Limpar</Btn>
            AstroMatch
            <Btn onClick={props.listClick} >{btnLista}</Btn>
        </Box>
    )
}