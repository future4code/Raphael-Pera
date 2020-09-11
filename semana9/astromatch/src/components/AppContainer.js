import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { Principal } from './Principal'

const Box = styled.div`
    display:flex;
    justify-content: center;
`

export function AppContainer(){
    return(
        <Box>
            <Principal></Principal>
        </Box>
    )
}
