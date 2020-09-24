import React /*,{ useState, useEffect }*/ from 'react'
import styled from 'styled-components'
// import axios from 'axios'
// import { baseUrl } from './APIData'

const Box = styled.div`
    border-left: 1px solid lightgray;
    padding: 10px;
    min-width: 150px;
    max-width: 300px;
    /* flex-grow:1; */
    :first-child {border-left:0;}
`

const Header = styled.h3`
    margin-top: 0;
    text-align: left;
`

const TaskBox = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: left;
`
const TaskLine = styled.li`
    margin: 0;
    padding: 5px 2px;
    /* display: grid; */
    /* grid-template-columns: 1fr 25px; */
    /* align-items: center; */

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const TaskText = styled.div`
    /* display: flex; */
    /* min-width: 1%; */
    /* word-break: break-all; */
    word-wrap: break-word;
    overflow: hidden;
`

const TaskDelBtn = styled.div`
    padding: 1px 3px;
    margin-left: 5px;
    color: red;
    :hover{background-color: rgb(245,245,245);}
    cursor: pointer;
    text-align: center;
`


export const DayPage = (props) => {
    const dayName = (dayNum) => {
        switch (dayNum) {
            case 1: return ['Domingo','dom'];
            case 2: return ['Segunda', 'seg'];
            case 3: return ['Terça', 'ter'];
            case 4: return ['Quarta', 'qua'];
            case 5: return ['Quinta', 'qui'];
            case 6: return ['Sexta', 'sex'];
            case 7: return ['Sábado', 'sab'];
            default: return ['Todas', ''];
        }
    } 


    return (
        <Box>
            <Header>{dayName(props.day)[0]} </Header>
            <TaskBox>
                {/* <TaskLine>{props.day !== '' && 'Tarefa Inicial'}</TaskLine> */}
                {props.taskList.length > 0 &&
                    props.taskList.map(task=>{
                        return (
                            Number(task.day) === props.day &&
                            <TaskLine key={task.id}>
                                <TaskText>{task.text}</TaskText>
                                <TaskDelBtn onClick={()=>props.deleteTask(task)}>x</TaskDelBtn>
                            </TaskLine>
                        )
                    })
                }
                {props.day === '' &&
                    props.taskList.length > 0 &&
                        props.taskList.map(task=>{
                            return (
                                <TaskLine key={task.id}>
                                    <TaskText>{`(${dayName(task.day)[1]}) ${task.text}`}</TaskText>
                                    <TaskDelBtn onClick={()=>props.deleteTask(task)}>x</TaskDelBtn>
                                </TaskLine>
                            )
                        })
                }
            </TaskBox>
        </Box>
    )
}