import React from 'react'
import styled from 'styled-components'
import { HeaderTop } from './HeaderTop'
import { DayPage } from './DayPage'

const Box = styled.div``

const BoxDays = styled.div`
    display: flex;
`


export const HomePage = () => {
    return(
        <Box>
            Hello HomePage
            <HeaderTop/>
            <BoxDays>
                <DayPage/>
                <DayPage/>
                <DayPage/>
                <DayPage/>
                <DayPage/>
                <DayPage/>
                <DayPage/>
            </BoxDays>
            
        </Box>
    )
}