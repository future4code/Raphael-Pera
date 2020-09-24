import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { baseUrl } from './APIData'
import { HeaderTop } from './HeaderTop'
import { DayPage } from './DayPage'

const Box = styled.div``

const BoxDays = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    /* background-color: lightcoral; */
    /* min-width: 100vw; */
`


export const HomePage = () => {
    const [taskList, setTaskList] = useState([])

    useEffect(()=>{
        getTaskList()
    },[])

    const getTaskList = () => {
        axios.get(baseUrl)
            .then(response=>{
                // console.log(response.data)
                setTaskList(response.data)
            })
            .catch(err=>{
                console.log(err)
            })
    }

    const createTask = (inputValue, selectValue) => {
        const body = {text: inputValue,day: selectValue,}
        // console.log(body)
        axios.post(baseUrl, body)
            .then(response=>{/*console.log(response);*/ getTaskList()})
            .catch(err=>{console.log(err)})
    }

    const deleteTask = (task) => {
        axios.delete(`${baseUrl}/${task.id}`)
            .then(response=>{console.log(response); getTaskList()})
            .catch(err=>{console.log(err)})
    }

    return(
        <Box>
            {/* {taskList.length > 0 && 'taskList setada no estado'} */}
            <HeaderTop createTask={createTask} />
            <BoxDays>
                <DayPage day={1} taskList={taskList} deleteTask={deleteTask}/>
                <DayPage day={2} taskList={taskList} deleteTask={deleteTask}/>
                <DayPage day={3} taskList={taskList} deleteTask={deleteTask}/>
                <DayPage day={4} taskList={taskList} deleteTask={deleteTask}/>
                <DayPage day={5} taskList={taskList} deleteTask={deleteTask}/>
                <DayPage day={6} taskList={taskList} deleteTask={deleteTask}/>
                <DayPage day={7} taskList={taskList} deleteTask={deleteTask}/>
                {/* <DayPage day={''} taskList={taskList} deleteTask={deleteTask}/> */}
            </BoxDays>
        </Box>
    )
}