import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { baseUrl } from './APIData'

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
    /* display: flex;
    justify-content: space-between;
    align-items: center; */

    display: grid;
    grid-template-columns: 1fr 25px;
`

const TaskDelBtn = styled.span`
    padding: 1px 3px;
    margin-left: 5px;
    color: red;
    :hover{background-color: rgb(245,245,245);}
    cursor: pointer;
    text-align: center;
`


export const DayPage = (props) => {
    // const [taskList, setTaskList] = useState([])

    useEffect(()=>{
        // if (props.taskList.length > 0) {
        //     // setTaskList(props.taskList)
            console.log('DayPage > useEffect > props.day:', props.day)
            console.log('DayPage > useEffect > props.taskList:', props.taskList,)
            // console.log('DayPage > useEffect > taskList2:', taskList)
        //     verificaTaskList()
        // }
    },[props.taskList])


    const dayName = (dayNum) => {
        switch (dayNum) {
            case 1: return 'Domingo'; break;
            case 2: return 'Segunda'; break;
            case 3: return 'Terça'; break;
            case 4: return 'Quarta'; break;
            case 5: return 'Quinta'; break;
            case 6: return 'Sexta'; break;
            case 7: return 'Sábado'; break;
            default: return 'Diversos'; break;
        }
    } 

    // const deleteTask = (task) => {
    //     axios.delete(`${baseUrl}/${task.id}`)
    //         .then(response=>{console.log(response)})
    //         .catch(err=>{console.log(err)})
    // }

    // const verificaTaskList =()=>{
    //     console.log('verificaTaskList:', props.taskList)
    //     props.taskList.forEach(task => {
    //         console.log('verificaTaskList:', task.id, Number(task.day), task.text)
    //     });

    //     // const novaLista = props.taskList.map(task=>{
    //     //     return (
    //     //         task.day === props.day && task.text
    //     //     )
    //     // })
    //     // console.log('verificaTaskList:', novaLista)
    // }

    return (
        <Box>
            {/* <Header>Dia da Semana</Header> */}
            <Header>{dayName(props.day)} </Header>
            <TaskBox>
                <TaskLine>{props.day !== '' && 'Tarefa Inicial'}</TaskLine>
                {props.taskList.length > 0 &&
                    props.taskList.map(task=>{
                        return (
                            Number(task.day) === props.day &&
                            <TaskLine key={task.id}>
                                {task.text}
                                <TaskDelBtn onClick={()=>props.deleteTask(task)}>x</TaskDelBtn>
                            </TaskLine>
                        )
                    })
                }
                {props.day === '' &&
                    props.taskList.length > 0 &&
                        props.taskList.map(task=>{
                            return (
                                task.day === props.day &&
                                <TaskLine key={task.id}>
                                    {task.text}
                                    <TaskDelBtn onClick={()=>props.deleteTask(task)}>x</TaskDelBtn>
                                </TaskLine>
                            )
                        })
                }
            </TaskBox>
        </Box>
    )
}