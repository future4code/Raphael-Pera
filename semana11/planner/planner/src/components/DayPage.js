import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
    border: 1px solid black;
    padding: 10px;
`

const Header = styled.h4`
    margin-top: 0;
`

const TaskBox = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: left;
`
const TaskLine = styled.li`
    margin: 0;
    padding: 5px;
`


export const DayPage = () => {
    return (
        <Box>
            <Header>Dia da Semana</Header>
            <TaskBox>
                <TaskLine>Tarefa 1</TaskLine>
                <TaskLine>Tarefa 2</TaskLine>
                <TaskLine>Tarefa 3</TaskLine>
            </TaskBox>
        </Box>
    )
}