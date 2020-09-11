import React, {useState, useEffect, Fragment} from 'react'
import styled from 'styled-components'
import { HeaderTop } from './HeaderTop'
import { Card } from './Card'
import { NavBottom } from './NavBottom'


const Box = styled.div`
    /* background-color: rgb(240,240,240); */
    /* border: 1px solid black; */
    display:grid;
    grid-template:60px 1fr auto / 1fr;
    min-width: 300px;
    max-width: 500px;
    width: 96%; 
    height: 100vh;
    padding: 7px 0;
`

export function Principal(){
    return(
        <Box>
            <HeaderTop></HeaderTop>
            <Card/>
            <NavBottom></NavBottom>
        </Box>
    )
}
