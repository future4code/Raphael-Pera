import React, {useState, useEffect} from 'react'
import styled from 'styled-components'


const Box = styled.div`
    display: flex;
    justify-content: space-evenly;
    background-color: lightcoral;
    padding: 20px 0 13px 0;
    border-radius: 0 0 10px 10px;
`

const BtnX = styled.button`
    border: 1px solid blue;
    border-radius: 100%;
    padding: 20px 25px;
`

const BtnHeart = styled.button`
    border: 1px solid red;
    border-radius: 100%;
    padding: 20px 25px;
`

export function NavBottom(){
    return(
        <Box>
            <BtnX>X</BtnX>
            <BtnHeart>V</BtnHeart>
        </Box>
    )
}